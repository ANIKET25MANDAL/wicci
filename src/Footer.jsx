import React from "react";
import "./Footer.css";
import g100 from "./assets/g100.png";
import wef from "./assets/wef.png";
import all from "./assets/all.png";
import sheconomy from "./assets/sheeco.png";
function Footer({text}) {
   return(
    <>
     <div className="footer">
      <div className="row mt-5">
         <div className="col-4">
            <h4> About WICCI </h4>
            <p> A National Business Chamber for Women, Women's Indian Chamber of Commerce & Industry, (WICCI) boosts and builds women's entrepreneuship and businesses through greater engagement with government, institutions, global trade and networks. 
            </p>
            <a href="">View More</a>

         </div>

         <div className="col-4">
            <h4> Contact Us </h4>
            <p>Email: info@wicci.in</p>
            <a href="">Council Membership</a> <br />
            <a href="">Disclaimer</a> <br />
            <a href="">Zero Tolerance Policy </a>
         </div>


         <div className="col-4">
            <h4> Our Social Networks </h4>
            <div className="social-link">
               <a href="">Twitter</a>
               <a href="">Facebook</a>
               <a href="">Insta</a>
               <a href="">Linkedin</a>
            </div>
            <p>We are registered under Section 25 of the Indian Companies Act, 1956, (Non-profit company, for charitable purposes.) </p>

            <h4 className="Important-Link">Important Links</h4>

            <div className="imp-logo">
                  <a href=""> <img  className="g100" src={g100} alt="G100 Icon" />  </a> <br />
                  <a href=""> <img  className="wef" src={wef} alt="WEF Icon" /> </a>  <br />
                  <a href=""> <img  className="all" src={all} alt="ALL Icon" /> </a>  <br />
                  <a href=""> <img  className="sheconomy" src={sheconomy} alt="SHEconomy Icon" /> </a> <br />
            </div>

         </div>
      </div>


        </div>
      <p className="footer-copy">{text} Copyright @&nbsp;2019 Women's Indian Chamber of Commerce and Industry </p>
    
    </>
   );
}
export default Footer;