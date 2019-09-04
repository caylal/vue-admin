<template>
  <div class="page-container">
    <!--工具栏-->
    <div class="toolbar" style="float:left;padding-top:10px;padding-left:15px;">
      <el-form :inline="true" :model="filters" :size="size">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="课程名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="filters.type" placeholder="请选择课程类型">
            <el-option label="文档" value="1"></el-option>
            <el-option label="视频" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="filters.btype" placeholder="请选择业务类型">
            <el-option v-for="item in businessTypeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="filters.tag" placeholder="标签"></el-input>
        </el-form-item>
        <el-form-item>
          <per-button icon="fa fa-search" :label="$t('action.search')" perms="learn:course:view" type="primary" @click="findPage(null)"/>
        </el-form-item>
        <el-form-item>
          <per-button icon="fa fa-plus" :label="$t('action.add')" perms="learn:course:add" type="primary" @click="handleAdd"/>
        </el-form-item>
      </el-form>
    </div>
    <div class="toolbar" style="float:right;padding-top:10px;padding-right:15px;">
      <el-form :inline="true" :size="size">
        <el-form-item>
          <el-button-group>
            <el-tooltip content="刷新" placement="top">
              <el-button icon="fa fa-refresh" @click="findPage(null)"></el-button>
            </el-tooltip>
            <el-tooltip :content="displayImages ? '图文显示' : '列表显示'" placement="top">
              <el-button icon="fa fa-filter" @click="displayImages = !displayImages"></el-button>
            </el-tooltip>
          </el-button-group>
        </el-form-item>
      </el-form>
    </div>
    <!--表格树内容栏-->
    <el-table v-if="!displayImages" :data="pageResult.content"  max-height="480" stripe size="mini" style="width: 100%;" v-loading="loading"  element-loading-text="$t('action.loading')">
      <el-table-column prop="id" header-align="center" align="center" min-width="100" label="ID"></el-table-column>
      <el-table-column prop="name" header-align="center" align="center" min-width="180" label="课程名称"></el-table-column>
      <el-table-column header-align="center" align="center" label="课程类型" min-width="100">
        <template slot-scope="scope">
          <i v-if="scope.row.type === 2" class="fa fa-video-camera"></i>
          <i v-else-if="scope.row.type === 1" class="fa fa-file-text"></i>
        </template>
      </el-table-column>
      <el-table-column prop="btype" header-align="center" align="center" min-width="100" label="业务类型" :formatter="btypeFormat"></el-table-column>
      <el-table-column prop="createBy" header-align="center" align="center" min-width="100" label="创建人" ></el-table-column>
      <el-table-column prop="createTime" header-align="center" align="center" min-width="150" label="创建时间" :formatter="dateFormat" ></el-table-column>
      <el-table-column prop="visit" header-align="center" align="center" min-width="100" label="访问数" ></el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" min-width="200" :label="$t('action.operation')" >
        <template slot-scope="scope">
          <per-button :label="$t('action.recovery')" perms="learn:course:edit" type="success" @click="handleRecovery(scope.row)"/>
          <per-button icon="fa fa-edit" :label="$t('action.edit')" perms="learn:course:edit" @click="handleEdit(scope.row)"/>
          <per-button icon="fa fa-trash" :label="$t('action.delete')" perms="learn:course:delete" type="danger" @click="handleDelete(scope.row)"/>
        </template>
      </el-table-column>
    </el-table>
    <!-- 图文显示内容 -->
    <el-row :gutter="5" v-if="displayImages" style="clear:both">
      <el-col :span="6" v-for=" item in pageResult.content" :key="item.id">
        <el-card :body-style="{ padding: '0px'}" class="box-card">
          <div class="box-body">
            <div class="box-body-img"><img :src="item.img" alt=""></div>
            <div class="box-body-content">
              <div class="content-name"><el-tooltip :content="item.name" placement="top"><strong>{{item.name}}</strong></el-tooltip></div>
              <div class="content-desc margin-top-small">
                <i class="fa fa-video-camera"></i> &nbsp;
                <span>简介：</span>
                <el-tooltip :content="item.desc">
                  <span>{{item.descm}}</span>
                </el-tooltip>
              </div>
              <div class="content-type margin-top-small">
                <span>业务类型：</span>
                <span>{{btypeFormat(item)}}</span>
              </div>
              <div class="content-create margin-top-small">
                <span>创建人：</span>
                <span>{{item.createBy}}</span>
              </div>
              <div class="content-time margin-top-small">
                <span>时间：</span>
                 <span>{{dateFormat(item, {property: 'createTime'})}}</span>
              </div>
              <div class="content-opt">
                <el-button-group>
                  <el-tooltip content="回收" placement="bottom">
                    <per-button size= "medium" icon="el-icon-upload" perms="learn:course:edit" @click="handleRecovery(item)"/>
                  </el-tooltip>
                  <el-tooltip content="编辑" placement="bottom">
                    <per-button size= "medium" icon="el-icon-edit" perms="learn:course:edit" @click="handleEdit(item)"/>
                  </el-tooltip>
                  <el-tooltip content="删除" placement="bottom">
                    <per-button size= "medium" icon="el-icon-delete" perms="learn:course:edit" @click="handleDelete(item)"/>
                  </el-tooltip>
                </el-button-group>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!--分页栏-->
    <div class="toolbar" style="padding:10px;">
      <el-pagination
        layout="total, prev, pager, next, jumper"
        @current-change="refreshPageRequest"
        :current-page="pageRequest.pageNum"
        :page-size="pageRequest.pageSize"
        :total="pageResult.totalSize"
        style="float:right;"
      ></el-pagination>
    </div>
    <!--新增编辑界面-->
    <el-dialog :title="operation?'新增':'编辑'" width="40%" :visible.sync="dialogVisible" :close-on-click-modal="false">
      <el-form :model="dataForm" label-width="80px" :rules="dataFormRules" ref="dataForm" :size="size" style="text-align:left;" label-position="right">
        <el-form-item label="课程名称" prop="name">
          <el-input v-model="dataForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input v-model="dataForm.desc" type="textarea" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程类型" prop="type">
          <el-radio-group v-model="dataForm.type">
            <el-radio :disabled="!operation" v-for="(type, index) in courseTypeList" :label="index + 1" :key="index">{{ type }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="业务类型" prop="btype">
          <el-select v-model="dataForm.btype" placeholder="请选择">
            <el-option v-for="item in businessTypeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关联文件" prop="courseFile">
          <el-select v-model="dataForm.courseFile" multiple placeholder="请选择" style="width: 100%;">
            <el-option v-for="item in courseStore" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签" prop="tag">
          <el-input v-model="dataForm.tag" type="textarea" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :size="size" @click.native="dialogVisible = false">{{$t('action.cancel')}}</el-button>
        <el-button :size="size" type="primary" @click.native="submitForm" :loading="editLoading">{{$t('action.submit')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import PerButton from '@/components/PerButton'
import { formatDatetime } from '@/utils/datetime'
export default {
  components: {
    PerButton
  },
  data () {
    return {
      size: 'small',
      loading: false,
      filters: {
        name: '',
        type: '',
        btype: '',
        tag: ''
      },
      courseTypeList: ['文档', '视频'],
      businessTypeList: [],
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {},
      displayImages: false,
      operation: false, // true:新增, false:编辑
      dialogVisible: false, // 新增编辑界面是否显示
      editLoading: false,
      recoverLoading: false,
      dataFormRules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        type: [{ required: true, message: '请选择类型', trigger: 'blur' }],
        btype: [{ required: true, message: '请选择业务类型', trigger: 'blur' }]
      },
      // 新增编辑界面数据
      dataForm: {
        name: '',
        type: 1,
        desc: '',
        btype: '',
        courseFile: '',
        status: 1,
        tag: ''
      },
      courseStore: [],
      // 课程下架原因
      recoveryReason: {
        reason: ''
      }
    }
  },
  methods: {
    // 获取分页数据
    findPage: function () {
      this.loading = true
      this.pageRequest.columnFilters = {
        name: { name: 'name', value: this.filters.name },
        type: { name: 'type', value: this.filters.type },
        btype: { name: 'btype', value: this.filters.btype },
        tag: { name: 'tag', value: this.filters.tag }
      }
      this.$api.course.findPage(this.pageRequest).then(res => {
        res.data.content.map(this.mapContent)
        console.log('data', res.data)
        this.pageResult = res.data
        this.loading = false
      })
    },
    mapContent: function (data) {
      let arr = data.desc.split('')
      data.descm = arr.length > 45 ? arr.substring(0, 45).join('') + '...' : data.desc
      return data
    },
    // 获取业务类型
    findBusinessAll: async function () {
      await this.$api.business.findAll().then(res => {
        this.businessTypeList = res.data
      })
    },
    // 换页刷新
    refreshPageRequest: function (pageNum) {
      this.pageRequest.pageNum = pageNum
      this.findPage()
    },
    // 删除
    handleDelete: function (row) {
      this.$confirm('确认删除选中记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        this.$api.course.batchDelete(row).then(res => {
          this.findPage()
          this.$message({ message: '删除成功', type: 'success' })
        })
      })
    },
    // 显示新增界面
    handleAdd: function () {
      if (this.businessTypeList.length <= 0) {
        this.$confirm('请添加业务类型', '提示', {
          type: 'warning'
        }).then(() => {
          this.$router.push({path: '/sys/business'})
        })
      } else {
        this.dialogVisible = true
        this.operation = true
        this.dataForm = {
          name: '',
          type: 1,
          desc: '',
          btype: '',
          courseFile: '',
          status: 1,
          tag: ''
        }
      }
    },
    // 显示编辑界面
    handleEdit: function (row) {
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, row)
    },
    // 课程回收
    handleRecovery: function (row) {
      this.$prompt('请输入课程回收原因', '提示', {
        inputType: 'textarea',
        inputPattern: /\S{2,}/,
        inputErrorMessage: '不能为空，请输入2个字以上内容'
      }).then(({ value }) => {
        this.recoverLoading = true
        this.recoveryReason.reason = value
        console.log('reason', this.recoveryReason)
        this.$api.course.recoveryReason(this.recoveryReason).then(res => {
          this.recoverLoading = false
          if (res.code === 200) {
            this.$message({message: '操作成功', type: 'success'})
            this.$router.push({path: '/learn/store'})
          } else {
            this.$message({
              message: '操作失败, ' + res.msg,
              type: 'error'
            })
          }
        })
      })
    },
    // 编辑
    submitForm: function () {
      this.$refs.dataForm.validate(valid => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.editLoading = true
            let params = Object.assign({}, this.dataForm)
            let userRoles = []
            this.$api.course.save(params).then(res => {
              this.editLoading = false
              if (res.code === 200) {
                this.$message({ message: '操作成功', type: 'success' })
                this.dialogVisible = false
                this.$refs['dataForm'].resetFields()
                this.$router.push({path: '/learn/store'})
              } else {
                this.$message({
                  message: '操作失败, ' + res.msg,
                  type: 'error'
                })
              }
            })
          })
        }
      })
    },
    // 业务类型格式化
    btypeFormat: function (row, column) {
      return this.businessTypeList.filter(item => item.id === row.btype)[0].name
    },
    // 时间格式化
    dateFormat: function (row, column) {
      return formatDatetime(row[column.property])
    }
  },
  async mounted () {
    await this.findBusinessAll()
    this.findPage()
  }
}
</script>

<style scoped lang="scss">
  .el-col {
    margin-bottom: 5px;
  }
  .margin-top-small {
    margin-top: 5px;
  }
  .box-card {
    width: 360px;
    height: 260px;
    .box-body {
      width: 360px;
      height: 260px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      &-img {
        width: 150px;
        height: 150px;
        margin-top: 30px;
        img {
          width: 150px;
          height: 150px;
        }
      }
      &-content {
        text-align: left;
        width: 200px;
        padding: 5px;
        box-sizing: border-box;
        font-size: 14px;
        color: #999;
        .content-name {
          font-size: 16px;
          color: #409EFF;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .content-opt {
          margin-top: 15px;
        }
      }
    }
  }
</style>
