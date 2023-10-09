import CourseSection from '@/container/CourseSection'
import FooterSection from '@/container/FooterSection'
import HeroLayout from '@/container/HeroLayout'

export default function Home() {
  return (
    <div className="w-full  md:pt-0">
      <HeroLayout/>
      <CourseSection/>
      <FooterSection/>
    </div>
  )
}
