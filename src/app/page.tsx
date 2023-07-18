import Slider from '@/components/Slider'
import Image from 'next/image'
import Link from 'next/link'

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

export default function Home() {
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
            {blockCards.map((card) => (
              <li key={Math.random()}>
                <div className="p-4">
                  <div className="support-block-card">
                    <Image
                      src={card.img}
                      alt={card.title}
                      className="w-14 h-14"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{card.title}</h3>
                    <p className="mt-2 leading-7">{card.description}</p>
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

      <section className="p-10">
        <Image
          width={750}
          height={703}
          src="/img/Component_139_1.webp"
          alt="Designer cake"
        />
        <h3 className="text-sm font-medium tracking-widest text-red-500 uppercase">
          Designer cake
        </h3>
        <h2 className="mb-3 text-3xl font-medium">Creamy Nuts Vanilla Cake</h2>
        <p className="leading-7">
          Bibendum enim facilisis gravida neque convallis a cras semper. Pretium
          fusce id velit ut tortor pretium viverra suspendisse. Ut diam quam
          nulla porttitor. Viverra ipsum nunc aliquet bibendum enim facilisis
          gravida neque convallis.
        </p>
        <div className="mt-16 mb-8">
          <Link
            href="#"
            className="block py-5 text-center border-2 border-red-500 rounded-3xl w-60 hoverbefore:bg-[url('/img/AdobeStock_217277933.jpg')] bg-red-500"
          >
            Soft Baked Product
          </Link>
        </div>
      </section>
    </>
  )
}
