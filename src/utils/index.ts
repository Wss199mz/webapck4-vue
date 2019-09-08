/**
 * Created by Administrator on 2017/9/21 0021.
 * 封装常用工具函数,包含对原生基本类型的扩展
 */

interface IForm {
  original: any,
  copy: any
}
export const formatJson = function (filterVal: any, list: any) {
  return list.map((v: any) => filterVal.map((j: any) => v[j]))
}

let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
let throttleTime: any = ''
export const util = {
  // 节流
  throttle (fn: any, time: any) {
    if (throttleTime) {
      clearTimeout(throttleTime)
    }
    throttleTime = setTimeout(() => { // 只执行最后一个定时器的 结果
      fn()
    }, time)
  },
  eleScrollTop (windows: any, ele: any) {
    if (ele.offsetTop + ele.clientHeight <= windows.clientHeight + windows.scrollTop) {
      return true
    } else {
      return false
    }
  }
}
