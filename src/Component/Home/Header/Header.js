import react from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../Header/CSS/Style.css'
class Header extends react.Component{
    render(){
     
        return(
     <div class="Header">     

          <nav class="nav-extended">
    <div class="nav-wrapper">
     
      <img src="//cdn.shopify.com/s/files/1/0009/9555/7491/files/logo_410x.png?v=1526016607" class="primary_logo" alt="Catfootwear PK"/>
      
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"></i></a>
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
     
                <li class=""><Link to="/+92348-1114747"><b>+92348-1114747</b></Link></li>
                <li><a href="CUSTOMERSERVICE"><b>CUSTOMER SERVICE</b></a></li>
                <li><a href="FAQS"><b>FAQS</b></a></li>
                <li><a href="FIND A STORE"><b>FIND A STORE</b></a></li>
                <li><a href="Login"><b>LOGIN</b></a>
                </li>
                
                
              </ul>          
    </div >
    <div id="main">
      <div id="div1"> </div>
      <div id="div3">
        <div>
          <div id="cstm_shipping_slide2" class="">
          <input id="search-input" placeholder="Search ..." /><br/>
          <a id="detail_small">NO DELIVERY CHARGES; EXCHANGE WITHIN 30 DAYS.ANNOUNCEMENT!</a>
          <br/>
          <svg href="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3 dropdown_link" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg><b> CART</b> <b style={{color:"yellow"}}>0</b> <a href="/cart" class="icon-cart mini_cart dropdown_link" data-no-instant="" data-click-count="0">   <span class="cart_count"></span></a>

          </div>
        </div>
      </div>

     


    </div>
    <div class="nav-content">
              <ul class="tabs tabs-transparent">
                <li class="">< Link to="/Men"><b>MEN</b></Link></li>
                <li class="">< Link to="/ACCESSORIES"><b>ACCESSORIES</b></Link></li>
                <li class=""> <Link to="/Outlet"><b>OUTLET</b></Link></li>
                <li class=""> <Link to="/EARTHMOVERS"><b>EARTHMOVERS</b></Link></li>
                <li class="">< Link to="/SALE"><b>SALE</b></Link></li>
               
              </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
            <li><a href="+92348-1114747"><b>+92348-1114747</b></a></li>
            <li><a href="CUSTOMERSERVICE"><b>CUSTOMERSERVICE</b></a></li>
            <li><a href="FAQS"><b>FAQS</b></a></li>
            <li><a href="FIND A STORE"><b>FIND A STORE</b></a></li>
            <li><a href="Login"><b>LOGIN</b></a></li>
          </ul>
     </div>
     
        )
    }
}
export default Header