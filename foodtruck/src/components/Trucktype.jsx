import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import {setValues} from "react";
import { NavLink,useNavigate } from "react-router-dom";

const TruckType = () => {
    const [truck, setTruck] = React.useState('Step Van');
    
    let url="";
    
    const handleChange = (event) => {
    setTruck(event.target.value);
    }
    
    if(truck==='Trailer')
    {
        url='https://my.spline.design/untitled-69aac44e688f64a307de3ba1a10dafe3/';
        
    }
    else if(truck==='Transit Van')
    {
        url='https://my.spline.design/untitled-afeb80104f5ea94a51f2c5e17176711c/'
    }
    else if(truck==='Step Van')
    {
        url='https://my.spline.design/untitled-07b96f12abbd314c40ac63cef175c434/'
    }

    const navigate = useNavigate();

  const totrucksize=()=>
  {
    navigate('/trucksize',{state:{truck}});
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

                        <iframe src={url} width='500px' height='500px'></iframe>

                        </div>
                        <div class="right-container-customiser">
                        <div class="right-inner-container-customiser">
                                <strong>Pick your Mobile Kitchen Type.</strong>
                                <br />
                                <br />
                                Please choose from a type of vehicle -trailer, stepvan or sprinter van.
                                <div style={{marginTop:"35px"}} class="container-truck">
                                    <form >
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === 'Trailer'}
                                            onChange={handleChange}
                                            value="Trailer"
                                            />
                                            <span><strong>Trailer</strong></span>
                                        </label>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === 'Step Van'}
                                            onChange={handleChange}
                                            value="Step Van"
                                            />
                                            <span><strong>Step Van</strong></span>
                                        </label>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === 'Transit Van'}
                                            onChange={handleChange}
                                            value="Transit Van"
                                            />
                                            <span><strong>Transit Van</strong></span>
                                        </label>
                                        <br />
                                <br />
                                <button class="button-customiser" type="submit" onClick={()=>{totrucksize()}}>Next</button>
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

export default TruckType;