import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import TruckType from "./Trucktype";

const Customiser = () => {
    const [msg, setMessage] = useState({
        name: "",
        email: "",
        companyname:"",
        phone: "",
        address: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setMessage({ ...msg, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, companyname,phone,address } = msg;
        try {
            const res = await fetch('/userData', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, companyname,phone,address
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Details havent been saved");
            }
            else {
                window.location="/trucktype";
                setMessage({
                    name: "",
                    email: "",
                    companyname: "",
                    phone:"",
                    address:""
                });
            }
        } catch (error) {
            console.log(error)
        }
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
                        <img src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" style={{width:"55%",height:"55%"}}
                            alt="out logo"/>
                        <h2 class="h2-customiser">Fill the form below</h2>
                        <p>Please help us understand your requirements better by filling this form</p>
                            <br/>
                        </div>
                        </div>
                        <div class="right-container-customiser">
                        <div class="right-inner-container-customiser">
                            <form method="POST" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Name *"  class="input-customiser" 
                                required name="name" value={msg.name} onChange={handleChange}/>
                                
                                <input type="email" placeholder="Email *" class="input-customiser" 
                                required name="email" value={msg.email} onChange={handleChange}/>
                                
                                <input type="text" placeholder="Company Name*" class="input-customiser"  
                                name="companyname" required value={msg.companyname} onChange={handleChange}/>
                                
                                <input type="phone" placeholder="Phone*" class="input-customiser" 
                                required name="phone" value={msg.phone} onChange={handleChange}/>
                                
                                <input type="text" placeholder="Address*" class="input-customiser" 
                                required name="address" value={msg.address} onChange={handleChange}/>
                                <br />
                                <br />
                                <button class="button-customiser" type="submit">Next</button>
                            </form>
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

export default Customiser;