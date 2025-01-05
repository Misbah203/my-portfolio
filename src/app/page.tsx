
import Header from "@/Components/Header/Header"
import HeroSection from "@/Components/hero-section/HeroSection";
import AboutSection from "@/Components/about-section/AboutSection";
import ImageSection from "@/Components/image-section/ImageSection";
import Projects from '@/Components/Projects/projects';
import ContactUs from "@/Components/contact-us/ContactUs";
import Footer from "@/Components/footer/footer";


export default function Home(){
  return (
    <>
  < Header/>
  < HeroSection/>
  < AboutSection/>
   <ImageSection />
   <Projects />
   <ContactUs />
   <Footer />
    </>
  )
}