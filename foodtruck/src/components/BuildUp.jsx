import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import {setValues} from "react";
import { NavLink,useLocation,useNavigate } from "react-router-dom";

const BuildUp = () => {
    const [truck, setTruck] = React.useState('Snow Cone Ready');
    
    let url="";
    
    const { state } = useLocation();

    const handleChange = (event) => {
    setTruck(event.target.value);
    }
    
    if(truck==='Snow Cone Ready')
    {
        url='https://i.ibb.co/zHLPvZt/pexels-prithpal-bhatia-2518078-1.jpg'
    }
    else if(truck==='Kitchen Ready')
    {
        url="https://i.ibb.co/99GpqMc/pexels-tima-miroshnichenko-5794155.jpg";
    }

    let array = [];
    array.push(state.array[0]);
    array.push(state.array[1]);
    array.push(truck);
    console.log(array);

    const navigate = useNavigate();

    const tokitchenopt=()=>
    {
        navigate('/kitchenopt',{state:{array}});
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

                        <img src={url} width='420px' height='400px'/>

                            <br/>
                        </div>
                        <div class="right-container-customiser">
                        <div class="right-inner-container-customiser">
                        <strong>Pick your Build Out Options</strong>
                                <br />
                                <br />
                                Choose either a Snow-Cone Style trailer or Kitchen Ready trailer <br/>
                                The Kitchen ready trailers will feature a 6 ft hood, extractor fan and gas lines included in the build.
                                <div style={{marginTop:"35px"}} class="container-truck">
                                    
                                    <form>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "Snow Cone Ready"}
                                            onChange={handleChange}
                                            value="Snow Cone Ready"
                                            />
                                            <span><strong>Snow Cone Ready</strong></span>
                                        </label>
                                        <label class="label-truck">
                                            <input type="radio" name="radio" 
                                            checked={truck === "Kitchen Ready"}
                                            onChange={handleChange}
                                            value="Kitchen Ready"
                                            />
                                            <span><strong>Kitchen Ready</strong></span>
                                        </label>
                                        <br />
                                        <button class="button-customiser" type="submit" onClick={()=>{tokitchenopt()}}>Next</button>
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

export default BuildUp;