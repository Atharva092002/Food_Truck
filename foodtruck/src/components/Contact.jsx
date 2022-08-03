import React from "react";
import { useState } from "react";
import Footer from "./Footer";

const Contact = () => {

    const [msg, setMessage] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setMessage({ ...msg, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = msg;
        try {
            const res = await fetch('/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Message not sent");
            }
            else {
                window.alert("Message sent Successfully");
                setMessage({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{backgroundColor:"black"}}>
            <section class="container" style={{height:"100%",marginLeft:"4.5em"}}>
                <div class="contact" style={{height:"40em"}}>
                    <div className="trialtext">
                        <h4>Contact Us</h4>
                        <br />
                        <p style={{ lineHeight: "2em" }}>
                        Vellore Institute of Technology, Vandalur <br/>
                        Kelambakkam Road Chennai, <br/>
                        Tamil Nadu – 600 127<br/>
                            <br />
                            +91 1223334568 <br />
                            Email: foodtrucks@gmail.com <br />
                            <br />
                            Follow us at <br />
                            <br />
                            <ul class="social-media" style={{ marginLeft: "0em", padding: "0em"}}>
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </p>
                        </div>
                </div>
            </section>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18504.1623095879!2d80.14209006286113!3d12.84192341632986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1646022828944!5m2!1sen!2sin" 
            width="962" height="640" style={{border:"0"}} 
            allowfullscreen="" loading="lazy">
            </iframe>
            <Footer/>
        </div>
    );
}

export default Contact;