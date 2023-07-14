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
    <section className="px-4 py-20 text-center">
      <h3 className="text-sm font-medium tracking-widest text-red-500 uppercase">
        Our collections
      </h3>
      <h2 className="my-3 text-4xl font-medium">
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
            <li key={crypto.randomUUID()}>
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
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="mt-2 leading-7">{card.description}</p>
                  <Link
                    className="block mt-5 font-semibold underline transition-colors duration-500 hover:text-red-500"
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
  )
}
