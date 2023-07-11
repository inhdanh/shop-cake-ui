import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ReactNode } from 'react'

interface PropTypes {
  children: ReactNode
}

export default function LoginLayout(props: PropTypes) {
  return (
    <>
      <section className='bg-gradient-to-br from-red-400 to-red-600 py-5'>
        <Header />
      </section>
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
