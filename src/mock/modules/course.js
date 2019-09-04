/*
 * 课程管理模块
 */

// 保存
export function save () {
  return {
    url: 'course/save',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
  }
}
export function recoveryReason () {
  return {
    url: 'course/recovery',
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
    url: 'course/delete',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
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
  let pageSize = 8
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
    url: 'course/findPage',
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
    obj.name = '课程课程课程' + index
    obj.type = Math.floor(Math.random() * (2 + 1 - 1) + 1)
    obj.btype = Math.floor(Math.random() * (3 + 1 - 1) + 1)
    obj.desc = '课程简介课程简介课程简介课程简介课程简介课程简介课程简介' + index
    obj.visit = Math.floor(Math.random() * (50 + 1 - 1) + 1)
    obj.status = 1
    obj.img = `@/assets/images/p${index}.png`
    obj.createBy = 'admin'
    obj.createTime = new Date()
    content.push(obj)
  }
  return content
}
