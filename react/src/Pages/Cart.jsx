import BannerTop from '../Components/NavBar/BannerTop'
import Navbar from '../Components/NavBar/NavBar'
import CartProducts from '../Components/CartContent/CartProducts'
import FooterData from '../Components/Footer/FooterData'
import Socials from '../Components/Footer/Socials'

export default function Cart (){
   return (
      <div>
         <BannerTop />
         <Navbar />
         <CartProducts />
         <FooterData />
         <Socials />
      </div>
   )
}