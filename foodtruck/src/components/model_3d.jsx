import React from "react";
import Footer from "./Footer";

const Model_3d=() =>{
    return(
        <div>
            <section className="" id="about">
                <div className="container-fluid">
                    <center>
                        <br />
                        <br />
                        <br />
                        <div class="sketchfab-embed-wrapper">
                            <iframe title="Food Truck" frameborder="0" allowfullscreen mozallowfullscreen="true" 
                            webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" 
                            xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered 
                            web-share src="https://sketchfab.com/models/ff49a1df02214974873a99bcbb082a9e/embed?
                            autostart=1&transparent=1&dnt=1" style={{height:"700px",width:"1200px"}}> 
                            </iframe> 
                        </div>
                        <br />
                        <br />
                        <br />
                    </center>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Model_3d;