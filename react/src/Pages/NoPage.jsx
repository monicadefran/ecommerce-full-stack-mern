import BannerTop from '../Components/NavBar/BannerTop'
import Navbar from '../Components/NavBar/NavBar'
import NoPage from '../Components/Home/404Error'
import FooterData from '../Components/Footer/FooterData'
import Socials from '../Components/Footer/Socials'

export default function Error (){
   return (
      <div>
         <BannerTop />
         <Navbar />
         <NoPage />
         <FooterData />
         <Socials />
      </div>
   )
}