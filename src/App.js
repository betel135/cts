import react from 'react'
import Home from '../src/Component/Home/Home'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../src/Component/Home/Header/Header'
import Men from '../src/Component/Home/Header/Men/Men'
import ACCESSORIES from '../src/Component/Home/Header/Accessories/Accessories' 
import Outlet from '../src/Component/Home/Header/Outlets/Outlets'
import EARTHMOVERS from '../src/Component/Home/Header/EARTHMOVERS/EARTHMOVERS'
import Sale from '../src/Component/Home/Header/Sale/Sale'
import Phone from'../src/Component/Home/Header/PhoneNo/PhoneNo'
import FAQS from '../src/Component/Home/Header/Faqs/Faqs'
import FIND from '../src/Component/Home/Header/FindAStor/FindAStor'
import LOGIN from '../src/Component/Home/Header/LogIn/LogIn'
import Footer from './Component/Home/Footer/Footer'
import Body from '../src/Component/Home/Body/Body'
import Customer from '../src/Component/Home/Header/CustService/CustService';

class App extends react.Component{
    render(){
        return(
       <BrowserRouter>
       <Header/> 
       <Route path="/Men"component={Men}/>
       <Route path="/Accessories" component={ACCESSORIES}/>
       <Route path="/Outlet"component={Outlet}/>
       <Route path="/EARTHMOVERS"component={EARTHMOVERS}/>
       <Route path="/Sale"component={Sale}/>
        <Route path="/Phone"component={Phone}/>
        <Route path="/Customer"component={Customer}/>
        <Route path="/Faqs"component={FAQS}/>
        <Route path="/FIND"component={FIND}/>
        <Route PATH="/LOGIN"component={LOGIN}/> 
        <Route path="/Body"component={Body}/>
        <Footer/>
        </BrowserRouter>
     
        )
    }
}
export default App