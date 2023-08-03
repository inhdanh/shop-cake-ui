import Image from 'next/image'

interface PropsType {
  image: string
  title: string
  price: number
}
export default function ProductCart({ image, title, price }: PropsType) {
  return (
    <div className="relative overflow-hidden transition-all duration-500 border-2 border-gray-300 rounded-3xl hover:border-red-500 group">
      <Image
        className="object-cover w-full h-min"
        src={image}
        alt={title}
        width={380}
        height={380}
      />
      <div className="grid gap-2 px-3 py-6">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p>${price} USD</p>
      </div>
      <button className="absolute bottom-32 w-[90%] py-2 left-1/2 -translate-x-1/2 font-semibold text-white transition-all bg-red-500 border-2 border-red-500 rounded-lg hover:bg-white hover:border-red-500 hover:text-red-500 opacity-0 group-hover:opacity-100 duration-700">
        Add to cart
      </button>
    </div>
  )
}
