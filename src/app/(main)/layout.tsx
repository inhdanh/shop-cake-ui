import Header from '@/components/Header'
import { ReactNode } from 'react'

interface PropTypes {
  children: ReactNode
}

export default function MainLayout(props: PropTypes) {
  return (
    <section className='h-[800px] bg-gradient-to-br from-red-400 to-red-600 py-12'>
      <Header />
      <main>{props.children}</main>
    </section>
  )
}
