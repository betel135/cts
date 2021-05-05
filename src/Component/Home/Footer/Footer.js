import react from 'react'
import '../Footer/css/Stayle.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
class Footer extends react.Component{
    render(){
        return(
            <div>
          <footer class="page-footer" >
          <div class="container">
            <div class="row">
             
              <div  class="col" >
                <h6><b> CUSTOMER SERVICE</b></h6>
                <ul> 
                  <li><Link to="Contact As">Contact As</Link></li>
                  <li><Link to="Shipping Information">Shipping<br></br> Information</Link></li>
                  <li><Link to="Retuns & Excahnge">Retuns<br></br> & Excahnge</Link></li>
                  <li><Link to="#!">FAQ's</Link></li>
                </ul>
              </div>
              <div class="col">
              <h6 ><b> MY ACCOUNT</b></h6>
                <ul>  
                <li><Link to="Contact As">Sign In</Link></li>
                  <li><Link to="Shipping Information">Register</Link></li>
                  <li><Link to="Retuns & Excahnge">Order Status</Link></li>
                  <li><Link to="#!">Shopping Cart</Link></li>
                </ul>
              </div>
              <div class="col" >
              <h6 ><b> RESOURCE</b></h6>
                <ul>
                <li><Link to="Contact As">Find A Store</Link></li>
                  <li><Link to="Shipping Information">Stores</Link></li>
                </ul>
              </div>
              <div class="col">
              <h6 ><b> POPULAR<br></br> LINK</b></h6>
                <ul>
                
                <li><Link to="Contact As">Best Sellers</Link></li>
                  <li><Link to="Shipping Information">Top Rated</Link></li>
                  <li><Link to="Retuns & Excahnge">New Arrival</Link></li>
                  <li><Link to="#!">Work</Link></li>
                  <li><Link to="#!">Size Chart</Link></li>
                </ul>
              </div>
              <div>
              <div class="col">
              <h6 ><b>BECOME AN #EARTHMOVERS.</b> </h6>
                <ul>
                  <li>Leave your mark and receive our latest<br></br> Styles, Perks and Promos.</li>
                  <li><Link to="Retuns & Excahnge">Sign UP Now</Link></li>
                </ul>
              </div>
              <div class="right">
          <div>
          <input id="email-input" placeholder="Enter your email address" />
          </div>
            <p class="copyright-text">©️ 2018 CAT FOOTWEAR ALL RIGHTS RESERVED </p>
            <div class="footer">
            <ul>
            <li><Link to="/pages/site-map">Site Map</Link> </li>        
              
            <li><Link to="/pages/privacy-policy">Privacy Policy</Link> </li>
            
            <li><Link to="/pages/term-condition">Terms of Use</Link> </li>
           
            </ul>
            
       </div>
      </div>
      </div>
      </div>

            </div>
            
          <div class="logo" >
          <p><img src="https://cdn.shopify.com/s/files/1/0009/9555/7491/t/2/assets/CAT-191B-CLR-05.png?7162714265791386735"/>
        ©2021 Catfootwear PK. CATERPILLAR and related design marks are registered trademarks of Caterpillar, Inc. Cat Footwear is produced under <br/> license by Wolverine World Wide, Inc.</p> 
          </div>
         
        </footer>
    </div>  
        )
    }
}
export default Footer