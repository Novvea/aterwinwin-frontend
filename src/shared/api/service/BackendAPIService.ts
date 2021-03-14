import http from '../BackendAPI'
import { i_createNewUser, i_addItem } from '../../interface/Interface'

const createUser = (data: i_createNewUser) => {
  return http.post('/user', data)
}

const getAllUsers = () => {
  return http.get('/user')
}

const addItem = (data: i_addItem) => {
  console.log('data:', data)
  return http.post('/item', data)
}

const getAllItems = () => {
  return http.get('/item')
}

export default {
  createUser,
  getAllUsers,
  addItem,
  getAllItems
}