import BannerTop from '../Components/NavBar/BannerTop'
import NavBar from '../Components/NavBar/NavBar'
import Hero from '../Components/Home/Hero'
import BannerBottom from '../Components/Home/BannerBottom'
import FooterData from '../Components/Footer/FooterData'
import Socials from '../Components/Footer/Socials'

export default function Home (){
   return (
      <div>
         <BannerTop />
         <NavBar />
         <Hero />
         <BannerBottom />
         <FooterData />
         <Socials />
      </div>
   )
}