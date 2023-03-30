import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Home' description='GuitarLA, el mejor lugar para comprar una guitarra'>
      <h1>GuitarLA - NextJS</h1>
    </Layout>
  )
}
