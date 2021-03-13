import http from '../BackendAPI'
import { i_createNewUser, i_addItem } from '../../interface/Interface'

const createUser = (data: i_createNewUser) => {
  return http.post('/user', data)
}

const getAllUsers = () => {
  return http.get('/user')
}

const addItem = (data: i_addItem) => {
  return http.post('/item', data)
}

export default {
  createUser,
  getAllUsers,
  addItem
}