import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import {setValues} from "react";
import { NavLink,useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Designing = () => {
    const [truck, setTruck] = React.useState('Step Van');
    
    let url="";
    
    const handleChange = (event) => {
    setTruck(event.target.value);
    }
    
    const { state } = useLocation();
    console.log(state.array);

    if(truck==='Trailer')
    {
        url='https://my.spline.design/untitled-69aac44e688f64a307de3ba1a10dafe3/'
    }
    else if(truck==='Step Van')
    {
        // url="https://i.ibb.co/J77TsZ0/iwp-logo-yellow.png";
    }

    return (
        <div style={{backgroundColor:"black",paddingTop:"50px"}}>
            
            <h2 style={{marginTop:"25px",color:"#FFB600",fontFamily:"Poppins",
            marginLeft:"75px",textAlign:"center"}}>
            
                Welcome to Food truck Customisation</h2>
            
            <br />
            
            <h5 style={{color:"#FFB600",fontFamily:"Poppins",
            marginLeft:"75px",textAlign:"center"}}>
            
                Welcome to our Customisation Wizard, we will guide you through the steps 
                of customising your own food trucks.
            
            </h5>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",
            flexDirection:"column",margin:"-20px 0 50px",marginTop:"100px"}}>
                <div class="container-customiser">
                    <div class="form-container-customiser">
                        <div class="left-container-customiser">

                        {/* <iframe src={url} frameborder='0' width='500px' height='500px'></iframe> */}

                        {/* <h2 class="h2-customiser">Fill the form below</h2>
                        <p>Please help us understand your requirements better by filling this form</p>
                            <br/> */}

                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="w-100"
                                src="https://i.ibb.co/brFwMVT/10.png"
                                alt="First slide"
                                style={{width:"100%",height:"400px"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="h-100 w-100"
                                src="https://i.ibb.co/HYFSzfy/11.png"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        </div>
                        <div class="right-container-customiser">
                        <div class="right-inner-container-customiser" style={{width:"90%",height:"95%"}}>
                        <strong>Pick a Design Type</strong>
                                <br />
                                <br />
                                
                                <div style={{fontSize:"13px"}}>
                                    Here you can select the designs of foodtruck like the type of wrap, color, your logo, etc for food truck.
                                </div>

                                <div class="container-truck">
                                    
                                    <form style={{fontSize:"13px",marginRight:"0px"}}>
                                        <span style={{textAlign:"left"}}>Type of Wrap</span>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "Partial Wrap"}
                                            onChange={handleChange}
                                            value="Partial Wrap"
                                            />
                                            <span><strong>Partial Wrap</strong></span>
                                        </label>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "Full Wrap"}
                                            onChange={handleChange}
                                            value="Full Wrap"
                                            />
                                            <span><strong>Full Wrap</strong></span>
                                        </label>
                                        <br/>

                                        Type the base color for food truck <input type="text" name="" id="" />

                                        <br/>
                                        <br/>

                                        Upload your Logo <input type="file" name="" id=""/>
                                        <br/>
                                        <br/>
                                        
                                        For any other suggestions
                                        <textarea rows="3" cols="30" onChange={handleChange}></textarea>
                                        <br/>
                                        <br/>
                                        
                                <NavLink to="/floor"><button class="button-customiser" type="submit">Next</button></NavLink>
                            </form>
                                </div>
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

export default Designing;