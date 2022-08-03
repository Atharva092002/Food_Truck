import React from "react";
import Footer from "./Footer";

const About = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <div class="container_about_us">
                <div class="heading">
                    <h1>ABOUT US</h1>
                </div>

                <section id="Team_about_us">
                    <h1 style={{
                        textAlign: "center",
                        marginTop:"150px",
                        fontSize: "40px",
                        color: "#E9D8A6"
                    }}>OUR TEAM</h1>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-5" style={{marginLeft:"75px"}}>
                                <div class="card-box-about text-center">
                                    <div class="user-pic-about">
                                        <img src="https://i.ibb.co/3rssz6h/user-1.jpg" class="img-fluid" alt="User Pic" />
                                    </div>
                                    <h4>Atharva Joshi</h4>
                                    <h6>CUSTOMISER EXPERT</h6>
                                    <hr />
                                    <p>Atharva Joshi has been consistently working in this industry for the past 20 years. He has delivered many food truck to customers and designs made by him have made all heads turn.</p>
                                    <hr />
                                    <a href="#" class="btn" style={{backgroundColor:"#FFB600"}}>Know More</a>
                                </div>
                            </div>

                            <div class="col-md-5" style={{marginLeft:"25px"}}>
                                <div class="card-box-about text-center">
                                    <div class="user-pic-about">
                                        <img src="https://i.ibb.co/3rssz6h/user-1.jpg" class="img-fluid" alt="User Pic" />
                                    </div>
                                    <h4>Rohan Alroy B</h4>
                                    <h6>CUSTOMISER EXPERT</h6>
                                    <hr />
                                    <p>Rohan Alroy has been consistently working in this industry for the past 20 years. He has delivered many food truck to customers and designs made by him have made all heads turn.</p>
                                    <hr />
                                    <a href="#" class="btn" style={{backgroundColor:"#FFB600"}}>Know More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <h1 style={{
                    textAlign: "center",
                    paddingTop: "80px",
                    fontSize: "40px",
                    color: "#E9D8A6", paddingBottom: "100px"
                }}>WHY CHOOSE US</h1>
                <section class="why-us">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-lg-4">
                                <div class="box_about">
                                    <span>01</span>
                                    <h4><a href="#">Customise your own truck</a></h4>
                                    <p>We provide consumers the opportunity to customise their own truck easily using internet.</p>
                                    <img src="/images/image-one.jpg" alt="" />
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="box_about">
                                    <span>02</span>
                                    <h4><a href="#">Fast Delivery</a></h4>
                                    <p>We have been known for having a small delivery span of just 10 days. Our highly standardized process enables us to do so.</p>
                                    <img src="/images/image-two.jpg" alt="" />
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="box_about">
                                    <span>03</span>
                                    <h4><a href="#">Value for Money</a></h4>
                                    <p>Considering the current impact of Covid-19 pandemic we have reduced our costs significantly because we are aware of the impact the fodd industry has suffered.</p>
                                    <img src="/images/image-three.jpg" alt="" />
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="box_about">
                                    <span>04</span>
                                    <h4><a href="#">Designs which make everyone go wow !!!</a></h4>
                                    <p>Our designs are curated specially for each order by leading designers.</p>
                                    <img src="/images/image-four.jpg" alt="" />
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="box_about">
                                    <span>05</span>
                                    <h4><a href="#">Hassle Free</a></h4>
                                    <p>Placing your complete order through the internet..... How much simpler can it get ?</p>
                                    <img src="/images/image-five.jpg" alt="" />
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="box_about">
                                    <span>06</span>
                                    <h4><a href="#">Post purchase experience</a></h4>
                                    <p>After your purchase you can contact us easily for any troubles. Our mechanics will take care of it.</p>
                                    <img src="/images/image-six.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="our-work-process" style={{ marginTop: "100px" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 style={{
                                textAlign: "center",
                                fontSize: "40px",
                                color: "#E9D8A6"
                            }}>GET YOUR OWN FOOD TRUCK</h1>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="step-box" style={{ marginTop: "30px" }}>
                                <span class="step-number">1</span>
                                <div class="step-icon" ><img src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" alt="iwp-logo-red" border="0"
                                    width="70%" height="70%" style={{ marginTop: "30px" }} /></div>
                                <label>SELECT YOUR TRUCK</label>
                            </div>
                        </div>

                        <div class="col-6 col-lg-3">
                            <div class="step-box">
                                <span class="step-number">2</span>
                                <div class="step-icon"><img src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" alt="iwp-logo-red" border="0"
                                    width="70%" height="70%" style={{ marginTop: "30px" }} /></div>
                                <label>DESIGN YOUR FOOD TRUCK</label>
                            </div>
                        </div>

                        <div class="col-6 col-lg-3">
                            <div class="step-box" style={{ marginTop: "30px" }}>
                                <span class="step-number">3</span>
                                <div class="step-icon"><img src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" alt="iwp-logo-red" border="0"
                                    width="70%" height="70%" style={{ marginTop: "30px" }} /></div>
                                <label>BOOK YOUR ORDER</label>
                            </div>
                        </div>

                        <div class="col-6 col-lg-3">
                            <div class="step-box">
                                <span class="step-number">4</span>
                                <div class="step-icon"><img src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" alt="iwp-logo-red" border="0"
                                    width="70%" height="70%" style={{ marginTop: "30px" }} /></div>
                                <label>WE DELIEVER THE TRUCK </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "65px" }}>
                <Footer />
            </div>
        </div>
    );
}

export default About;