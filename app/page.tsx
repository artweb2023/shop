import { Header } from '@/components/modules/Header/Header'
import { Footer } from '@/components/modules/Footer/Footer'
import { AboutUs } from '@/components/modules/AboutUs/About'
import { Quality } from '@/components/modules/Quality/Quality'

export default function Home() {
  return (
    <main>
      <Header></Header>
      <AboutUs></AboutUs>
      <Quality></Quality>
      <Footer></Footer>
    </main>
  )
}
