/*
* 菜单管理模块
 */

// 获取导航菜单树
export function findNavTree () {
  const navTreeData = {
    'code': 200,
    'msg': null,
    'data': [{
      'id': 1,
      'createBy': 'admin',
      'createTime': new Date(),
      'lastUpdateBy': 'admin',
      'lastUpdateTime': new Date(),
      'parentId': 0,
      'name': '系统管理',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'el-icon-setting',
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': 0,
      'children': [{
        'id': 2,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 1,
        'name': '用户管理',
        'url': '/sys/user',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-user-circle',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '系统管理',
        'level': 1,
        'children': []
      }, {
        'id': 3,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 1,
        'name': '角色管理',
        'url': '/sys/role',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-eye',
        'orderNum': 3,
        'delFlag': 0,
        'parentName': '系统管理',
        'level': 1,
        'children': []
      }, {
        'id': 4,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 1,
        'name': '菜单管理',
        'url': '/sys/menu',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-th-large',
        'orderNum': 4,
        'delFlag': 0,
        'parentName': '系统管理',
        'level': 1,
        'children': []
      },
      {
        'id': 15,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 1,
        'name': '业务管理',
        'url': '/sys/business',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-briefcase',
        'orderNum': 4,
        'delFlag': 0,
        'parentName': '系统管理',
        'level': 1,
        'children': []
      }]
    },
    {
      'id': 5,
      'createBy': 'admin',
      'createTime': new Date(),
      'lastUpdateBy': 'admin',
      'lastUpdateTime': new Date(),
      'parentId': 0,
      'name': '教学服务',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'fa fa-mortar-board',
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': 0,
      'children': [{
        'id': 6,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 5,
        'name': '课程管理',
        'url': '/learn/course',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-leanpub',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '教学服务',
        'level': 1,
        'children': []
      },
      {
        'id': 7,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 5,
        'name': '课程仓库',
        'url': '/learn/store',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-archive',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '教学服务',
        'level': 1,
        'children': []
      },
      {
        'id': 8,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 5,
        'name': '文件管理',
        'url': '/learn/file',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-file-text',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '教学服务',
        'level': 1,
        'children': []
      }
      ]
    },
    {
      'id': 9,
      'createBy': 'admin',
      'createTime': new Date(),
      'lastUpdateBy': 'admin',
      'lastUpdateTime': new Date(),
      'parentId': 0,
      'name': '考试服务',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'fa fa-pencil-square-o',
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': 0,
      'children': [{
        'id': 10,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 9,
        'name': '题库管理',
        'url': '/exam/question',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-wpforms',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '考试服务',
        'level': 1,
        'children': []
      },
      {
        'id': 11,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 9,
        'name': '试卷管理',
        'url': '/exam/paper',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-file-text-o',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '考试服务',
        'level': 1,
        'children': []
      }]
    },
    {
      'id': 12,
      'createBy': 'admin',
      'createTime': new Date(),
      'lastUpdateBy': 'admin',
      'lastUpdateTime': new Date(),
      'parentId': 0,
      'name': '拨测服务',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'fa fa-volume-control-phone',
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': 0,
      'children': [{
        'id': 13,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 12,
        'name': '模板管理',
        'url': '/call/tmpl',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-file-code-o',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '拨测服务',
        'level': 1,
        'children': []
      },
      {
        'id': 14,
        'createBy': 'admin',
        'createTime': new Date(),
        'lastUpdateBy': 'admin',
        'lastUpdateTime': new Date(),
        'parentId': 12,
        'name': '任务管理',
        'url': '/call/task',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-tasks',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '拨测服务',
        'level': 1,
        'children': []
      }]
    }
    ]
  }
  return {
    url: 'menu/findNavTree',
    type: 'get',
    data: navTreeData
  }
}

