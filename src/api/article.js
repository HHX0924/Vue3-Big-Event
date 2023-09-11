import request from '@/utils/request'

export const artGetChannelsService = () => {
  return request.get('/my/cate/list')
}

export const delChannelService = (id) => {
  return request.delete('/my/cate/del', {
    params: { id }
  })
}

export const artPublishService = (data) => request.post('/my/article/add', data)

export const addChannelService = ({ cate_name, cate_alias }) => {
  return request.post('/my/cate/add', { cate_name, cate_alias })
}

export const editChannelService = ({ cate_name, cate_alias, id }) => {
  return request.put('/my/cate/info', { cate_name, cate_alias, id })
}

export const artGetListService = (params) =>
  request.get('/my/article/list', { params })

export const artDelService = (id) =>
  request.delete('my/article/info', { params: { id } })

export const artGetDetailService = (id) =>
  request.get('my/article/info', { params: { id } })
export const artEditService = (data) => request.put('my/article/info', data)
