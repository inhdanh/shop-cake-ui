// console.log('process.env.NODE_ENV', process.env.NODE_ENV)
import axios from 'axios'

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/api/v1'
      : '/api/v1',
  withCredentials: process.env.NODE_ENV !== 'development',
})

export default request
