import axios from 'axios'

const apiendpoint = 'http://localhost:8000/'

export const list = async (resource, params, currentPath = '/') => {
  const response = await axios.get(apiendpoint + resource + '/list', {
    crossdomain: true,
    params: params,
    path: currentPath
  })
  return response
}
export const detail = async (resource, params, currentPath = '/') => {
  const response = await axios.get(apiendpoint + resource + '/id', {
    crossdomain: true,
    params: params,
    path: currentPath
  })
  return response
}
