import BannerTop from '../Components/NavBar/BannerTop'
import Navbar from '../Components/NavBar/NavBar'
import ProductDetail from '../Components/Products/ProductDetail'
import FooterData from '../Components/Footer/FooterData'
import Socials from '../Components/Footer/Socials'
import BannerBottom from '../Components/Home/BannerBottom'


export default function Details (){
   return (
      <div>
         <BannerTop />
         <Navbar />
         <ProductDetail />
         <BannerBottom />
         <FooterData />
         <Socials />
      </div>
   )
}