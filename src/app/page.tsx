'use client'

import services from '@/api/services'
import ProductCart from '@/components/ProductCard'
import Slider from '@/components/Slider'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCaretRight } from 'react-icons/ai'

const blockCards = [
  {
    img: '/img/donut.png',
    title: 'Creamy Donuts',
    description: 'Odio morbi quis commodo odio aenean in iaculis nunc sed.',
  },
  {
    img: '/img/designer-cake.avif',
    title: 'Designer Cakes',
    description: 'Odio morbi quis commodo odio aenean in iaculis nunc sed.',
  },
  {
    img: '/img/flaky-pastries.png',
    title: 'Flaky Pastries',
    description: 'Odio morbi quis commodo odio aenean in iaculis nunc sed.',
  },
  {
    img: '/img/flavoured-cupcakes.avif',
    title: 'Flavoured Cupcakes',
    description: 'Odio morbi quis commodo odio aenean in iaculis nunc sed.',
  },
]

const productCards = [
  {
    img: '/img/products/shop10.jpg',
    title: 'Chocolate Filling Donut Cake',
    price: 10,
  },
  {
    img: '/img/products/shop03.jpg',
    title: 'Fudge Filling Creamy Vanilla Cake',
    price: 13,
  },
  {
    img: '/img/products/shop17.jpg',
    title: 'Chocolate Filling Donut Cake',
    price: 18,
  },
  {
    img: '/img/products/shop04.jpg',
    title: 'Strawberry Nuts Mousse Cake',
    price: 15,
  },
  {
    img: '/img/products/shop11.jpg',
    title: 'Raspberry Velvet Fruit Fudge Cake',
    price: 55,
  },
  {
    img: '/img/products/shop16.jpg',
    title: 'Vanilla Flavoure Berry Fruit Cake',
    price: 80,
  },
  {
    img: '/img/products/shop09.jpg',
    title: 'Red Velvet Ice Cream Cherry Cake',
    price: 20,
  },
]

