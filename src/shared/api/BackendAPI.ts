import Axios from 'axios'

// const developmentURL = 'http://localhost:3001'
const productionURL = 'https://aterwinwin-backend.herokuapp.com'

const BackendAPI = Axios.create({
  baseURL: productionURL
})

export default BackendAPI