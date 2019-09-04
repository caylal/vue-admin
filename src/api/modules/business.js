import axios from '../axios'

/*
 * 业务管理模块
 */

// 保存
export const save = (data) => {
  return axios({
    url: '/business/save',
    method: 'post',
    data
  })
}
// 删除
export const batchDelete = (data) => {
  return axios({
    url: '/business/delete',
    method: 'post',
    data
  })
}
// 分页查询
export const findPage = (data) => {
  return axios({
    url: '/business/findPage',
    method: 'get',
    data
  })
}
// 查询全部
export const findAll = () => {
  return axios({
    url: 'business/findAll',
    method: 'get'
  })
}
