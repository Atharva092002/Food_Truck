import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Footer from "./Footer";

const Home = () => {
    document.title = "Food Truck";
    return (
        <div style={{ backgroundColor: "black" }}>
            <h2 style={{ marginLeft: "50px" }}>
                <a href="#" class="logo">
                    <img src="https://i.ibb.co/J77TsZ0/iwp-logo-yellow.png" width="100" height="100" />
                </a>
            </h2>
            <section>
                <div class="container ">
                    <div class="row">
                        <div id="left" class="col-sm-6 jumbotron text-left">
                            <p style={{ color: "black" ,
                                marginLeft: "15px",
                                color: "#E9D8A6",
                                fontSize: "45px",
                                fontFamily: "Poppins",
                                lineHeight: "1.4em",
                                fontWeight: "800",
                                textTransform: "uppercase",
                            }}>

                                MAKING YOUR<br />

                                FOOD TRUCK<br />

                                <span style={{
                                    fontSize: "2em",
                                    color: "#EE9B00"
                                }}>DREAMS<br /></span>

                                COME TRUE<br />

                                <p style={{
                                    color: "white", fontSize: "15px", fontFamily: "Poppins",
                                    letterSpacing: "0.5px", lineHeight: "35px", fontWeight: "300"
                                }}><i>
                                        Building custom food trucks since 2022</i></p></p>

                            <NavLink to="/model"><button className="btn btn-md" style={{
                                display: "inline-block",
                                marginLeft: "20px",
                                padding: "8px 20px",
                                background: "#EE9B00",
                                color: "#000000",
                                borderRadius: "40px",
                                fontWeight: "500",
                                letterSpacing: "1px",
                                textDecoration: "none",
                                textTransform: "uppercase"
                            }}>
                                Previous Works
                            </button></NavLink>
                        </div>

                        <div id="right" class="col-sm-6 jumbotron text-center">
                            <img
                                src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png"
                                width="100%"
                                height="100%" style={{ marginLeft: "0px", marginTop: "0px" }} />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <section>
                <div class="container">
                    <div class="row">
                        <div id="left" class="col-sm-6 jumbotron text-left">
                            <img
                                src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png"
                                width="100%"
                                height="100%" style={{ marginLeft: "0px", marginTop: "0px" }}
                                alt="" />
                        </div>
                        <div id="right" class="col-sm-6 jumbotron">
                            <p style={{ color: "black" ,
                                marginLeft: "15px",
                                color: "#E9D8A6",
                                fontSize: "45px",
                                fontFamily: "Poppins",
                                lineHeight: "1.5em",
                                fontWeight: "800",
                                textTransform: "uppercase",
                            }}>

                                WHY CHOOSE US....
                                <p
                                    style={{
                                        color: "white", fontSize: "15px", fontFamily: "Poppins",
                                        letterSpacing: "0.5px", lineHeight: "35px", fontWeight: "300",
                                        marginTop: "18px"
                                    }}>
                                    <i><b>They dont call us the leading manafacturers of food truck in India without a reason.</b></i>
                                </p>

                                <p
                                    style={{
                                        color: "white", fontSize: "15px", fontFamily: "Poppins",
                                        letterSpacing: "0.5px", lineHeight: "25px", fontWeight: "300"
                                    }}>

                                    We build Food Trucks to your specifications and customize them to meet your needs.
                                    Our team of highly skilled professionals have expertise in
                                    fabrication, assembly and creation of beautiful food trucks. <br />
                                    <br />
                                    <i><b>
                                        <span style={{ color: "#ed1c24", fontSize: "15px", marginLeft: "30px" }}>
                                            Our goal is to make beautiful food trucks in record time so that
                                            they make all heads turn
                                        </span>
                                    </b></i>

                                    <br />
                                    <br />

                                    Come join the hundreds of other customers who trusted us for building their dream food truck
                                </p></p>

                            <NavLink to="/contact"><button className="btn btn-lg" style={{
                                display: "inline-block",
                                marginTop: "10px",
                                marginLeft: "20px",
                                padding: "8px 20px",
                                background: "#EE9B00",
                                color: "#000000",
                                borderRadius: "40px",
                                fontWeight: "500",
                                letterSpacing: "1px",
                                textDecoration: "none",
                                textTransform: "uppercase"
                            }}>
                                Contact Us
                            </button></NavLink>

                        </div>
                    </div>
                </div>
            </section>
            <br />
            <h1 style={{
                textAlign: "center",
                paddingTop: "80px",
                fontSize: "40px",
                color: "#E9D8A6",
                fontFamily: "Poppins"
            }}>
                Process</h1>

            <img src="https://i.ibb.co/mqQCfwP/Process.png" style={{ width: "80%", marginLeft: "150px" }}/>

            <section id="Previous Works">
                <h1 style={{
                    textAlign: "center",
                    paddingTop: "80px",
                    fontSize: "40px",
                    color: "#E9D8A6",
                    fontFamily: "Poppins"
                }}>Previous works</h1>

                <div class="cont" style={{ marginLeft: "100px", zIndex: "-1" }}>
                    <Card className="card" style={{ backgroundColor: "#EE9B00", zIndex: "2" }}>
                        <div class="box">
                            <div class="content" style={{ color: "#dddddd", zIndex: "2" }}>
                                <h2>01</h2>
                                <Card.Img class="card-img" src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" width="80%" height="80%" />
                                <Card.Body>
                                    <Card.Title><h3>Type-1</h3></Card.Title>
                                    <Card.Text>This was made for a special customer, who really wanted the best aesthetics and functionality</Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>

                    <Card className="card" style={{ backgroundColor: "#EE9B00" }}>
                        <div class="box" style={{ marginLeft: "0" }}>
                            <div class="content" style={{ color: "#dddddd", zIndex: "2" }}>
                                <h2>02</h2>
                                <Card.Img class="card-img" src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" width="100%" height="100%" />
                                <Card.Body>
                                    <Card.Title><h3>Type-2</h3></Card.Title>
                                    <Card.Text>This was made for a special customer, who really wanted the best aesthetics and functionality</Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>

                    <Card className="card" style={{ backgroundColor: "#EE9B00" }}>
                        <div class="box">
                            <div class="content" style={{ color: "#dddddd", zIndex: "2" }}>
                                <h2>03</h2>
                                <Card.Img class="card-img" src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" width="100%" height="100%" />
                                <Card.Body>
                                    <Card.Title><h3>Type-3</h3></Card.Title>
                                    <Card.Text>This was made for a special customer, who really wanted the best aesthetics and functionality</Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <h1 style={{
                textAlign: "center",
                paddingTop: "80px",
                fontSize: "40px",
                color: "#E9D8A6",
                fontFamily: "Poppins",
                marginTop: "0px"
            }}>
                Testimonials</h1>
            <div class="wrapper" style={{ marginTop: "75px" }}>
                <div class="box">
                    <i class="fas fa-quote-left quote"></i>
                    <p>
                        I am so glad I found your company, your solutions to this industry really helped in the start-up process. Highly recommend
                    </p>
                    <div class="content">
                        <div class="info">
                            <div class="name">Alex Smith</div>
                            <div class="job">Food truck owner</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        <div class="image">
                            <img src="https://i.ibb.co/19dKdNW/user-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="box">
                    <i class="fas fa-quote-left quote"></i>
                    <p>
                        Thank you so much for guiding my team with the food truck setup, we saved soo much timee!!
                    </p>
                    <div class="content">
                        <div class="info">
                            <div class="name">Steven Chris</div>
                            <div class="job">Food truck owner</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        <div class="image">
                            <img src="https://i.ibb.co/hWSxm2T/user-2.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="box">
                    <i class="fas fa-quote-left  quote"></i>
                    <p>
                        Amazing idea and  Amazing execution super happy:)........ Super fast delivery and also worth for the money paid
                    </p>
                    <div class="content">
                        <div class="info">
                            <div class="name">Kristina Bellis</div>
                            <div class="job">Food truck owner</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        <div class="image">
                            <img src="https://i.ibb.co/3rssz6h/user-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <h2 style={{marginTop:"125px",color:"#FFB600",fontFamily:"Poppins",
            marginLeft:"75px"}}>Come And Get started on building your own food truck empire</h2>
            </div>
            <div style={{ marginTop: "65px" }}>
                <Footer />
            </div>
        </div>
    );
}

export default Home;