import react from 'react'
import Header from '../Home/Header/Header'
import PhoneNo from '../Home/Header/PhoneNo/PhoneNo'
import CustService from '../Home/Header/CustService/CustService'
import Faqs from '../Home/Header/Faqs/Faqs'
import LogIn from '../Home/Header/LogIn/LogIn'
import Men from '../Home/Header/Men/Men'
import Accessories from '../Home/Header/Accessories/Accessories'
import Outlets from '../Home/Header/Outlets/Outlets'
import EARTHMOVERS from './Header/EARTHMOVERS/EARTHMOVERS'
import Sale from '../Home/Header/Sale/Sale'
import Footer from '../Home/Footer/Footer'
import Body  from '../Home/Body/Body'

class Home extends react.Component{
    render(){
        return(
        <div>
          <LogIn/>
          <PhoneNo/>
         <CustService/>
          <Faqs/>
          <Men/>
          <Accessories/>
          <Outlets/>
          <EARTHMOVERS/>
          <Sale/>
          <Footer/>
          <Body/>
          </div>
      
        )
    }
}
export default Home