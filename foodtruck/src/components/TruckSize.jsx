import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import {setValues} from "react";
import { NavLink} from "react-router-dom";
import {useLocation,useNavigate} from 'react-router-dom';

const TruckSize = () => {
    const [truck, setTruck] = React.useState("16' Feet");
    
    let url="";
    let width="";
    let height="";

    const { state } = useLocation();

    const handleChange = (event) => {
    setTruck(event.target.value);
    }
    
    if(state.truck==='Trailer' && truck==="16' Feet")
    {
        url='https://my.spline.design/untitled-69aac44e688f64a307de3ba1a10dafe3/';
        width="300px";
        height="300px";
        
    }
    else if(state.truck==='Trailer' && truck==="18' Feet")
    {
        url='https://my.spline.design/untitled-69aac44e688f64a307de3ba1a10dafe3/';
        width="400px";
        height="400px";
        
    }
    else if(state.truck==='Trailer' && truck==="20' Feet")
    {
        url='https://my.spline.design/untitled-69aac44e688f64a307de3ba1a10dafe3/';
        width="500px";
        height="500px";
        
    }
    else if(state.truck==='Transit Van' && truck==="16' Feet")
    {
        url='https://my.spline.design/untitled-afeb80104f5ea94a51f2c5e17176711c/';
        width="300px";
        height="300px";
    }
    else if(state.truck==='Transit Van' && truck==="18' Feet")
    {
        url='https://my.spline.design/untitled-afeb80104f5ea94a51f2c5e17176711c/';
        width="400px";
        height="400px";
    }
    else if(state.truck==='Transit Van' && truck==="20' Feet")
    {
        url='https://my.spline.design/untitled-afeb80104f5ea94a51f2c5e17176711c/';
        width="500px";
        height="500px";
    }
    else if(state.truck==='Step Van' && truck==="16' Feet")
    {
        url='https://my.spline.design/untitled-07b96f12abbd314c40ac63cef175c434/';
        width="300px";
        height="300px";
    }
    else if(state.truck==='Step Van' && truck==="18' Feet")
    {
        url='https://my.spline.design/untitled-07b96f12abbd314c40ac63cef175c434/';
        width="400px";
        height="400px";
    }
    else if(state.truck==='Step Van' && truck==="20' Feet")
    {
        url='https://my.spline.design/untitled-07b96f12abbd314c40ac63cef175c434/';
        width="500px";
        height="500px";
    }
    
    const trucktype=state.truck;
    
    let array = [];
    array.push(trucktype);
    array.push(truck);
    console.log(array);

    const navigate = useNavigate();

    const tobuildup=()=>
    {
        navigate('/buildup',{state:{array}});
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

                        <iframe src={url} frameborder='0' width={width} height={height}></iframe>

                        </div>
                        <div class="right-container-customiser">
                        <div class="right-inner-container-customiser">
                        <strong>Pick your truck size & condition</strong>
                                <br />
                                <br />
                                All trailers are 8.5' Wide and feature an 7.5' interior height, screwless exterior
                                <div style={{marginTop:"35px"}} class="container-truck">
                                    
                                    <form>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "16' Feet"}
                                            onChange={handleChange}
                                            value="16' Feet"
                                            />
                                            <span><strong>16' Feet</strong></span>
                                        </label>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "18' Feet"}
                                            onChange={handleChange}
                                            value="18' Feet"
                                            />
                                            <span><strong>18' Feet</strong></span>
                                        </label>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "20' Feet"}
                                            onChange={handleChange}
                                            value="20' Feet"
                                            />
                                            <span><strong>20' Feet</strong></span>
                                        </label>
                                        <br />
                                        <button class="button-customiser" type="submit" onClick={()=>{tobuildup()}}>Next</button>
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

export default TruckSize;