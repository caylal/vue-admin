/**
 * 时间日期相关操作
 */

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018-09-23 11:54:16
 * @param datetime 国际化日期格式
 */
export const formatDatetime = (date) => {
  const dateMat = date != null ? new Date(date) : new Date()
  const year = dateMat.getFullYear()
  const month = dateMat.getMonth() + 1
  const day = dateMat.getDate()
  const hour = dateMat.getHours()
  const min = dateMat.getMinutes()
  const second = dateMat.getSeconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, min, second].map(formatNumber).join(':')
}

const formatNumber = (n) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}
