export default {
  state: {
    appName: 'Exam Platform', // 应用名称
    collapse: false, // 导航栏收缩状态
    themeColor: '#1890ff', // 主题颜色
    oldThemeColor: '#1890ff', // 上一次主题颜色
    menuRouteLoaded: false // 菜单和路由是否已经加载
  },
  getters: {
    collapse (state) {
      return state.collapse
    }
  },
  mutations: {
    onCollapse (state) {
      state.collapse = !state.collapse
    },
    setThemeColor (state, themeColor) { // 改变主题颜色
      state.oldThemeColor = state.themeColor
      state.themeColor = themeColor
    },
    menuRouteLoaded (state, menuRouteLoaded) { // 改变菜单和路由的加载状态
      state.menuRouteLoaded = menuRouteLoaded
    }
  },
  actions: {
  }
}
