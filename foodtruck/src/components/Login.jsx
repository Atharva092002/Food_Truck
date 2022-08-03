import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // FOr login only
    // const history = useNavigate()

    const [user, setUser] = useState({
        email : '',
        password : ''
      });
    
      const handleChange = (event) =>{
        let name = event.target.name
        let value = event.target.value
    
        setUser({...user, [name]:value})
      }
    
      const handleSubmit = async (event) =>{
        event.preventDefault();
        const {email, password} = user;
        try {
        const res = await fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password})
          });
          
          if(res.status === 400 || !res){
            window.alert("Invalid Credentials")
          }else{
            window.alert("Login Successfull");
            window.location.reload();
            // history.push('/')
          }
    
        } catch (error) {
          console.log(error);
        }
      }
    
      //For registration
      const [newuser, newsetUser] = useState({
        username : "",
        email : "",
        password : ""
      });
      const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
    
        newsetUser({...newuser, [name]:value});
      }
      const handlereg = async (event)=>{
        event.preventDefault();
        const {username, email, password} = newuser;
        try {
          const res = await fetch('/register', {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              username, email, password
            })
          })
          console.log(res.status)
          if(res.status === 400 || !res){
            window.alert("Already Used Details")
          }else{
            window.alert("Registered Successfully");
          }
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <div style={{backgroundColor:"black",paddingTop:"50px"}}>
            <div class="container_login" style={{marginLeft:"300px"}}>
                <input type="checkbox" id="flip" />
                <div class="cover">
                    <div class="front">
                        <div class="text_login">
                            <img src="https://i.ibb.co/qCRGfYG/iwp-logo-red.png" style={{width:"55%",height:"55%"}}
                            alt="out logo"/>
                        </div>
                    </div>
                </div>
                <div class="forms">
                    <div class="form-content">
                        <div class="login-form">
                            <div class="title">Login</div>
                            <form onSubmit={handleSubmit} method="POST">
                                <div class="input-boxes">
                                    <div class="input-box">
                                        <i class="fas fa-envelope" ></i>
                                        <input type="email" placeholder="Enter your email" required style={{ color: "black"}}
                                        name="email" value={user.email} onChange={handleChange}/>
                                    </div>
                                    <div class="input-box">
                                        <i class="fas fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" required style={{color:"black"}} 
                                        onChange={handleChange} name="password" value={user.password}/>
                                    </div>
                                    <div class="text"><a href="#" style={{ color: "black"}}>Forgot password?</a></div>
                                    <div class="button input-box">
                                        <input type="submit" value="Login"/>
                                    </div>
                                    <div class="text_login sign-up-text">Don't have an account? <label for="flip" style={{color:"#CA6702"}}>Signup now</label></div>
                                </div>
                            </form>
                        </div>
                   <div class="signup-form">
                            <div class="title">Signup</div>
                            <form onSubmit={handlereg} method="POST">
                                <div class="input-boxes">
                                    <div class="input-box">
                                        <i class="fas fa-user"></i>
                                        <input type="text" placeholder="Enter your name" required style={{ color: "black"}} 
                                        value={newuser.username} onChange={handleInput} name="username"/>
                                    </div>
                                    <div class="input-box">
                                        <i class="fas fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email" required style={{ color: "black"}}
                                        value={newuser.email} onChange={handleInput} name="email"/>
                                    </div>
                                    <div class="input-box">
                                        <i class="fas fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" required style={{ color: "black"}}
                                        value={newuser.password} onChange={handleInput} name="password"/>
                                    </div>
                                    <div class="button input-box">
                                        <input type="submit" value="Submit" />
                                    </div>
                                    <div class="text_login sign-up-text">Already have an account? <label for="flip" style={{ color: "#CA6702"}}>Login now</label></div>
                                </div>
                            </form>
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

export default Login;