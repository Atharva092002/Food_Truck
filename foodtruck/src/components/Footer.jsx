import React from "react";
import { NavLink } from "react-router-dom";

const Footer=() =>{
    return(
        <div>
        <footer class="site-footer">
        {/* <hr className="firstline"/> */}
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-5" style={{marginLeft:"70px"}}>
            <p class="text-justify"> 
            <i><b>FOOD TRUCK CUSTOMISATION </b></i><br />
            <br />
            Our goal is to make beautiful food trucks in record time<br/>so that you can cater to many foodies
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Services</h6>
            <ul class="footer-links" style={{lineHeight:"2em"}}>
              <li><a href="#" style={{textDecoration:"none",color:"white"}}>Customise</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"white"}}>Re-Model old food trucks</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"white"}}>Maintainence</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3" style={{lineHeight:"1.75em"}}>
            <h6>Get in touch</h6>
            <ul class="footer-links">
            Farmers Pride Building <br />
            FDP-MDBP Building First Floor <br />
            JAVA Industrial Estate <br />
            New Delhi-110020
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text" style={{fontSize:"14px"}}>Copyright &copy; 2022 All Rights Reserved by 
         Food Truck Customisation
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-media">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</div>
    );
}

export default Footer