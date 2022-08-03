import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import {setValues} from "react";
import { NavLink,useLocation,useNavigate } from "react-router-dom";
import {Carousel} from "react-bootstrap";

const KitchenOpt = () => {
    const [truck, setTruck] = React.useState('Step Van');
    
    let kitchen=[];
    
    const { state } = useLocation();
    console.log(state.array);

    const handleChange = (event) => {
    setTruck(event.target.value);
    }
    console.log(truck);
    
    if(state.array[2]==='Kitchen Ready')
    {
        kitchen.push("Gas stove");
        kitchen.push("Rotisserie");
        kitchen.push("Refrigerator");
        kitchen.push("Table");
        kitchen.push("BBQ");
        kitchen.push("Grill");
        kitchen.push("Chimney");
        kitchen.push("Setup station");
        kitchen.push("Pantry");
    }
    else if(state.array[2]==='Snow Cone Ready')
    {
        kitchen.push("Refrigeration");
        kitchen.push("Ice-cream machine");
        kitchen.push("Toppings Station");
        kitchen.push("Table");
        kitchen.push("Shaving Machine");
        kitchen.push("cold storage");
    }

    let array=[];
    array.push(state.array[0]);
    array.push(state.array[1]);
    array.push(state.array[2]);
    array.push(truck);
    
    const navigate = useNavigate();

    const togenerator=()=>
    {
        navigate('/generator',{state:{array}});
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
                        <div class="left-inner-container-customiser">

                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="w-100"
                                src="https://i.ibb.co/vVcNw0J/fridge-7074774-1280.webp"
                                alt="First slide"
                                style={{width:"100%",height:"400px"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="h-100 w-100"
                                src="https://i.ibb.co/dLCNDGM/IWP-PROJECT-PICS.png"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-100"
                                src="https://i.ibb.co/WBJKQyC/5.png"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-100"
                                src="https://i.ibb.co/h1XWfmT/7.png"
                                alt="Fourth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-100"
                                src="https://i.ibb.co/cQR20yt/9.png"
                                alt="Fifth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-100"
                                src="https://i.ibb.co/D5VQ0YY/dishwasher-opendoor.png"
                                alt="Sixth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-100"
                                src="https://i.ibb.co/MCXMMyj/watertap.png"
                                alt="Seventh slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                            <br/>
                        </div>
                        </div>
                        <div class="right-container-customiser">
                        <div class="right-inner-container-customiser" style={{width:"90%"}}>
                        <strong>Pick your Kitchen and Accessories</strong>
                                <br />
                                <br />
                                <div style={{fontSize:"13px"}}>
                                For {state.array[2]}, the below items listed will be fitted in the {state.array[0]}. 
                                    For any other equipments needed please type in the text-area.
                                </div>
                                <br/>

                                <div>
                                      {kitchen.map(name =>` ${name}, `)}
      	                        </div>

                                <div class="container-truck">
                                <form>
                                
                                <textarea rows="4" cols="35" onChange={handleChange}></textarea>
                                
                                <button class="button-customiser" type="submit" onClick={()=>{togenerator()}}>Next</button>
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

export default KitchenOpt;