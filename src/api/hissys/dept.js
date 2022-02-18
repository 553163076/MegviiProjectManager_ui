import request from '@/utils/request'

// 查询科室列表
export function listDept(query) {
  return request({
    url: '/hissys/dept/list',
    method: 'get',
    params: query
  })
}

// 查询科室详细
export function getPost(postId) {
  return request({
    url: '/hissys/dept/' + postId,
    method: 'get'
  })
}

// 新增科室
export function addDept(data) {
  return request({
    url: '/hissys/dept',
    method: 'post',
    data: data
  })
}

// 修改科室
export function updateDept(data) {
  return request({
    url: '/hissys/dept',
    method: 'put',
    data: data
  })
}

// 删除科室
export function delPost(postId) {
  return request({
    url: '/hissys/dept/' + postId,
    method: 'delete'
  })
}

// 导出科室
export function exportPost(query) {
  return request({
    url: '/hissys/dept/export',
    method: 'get',
    params: query
  })
}
