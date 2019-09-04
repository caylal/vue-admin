/*
 * 业务理模块
 */

// 保存
export function save () {
  return {
    url: 'business/save',
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
    url: 'business/delete',
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
    url: 'business/findPage',
    type: 'get',
    data: findPageData
  }
}

export function findAll () {
  return {
    url: 'business/findAll',
    type: 'get',
    data: {
      'code': 200,
      'msg': null,
      'data': [{ id: 1, name: '业务1' }, {id: 2, name: '业务2'}, {id: 3, name: '业务3'}]
    }
  }
}

export function getContent (pageNum, pageSize) {
  let content = []
  for (let i = 0; i < pageSize; i++) {
    let obj = {}
    let index = ((pageNum - 1) * pageSize) + i + 1
    obj.id = index
    obj.name = 'course' + index
    obj.type = Math.floor(Math.random() * (2 + 1 - 1) + 1)
    obj.btype = Math.floor(Math.random() * (3 + 1 - 1) + 1)
    obj.desc = 'course desc' + index
    obj.visit = Math.floor(Math.random() * (50 + 1 - 1) + 1)
    obj.status = 1
    obj.createBy = 'admin'
    obj.createTime = new Date()
    obj.createBy = 'admin'
    obj.createTime = new Date()
    content.push(obj)
  }
  return content
}