const cakePosts = [
  {
    image: '/img/blog-12.webp',
    date: 'Dec 12',
    title: 'Special Cakes Are Always Ready For Special People',
    description:
      'Fringilla ut feugiat ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet,...',
  },
  {
    image: '/img/blog-1.webp',
    date: 'Dec 12',
    title: 'A Delicious Cake Spread Luscious Happiness Ever...',
    description:
      'Venenatis cras feugiat ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit...',
  },
  {
    image: '/img/blog-2.webp',
    date: 'Dec 03',
    title: 'Find Good And Healthy Ingredients For Making Re...',
    description:
      'Ac auctor feugiat ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit...',
  },
]

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => services.getProductList({}),
  })

  console.log('products', data?.data.data)
  const products = data?.data.data.data as Product[]
  console.log('products', products)

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <section className="px-4 py-20 text-center">
        <h3 className="text-sm font-medium tracking-widest text-red-500 uppercase">
          Our collections
        </h3>
        <h2 className="my-3 text-3xl font-medium">
          Unique & Hygienic Homemade Cakes
        </h2>
        <p className="leading-7">
          Porta non pulvinar neque laoreet suspendisse interdum consectetur
          libero. Massa tempor nec feugiat nisl. Accumsan lacus vel facilisis
          volutpat. Viverra justo nec ultrices dui sapien eget mi.
        </p>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {products.map((product) => (
              <li key={Math.random()}>
                <div className="p-4">
                  <div className="support-block-product">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="mt-2 leading-7">{product.description}</p>
                    <Link
                      className="block mt-5 font-medium underline transition-colors duration-500 hover:text-red-500"
                      href="#"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="relative">
        <div className="bg-[url('/img/Component_27_1.png')] bg-red-400 bg-no-repeat bg-cover w-full overflow-hidden">
          <ul className="flex font-medium text-white w-max animate-marquee">
            <li className="w-screen py-10 text-right">
              <Link
                className="
                  relative
                  before:absolute before:bg-[url('/img/fire-icon.png')] before:w-5 before:h-6 before:-left-6 before:bottom-0
                  after:absolute after:bg-[url('/img/fire-icon.png')] after:w-5 after:h-6 after:-right-6 after:bottom-0"
                href="#"
              >
                Special Offers on Flavoured Cake
              </Link>
            </li>
            <li className="w-screen py-10 text-right">
              <Link
                className="
                  relative
                  before:absolute before:bg-[url('/img/fire-icon.png')] before:w-5 before:h-6 before:-left-6 before:bottom-0
                  after:absolute after:bg-[url('/img/fire-icon.png')] after:w-5 after:h-6 after:-right-6 after:bottom-0"
                href="#"
              >
                Get 25% Flat Off on Designer Cakes
              </Link>
            </li>
            <li className="w-screen py-10 text-right">
              <Link
                className="
                  relative
                  before:absolute before:bg-[url('/img/fire-icon.png')] before:w-5 before:h-6 before:-left-6 before:bottom-0
                  after:absolute after:bg-[url('/img/fire-icon.png')] after:w-5 after:h-6 after:-right-6 after:bottom-0"
                href="#"
              >
                Free Shipping on Above Rs. 500
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="pt-16 text-center">
          <h3 className="text-sm font-medium tracking-widest text-red-500 uppercase">
            YUMMY CAKES
          </h3>
          <h2 className="my-3 text-3xl font-medium">Our Special Cakes </h2>
          <p className="leading-7">
            Pellentesque adipiscing commodo elit at. Malesuada fames ac turpis
            egestas maecenas pharetra. Dolor magna eget est lorem ipsum dolor
            sit amet consectetur. Varius sit amet mattis vulputate enim nulla.
          </p>
        </div>
      </section>

      <Slider />

      <section className="p-10 md:grid md:grid-cols-2">
        <Image
          width={750}
          height={703}
          src="/img/Component_139_1.webp"
          alt="Designer cake"
          className="object-contain w-full h-full"
        />
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-red-500 uppercase">
            Designer cake
          </h3>
          <h2 className="mb-3 text-3xl font-medium">
            Creamy Nuts Vanilla Cake
          </h2>
          <p className="leading-7">
            Bibendum enim facilisis gravida neque convallis a cras semper.
            Pretium fusce id velit ut tortor pretium viverra suspendisse. Ut
            diam quam nulla porttitor. Viverra ipsum nunc aliquet bibendum enim
            facilisis gravida neque convallis.
          </p>
          <div className="grid w-2/3 grid-cols-1 gap-5 mt-16 mb-8">
            <Link
              href="#"
              className="relative block w-full py-5 font-bold text-center text-red-500 border-2 border-red-500 rounded-[28px] hover:bg-opacity-70 group hover:text-white hover:bg-red-500"
            >
              <div className="group-hover:bg-[url('/img/bg-btn-0.jpg')] w-full h-full absolute rounded-3xl top-0 bg-no-repeat bg-cover bg-center -z-10"></div>
              Soft Baked Product
            </Link>
            <Link
              href="#"
              className="relative block w-full py-5 font-bold text-center text-red-500 border-2 border-red-500 rounded-[28px] hover:bg-opacity-70 group hover:text-white hover:bg-red-500"
            >
              <div className="group-hover:bg-[url('/img/bg-btn-0.jpg')] w-full h-full absolute rounded-3xl top-0 bg-no-repeat bg-cover -z-10 bg-center"></div>
              Fully Weat Product
            </Link>
            <Link
              href="#"
              className="relative block w-full py-5 font-bold text-center text-red-500 border-2 border-red-500 rounded-[28px] hover:bg-opacity-70 group hover:text-white hover:bg-red-500"
            >
              <div className="group-hover:bg-[url('/img/bg-btn-0.jpg')] w-full h-full absolute rounded-3xl top-0 bg-no-repeat bg-cover -z-10 bg-center"></div>
              Soft Baked Product
            </Link>
          </div>
          <button className="flex items-center gap-1 px-10 py-4 text-sm font-bold text-white transition-colors duration-500 bg-red-500 border-2 border-white rounded-2xl hover:text-red-500 hover:bg-white hover:border-red-500">
            Shop Now <AiOutlineCaretRight size={23} />
          </button>
        </div>
      </section>

      <section>
        <div className="bg-[url('/img/banner01.jpg')] w-full h-[415px] bg-center bg-no-repeat bg-cover md:px-52 md:py-20 md:h-[650px]">
          <div className="grid h-full px-8 py-12 font-semibold text-center text-white bg-red-500 bg-opacity-60 md:bg-opacity-90">
            <h4 className="tracking-widest uppercase">creative cakes</h4>
            <h2 className="text-3xl">Get Best Offers On Pastry Cakes</h2>
            <p>
              Vestibulum lorem sed risus ultricies tristique nulla aliquet enim.
              Lacus viverra vitae congue eu consequat ac felis donec. Semper
              feugiat nibh sed pulvinar proin gravida hendrerit lectus. Lobortis
              mattis aliquam faucibus purus in massa tempor.
            </p>
            <div>
              <button className="py-2 text-red-500 transition-colors duration-500 bg-white border-2 border-red-500 px-7 rounded-xl hover:bg-red-500 hover:text-white hover:border-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h3 className="text-sm font-semibold tracking-widest text-red-500 uppercase">
          best selling cakes
        </h3>
        <h2 className="mb-3 text-3xl font-medium">Shop By Delicious Flavour</h2>
        <p className="leading-7">
          Commodo ullamcorper a lacus vestibulum sed arcu non. Cursus in hac
          habitasse platea dictumst. Odio tempor orci dapibus ultrices in
          iaculis nunc sed. Quam viverra orci sagittis eu volutpat odio
          facilisis.
        </p>
        <div className="grid grid-cols-1 gap-3 mx-5 my-5 md:grid-cols-2 lg:grid-cols-4">
          {productCards.map((card, index) => (
            <ProductCart
              key={index}
              image={card.img}
              title={card.title}
              price={card.price}
            />
          ))}
        </div>
        <button className="px-8 py-2 text-sm font-medium text-white transition-colors bg-red-500 border-2 border-red-500 rounded-lg hover:bg-white hover:text-red-500">
          View all
        </button>
      </section>

      <section>
        <div className="bg-[url('/img/bg_1.webp')] w-full h-max bg-center bg-no-repeat bg-cover">
          <div className="grid h-full gap-5 px-8 py-12 font-semibold text-center text-white md:text-left md:w-2/3">
            <h4 className="tracking-widest uppercase">CELEBRATION CAKES</h4>
            <h2 className="text-3xl">
              Your Celebration Cannot Be Complete Without Cupcakes
            </h2>
            <p>
              Rhoncus est diam quam nulla porttitor pellentesque elit
              ullamcorper dignissim cras tincidunt. Sed felis eget velit
              aliquet. Pulvinar pellentesque habitant morbi tristique senectus.
            </p>
            <div>
              <button className="py-2 text-red-500 transition-colors duration-500 bg-white border-2 border-red-500 px-7 rounded-xl hover:bg-red-500 hover:text-white hover:border-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 text-center">
        <h3 className="text-sm font-semibold tracking-widest text-red-500 uppercase">
          our recent updations
        </h3>
        <h2 className="mb-3 text-3xl font-medium">Delicious Cake Posts</h2>
        <p className="leading-7">
          Ut faucibus pulvinar elementum integer enim neque volutpat. Id semper
          risus in hendrerit gravida rutrum. Laoreet id donec ultrices
          tincidunt. Purus faucibus ornare suspendisse sed nisi lacus sed
          viverra tellus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {cakePosts.map((cakePost) => (
            <div key={cakePost.title} className="px-5 mt-10 text-left ">
              <div className="relative overflow-hidden rounded-3xl ">
                <Image
                  alt={cakePost.title}
                  src={cakePost.image}
                  width={720}
                  height={444}
                />
                <div className="absolute bottom-0 right-0 px-10 py-3 font-semibold text-white bg-red-500 rounded-tl-3xl">
                  {cakePost.date}
                </div>
              </div>
              <Link
                className="block mt-10 mb-5 text-2xl font-semibold transition-colors hover:text-red-500"
                href="/"
              >
                {cakePost.title}
              </Link>
              <p className="leading-7">{cakePost.description}</p>
              <Link
                className="block mt-4 mb-12 text-sm font-semibold text-red-500 underline transition-colors underline-offset-2 hover:text-black"
                href="#"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center">
        <h3 className="text-sm font-semibold tracking-widest text-red-500 uppercase">
          JOIN OUR SOCIAL CIRCLE
        </h3>
        <h2 className="mb-3 text-3xl font-medium">@yourinstagram</h2>
        <p>
          Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis
          rhoncus nisl condimentum id venenatis a.
        </p>
        <Link
          className="block mt-4 mb-12 underline transition-colors font-semibol underline-offset-2 hover:text-red-500"
          href="#"
        >
          Button label
        </Link>
      </section>
    </>
  )
}