// 获取菜单树
export function findMenuTree () {
  const menuTreeData = {
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
      'level': 0,
      'children': [{
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
        'icon': 'fa fa-user-circle',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '系统管理',
        'level': 1,
        'children': [{
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
          'parentName': '用户管理',
          'level': 2,
          'children': []
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
          'parentName': '用户管理',
          'level': 2,
          'children': []
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
          'parentName': '用户管理',
          'level': 2,
          'children': []
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
          'parentName': '用户管理',
          'level': 2,
          'children': []
        }]
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
        'icon': 'fa fa-eye',
        'orderNum': 3,
        'delFlag': 0,
        'parentName': '系统管理',
        'level': 1,
        'children': [{
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
          'parentName': '角色管理',
          'level': 2,
          'children': []
        }, {
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
          'parentName': '角色管理',
          'level': 2,
          'children': []
        }, {
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
          'parentName': '角色管理',
          'level': 2,
          'children': []
        }, {
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
          'parentName': '角色管理',
          'level': 2,
          'children': []
        }]
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
        'icon': 'fa fa-th-large',
        'orderNum': 4,
        'delFlag': 0,
        'parentName': '系统管理',
        'level': 1,
        'children': [{
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
          'parentName': '菜单管理',
          'level': 2,
          'children': []
        }, {
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
          'parentName': '菜单管理',
          'level': 2,
          'children': []
        }, {
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
          'parentName': '菜单管理',
          'level': 2,
          'children': []
        }, {
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
          'parentName': '菜单管理',
          'level': 2,
          'children': []
        }]
      },
      {
        'id': 15,
        'createBy': null,
        'createTime': null,
        'lastUpdateBy': null,
        'lastUpdateTime': null,
        'parentId': 1,
        'name': '业务管理',
        'url': '/sys/business',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-briefcase',
        'orderNum': 3,
        'delFlag': 0,
        'parentName': '系统管理',
        'level': 1,
        'children': [{
          'id': 60,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 15,
          'name': '查看',
          'url': null,
          'perms': 'sys:business:view',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '业务管理',
          'level': 2,
          'children': []
        }, {
          'id': 61,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 15,
          'name': '新增',
          'url': null,
          'perms': 'sys:business:add',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '业务管理',
          'level': 2,
          'children': []
        }, {
          'id': 62,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 15,
          'name': '修改',
          'url': null,
          'perms': 'sys:business:edit',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '业务管理',
          'level': 2,
          'children': []
        }, {
          'id': 63,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 15,
          'name': '删除',
          'url': null,
          'perms': 'sys:business:delete',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '业务管理',
          'level': 2,
          'children': []
        }]
      }
      ]
    },
    {
      'id': 5,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 0,
      'name': '教学服务',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'fa fa-mortar-board',
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': 0,
      'children': [{
        'id': 6,
        'createBy': null,
        'createTime': null,
        'lastUpdateBy': null,
        'lastUpdateTime': null,
        'parentId': 5,
        'name': '课程管理',
        'url': '/learn/course',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-leanpub',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '教学服务',
        'level': 1,
        'children': [{
          'id': 32,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 6,
          'name': '查看',
          'url': null,
          'perms': 'learn:course:view',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '课程管理',
          'level': 2,
          'children': []
        },
        {
          'id': 33,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 6,
          'name': '新增',
          'url': null,
          'perms': 'learn:course:add',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '课程管理',
          'level': 2,
          'children': []
        },
        {
          'id': 34,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 6,
          'name': '修改',
          'url': null,
          'perms': 'learn:course:edit',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '课程管理',
          'level': 2,
          'children': []
        },
        {
          'id': 35,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 6,
          'name': '删除',
          'url': null,
          'perms': 'learn:course:delete',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '课程管理',
          'level': 2,
          'children': []
        }]
      },
      {
        'id': 7,
        'createBy': null,
        'createTime': null,
        'lastUpdateBy': null,
        'lastUpdateTime': null,
        'parentId': 5,
        'name': '课程仓库',
        'url': '/learn/store',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-archive',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '教学服务',
        'level': 1,
        'children': [{
          'id': 36,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 7,
          'name': '查看',
          'url': null,
          'perms': 'learn:store:view',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '课程仓库',
          'level': 2,
          'children': []
        },
        {
          'id': 37,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 7,
          'name': '新增',
          'url': null,
          'perms': 'learn:store:add',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '课程仓库',
          'level': 2,
          'children': []
        },
        {
          'id': 38,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 7,
          'name': '修改',
          'url': null,
          'perms': 'learn:store:edit',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '课程仓库',
          'level': 2,
          'children': []
        },
        {
          'id': 39,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 7,
          'name': '删除',
          'url': null,
          'perms': 'learn:store:delete',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '课程仓库',
          'level': 2,
          'children': []
        }]
      },
      {
        'id': 8,
        'createBy': null,
        'createTime': null,
        'lastUpdateBy': null,
        'lastUpdateTime': null,
        'parentId': 5,
        'name': '文件管理',
        'url': '/learn/file',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-folder-open-o',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '教学服务',
        'level': 1,
        'children': [{
          'id': 40,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 8,
          'name': '查看',
          'url': null,
          'perms': 'learn:file:view',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '文件管理',
          'level': 2,
          'children': []
        },
        {
          'id': 41,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 8,
          'name': '新增',
          'url': null,
          'perms': 'learn:file:add',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '文件管理',
          'level': 2,
          'children': []
        },
        {
          'id': 42,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 8,
          'name': '修改',
          'url': null,
          'perms': 'learn:file:edit',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '文件管理',
          'level': 2,
          'children': []
        },
        {
          'id': 43,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 8,
          'name': '删除',
          'url': null,
          'perms': 'learn:file:delete',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '文件管理',
          'level': 2,
          'children': []
        }]
      }
      ]
    },
    {
      'id': 9,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 0,
      'name': '考试服务',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'fa fa-pencil-square-o',
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': 0,
      'children': [{
        'id': 10,
        'createBy': null,
        'createTime': null,
        'lastUpdateBy': null,
        'lastUpdateTime': null,
        'parentId': 9,
        'name': '题库管理',
        'url': '/exam/question',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-wpforms',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '考试服务',
        'level': 1,
        'children': [{
          'id': 44,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 10,
          'name': '查看',
          'url': null,
          'perms': 'exam:question:view',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '题库管理',
          'level': 2,
          'children': []
        },
        {
          'id': 45,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 10,
          'name': '新增',
          'url': null,
          'perms': 'exam:question:add',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '题库管理',
          'level': 2,
          'children': []
        },
        {
          'id': 46,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 10,
          'name': '修改',
          'url': null,
          'perms': 'exam:question:edit',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '题库管理',
          'level': 2,
          'children': []
        },
        {
          'id': 47,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 10,
          'name': '删除',
          'url': null,
          'perms': 'exam:question:delete',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '题库管理',
          'level': 2,
          'children': []
        }]
      },
      {
        'id': 11,
        'createBy': null,
        'createTime': null,
        'lastUpdateBy': null,
        'lastUpdateTime': null,
        'parentId': 9,
        'name': '试卷管理',
        'url': '/exam/paper',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-file-text-o',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '考试服务',
        'level': 1,
        'children': [{
          'id': 48,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 11,
          'name': '查看',
          'url': null,
          'perms': 'exam:paper:view',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '试卷管理',
          'level': 2,
          'children': []
        },
        {
          'id': 49,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 11,
          'name': '新增',
          'url': null,
          'perms': 'exam:paper:add',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '试卷管理',
          'level': 2,
          'children': []
        },
        {
          'id': 50,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 11,
          'name': '修改',
          'url': null,
          'perms': 'exam:paper:edit',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '试卷管理',
          'level': 2,
          'children': []
        },
        {
          'id': 51,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 11,
          'name': '删除',
          'url': null,
          'perms': 'exam:paper:delete',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '试卷管理',
          'level': 2,
          'children': []
        }]
      }]
    },
    {
      'id': 12,
      'createBy': null,
      'createTime': null,
      'lastUpdateBy': null,
      'lastUpdateTime': null,
      'parentId': 0,
      'name': '拨测服务',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'fa fa-volume-control-phone',
      'orderNum': 0,
      'delFlag': 0,
      'parentName': null,
      'level': 0,
      'children': [{
        'id': 13,
        'createBy': null,
        'createTime': null,
        'lastUpdateBy': null,
        'lastUpdateTime': null,
        'parentId': 12,
        'name': '模板管理',
        'url': '/call/tmpl',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-file-code-o',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '拨测服务',
        'level': 1,
        'children': [{
          'id': 52,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 13,
          'name': '查看',
          'url': null,
          'perms': 'call:tmpl:view',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '模板管理',
          'level': 2,
          'children': []
        },
        {
          'id': 53,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 13,
          'name': '新增',
          'url': null,
          'perms': 'call:tmpl:add',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '模板管理',
          'level': 2,
          'children': []
        },
        {
          'id': 54,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 13,
          'name': '修改',
          'url': null,
          'perms': 'call:tmpl:edit',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '模板管理',
          'level': 2,
          'children': []
        },
        {
          'id': 55,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 13,
          'name': '删除',
          'url': null,
          'perms': 'call:tmpl:delete',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '模板管理',
          'level': 2,
          'children': []
        }]
      },
      {
        'id': 14,
        'createBy': null,
        'createTime': null,
        'lastUpdateBy': null,
        'lastUpdateTime': null,
        'parentId': 12,
        'name': '任务管理',
        'url': '/call/task',
        'perms': null,
        'type': 1,
        'icon': 'fa fa-tasks',
        'orderNum': 1,
        'delFlag': 0,
        'parentName': '拨测服务',
        'level': 1,
        'children': [{
          'id': 56,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 14,
          'name': '查看',
          'url': null,
          'perms': 'call:task:view',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '任务管理',
          'level': 2,
          'children': []
        },
        {
          'id': 57,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 14,
          'name': '新增',
          'url': null,
          'perms': 'call:task:add',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '任务管理',
          'level': 2,
          'children': []
        },
        {
          'id': 58,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 14,
          'name': '修改',
          'url': null,
          'perms': 'call:task:edit',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '任务管理',
          'level': 2,
          'children': []
        },
        {
          'id': 59,
          'createBy': null,
          'createTime': null,
          'lastUpdateBy': null,
          'lastUpdateTime': null,
          'parentId': 14,
          'name': '删除',
          'url': null,
          'perms': 'call:task:delete',
          'type': 2,
          'icon': null,
          'orderNum': 0,
          'delFlag': 0,
          'parentName': '任务管理',
          'level': 2,
          'children': []
        }]
      }]
    }
    ]
  }
  return {
    url: 'menu/findMenuTree',
    type: 'get',
    data: menuTreeData
  }
}

export function setParentName (data) {
  if (data == null) {
    return
  }
  let len = data.length
  for (let i = 0; i < len; i++) {
    let menu = data[i]
    menu.parentName = 'menu' + menu.parentId
    if (menu.children != null) {
      setParentName(menu.children)
    }
  }
}
