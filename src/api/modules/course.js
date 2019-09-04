import axios from '../axios'

/*
 * 课程管理模块
 */

// 保存
export const save = (data) => {
  return axios({
    url: '/course/save',
    method: 'post',
    data
  })
}
// 删除
export const batchDelete = (data) => {
  return axios({
    url: '/course/delete',
    method: 'post',
    data
  })
}
// 回收课程
export const recoveryReason = (data) => {
  return axios({
    url: 'course/recovery',
    method: 'post',
    data
  })
}
// 分页查询
export const findPage = (data) => {
  return axios({
    url: '/course/findPage',
    method: 'post',
    data
  })
}
