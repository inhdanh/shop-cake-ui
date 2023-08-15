import request from './request'

const services = {
  getProductList: (params?: Partial<Params>) => {
    return request.get('/products', {
      params,
    })
  },
}

export default services
