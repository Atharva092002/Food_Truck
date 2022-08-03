import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import {setValues} from "react";
import { NavLink,useLocation,useNavigate } from "react-router-dom";

const Generator = () => {
    const [truck, setTruck] = React.useState('Honda Ex-2400S');
    
    let url="";
    
    const { state } = useLocation();

    const handleChange = (event) => {
    setTruck(event.target.value);
    }
    
    if(truck==='Honda Ex-2400S')
    {
        url='https://i.ibb.co/mCFtJ9V/3.png'
    }
    else if(truck==='Honda EP 1000')
    {
        url="https://i.ibb.co/ZTY50bQ/Untitled-design-1.png";
    }
    else if(truck==='Hi-MAX')
    {
        url="https://i.ibb.co/zfprjRF/2.png";
    }

    let array=[];
    array.push(state.array[0]);
    array.push(state.array[1]);
    array.push(state.array[2]);
    array.push(state.array[3]);
    array.push(truck);

    const navigate = useNavigate();

    const todesign=()=>
    {
        navigate('/design',{state:{array}});
    }

    console.log(array);
    
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

                        <img src={url} width='350px' height='350px'/>

                        <br/>
                        </div>
                        <div class="right-container-customiser">
                        <div class="right-inner-container-customiser">
                        <strong>Pick a Generator</strong>
                                <br />
                                <br />
                                Choose from the list of generators<br/>
                                A generator is needed so that there is no interruption when serving customers.
                                <div style={{marginTop:"20px"}} class="container-truck">
                                    
                                    <form>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "Honda Ex-2400S"}
                                            onChange={handleChange}
                                            value="Honda Ex-2400S"
                                            />
                                            <span><strong>Honda Ex-2400S</strong></span>
                                        </label>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "Honda EP 1000"}
                                            onChange={handleChange}
                                            value="Honda EP 1000"
                                            />
                                            <span><strong>Honda EP 1000</strong></span>
                                        </label>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "Hi-MAX"}
                                            onChange={handleChange}
                                            value="Hi-MAX"
                                            />
                                            <span><strong>Hi-MAX</strong></span>
                                        </label>
                                <button class="button-customiser" type="submit" onClick={()=>{todesign()}}>Next</button>
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

export default Generator;