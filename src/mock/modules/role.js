/*
 * 角色管理模块
 */

// 保存
export function save () {
  return {
    url: 'role/save',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
  }
}
// 批量删除
export function batchDelete () {
  return {
    url: 'role/delete',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
  }
}
// 查询全部
export function findAll () {
  let findAllData = {
    'code': 200,
    'msg': null,
    'data': [
      {
        'id': 1,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'name': 'admin',
        'remark': '超级管理员',
        'delFlag': 0
      },
      {
        'id': 2,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'name': 'dev',
        'remark': '开发人员',
        'delFlag': 0
      },
      {
        'id': 3,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'name': 'test',
        'remark': '测试人员',
        'delFlag': 0
      }
    ]
  }
  return {
    url: 'role/findAll',
    type: 'get',
    data: findAllData
  }
}
// 分页查询
export function findPage (params) {
  let findPageData = {
    'code': 200,
    'msg': null,
    'data': {}
  }
  let pageNum = 1
  let pageSize = 10
  if (params !== null) {
    // pageNum = params.pageNum
  }
  if (params !== null) {
    // pageSize = params.pageSize
  }
  let content = this.getContent(pageNum, pageSize)
  findPageData.data.pageNum = pageNum
  findPageData.data.pageSize = pageSize
  findPageData.data.totalSize = 50
  findPageData.data.content = content
  return {
    url: 'role/findPage',
    type: 'post',
    data: findPageData
  }
}
export function getContent (pageNum, pageSize) {
  let content = []
  for (let i = 0; i < pageSize; i++) {
    let obj = {}
    let index = ((pageNum - 1) * pageSize) + i + 1
    obj.id = index
    obj.name = 'role' + index
    obj.remark = 'remark role' + index
    if (i % 2 === 0) {
    }
    obj.createBy = 'admin'
    obj.createTime = new Date()
    obj.createBy = 'admin'
    obj.createTime = new Date()
    content.push(obj)
  }
  return content
}
// 查询角色菜单集合
export function findRoleMenus (params) {
  let findRoleMenuData = {
    'code': 200,
    'msg': null,
    'data': [{
      'id': 1,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 0,
      'name': '系统管理',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'el-icon-setting',
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 2,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 1,
      'name': '用户管理',
      'url': '/sys/user',
      'perms': null,
      'type': 1,
      'icon': 'el-icon-service',
      'orderNum': 1,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 3,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 1,
      'name': '角色管理',
      'url': '/sys/role',
      'perms': null,
      'type': 1,
      'icon': 'el-icon-view',
      'orderNum': 3,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 4,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 1,
      'name': '菜单管理',
      'url': '/sys/menu',
      'perms': null,
      'type': 1,
      'icon': 'el-icon-menu',
      'orderNum': 4,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 20,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 2,
      'name': '查看',
      'url': null,
      'perms': 'sys:user:view',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 21,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 2,
      'name': '新增',
      'url': null,
      'perms': 'sys:user:add',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 22,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 2,
      'name': '修改',
      'url': null,
      'perms': 'sys:user:edit',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 23,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 2,
      'name': '删除',
      'url': null,
      'perms': 'sys:user:delete',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 24,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 3,
      'name': '查看',
      'url': null,
      'perms': 'sys:role:view',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 25,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 3,
      'name': '新增',
      'url': null,
      'perms': 'sys:role:add',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 26,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 3,
      'name': '修改',
      'url': null,
      'perms': 'sys:role:edit',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 27,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 3,
      'name': '删除',
      'url': null,
      'perms': 'sys:role:delete',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 28,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 4,
      'name': '查看',
      'url': null,
      'perms': 'sys:menu:view',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 29,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 4,
      'name': '新增',
      'url': null,
      'perms': 'sys:menu:add',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 30,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 4,
      'name': '修改',
      'url': null,
      'perms': 'sys:menu:edit',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    },
    {
      'id': 31,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 4,
      'name': '删除',
      'url': null,
      'perms': 'sys:menu:delete',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': null,
      'children': null
    }
    ]
  }
  return {
    url: 'role/findRoleMenus',
    type: 'get',
    data: findRoleMenuData
  }
}
