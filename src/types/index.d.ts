declare interface Params {
  page: number
  limit: number
  sort: string
  fields: string
  [key: string]: string
}

declare interface Product {
  countInStock: number
  description: string
  image: string
  images: string[]
  name: string
  price: number
  slug: string
  _id: string
}
