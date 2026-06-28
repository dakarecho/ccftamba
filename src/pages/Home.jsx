import Hero from '../components/Hero'
import Stats from '../components/Stats'
import AboutSection from '../components/AboutSection'
import ActivitiesSection from '../components/ActivitiesSection'
import NewsSection from '../components/NewsSection'
import GallerySection from '../components/GallerySection'
import Partners from '../components/Partners'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ActivitiesSection />
      <NewsSection />
      <GallerySection />
      <Partners />
      <CallToAction />
    </>
  )
}
