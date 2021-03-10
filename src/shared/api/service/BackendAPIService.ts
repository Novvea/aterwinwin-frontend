import http from '../BackendAPI'
import { i_createNewUser } from '../../interface/Interface'

const createUser = (data: i_createNewUser) => {
  return http.post('/user', data)
}

const getAllUsers = () => {
  return http.get('/user')
}

export default {
  createUser,
  getAllUsers
}