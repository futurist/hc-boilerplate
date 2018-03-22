'use strict';

let urlPrefix = '/analyse/api/query';

module.exports = {
  testApi: {
    url: '/api/v2/objects',
    method: 'GET',
    param: {
      workspaceCode: window.workspace,
      entityType: 'object',
      pageSize: 10000
      // entityCodes:["xx", "xx"]
      // entityIds:[1,2,3]
      // keyword: 模糊匹配
      // entityCode和entityName
      // pageNum:
    },
    mock: [
      {name: '梁朝伟', age: 40, id: 1},
      {name: '刘德华', age: 41, id: 2},
      {name: '郭富城', age: 42, id: 3},
      {name: '黎明', age: 44, id: 4},
      {name: '张学友', age: 22, id: 5}
    ]
  },
  testErrorApi: {
    url: '/api/v2/objects',
    method: 'GET'
  }
};
