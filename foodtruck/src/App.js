import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';
import Logout from './components/Logout';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Support from './components/Support';
import Model_3d from './components/model_3d';
import Customiser from './components/Customiser';
import { useEffect, useState } from 'react';
import TruckType from './components/Trucktype';
import TruckSize from './components/TruckSize';
import BuildUp from './components/BuildUp';
import KitchenOpt from './components/KitchenOpt';
import Generator from './components/Generator';
import Designing from './components/Designing';
import Floor from './components/Floor';

function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
    <Navbar auth={auth1}/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/support" element={<Support />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/logout" element={<Logout />}/>
      <Route exact path="/model" element={<Model_3d />}/>
      <Route exact path="/trucktype" element={<TruckType />}/>
      <Route exact path="/customiser" element={<Customiser />}/>
      <Route exact path="/trucksize" element={<TruckSize />}/>
      <Route exact path="/buildup" element={<BuildUp />}/>
      <Route exact path="/kitchenopt" element={<KitchenOpt />}/>
      <Route exact path="/generator" element={<Generator />}/>
      <Route exact path="/design" element={<Designing />}/>
      <Route exact path="/floor" element={<Floor />}/>
    </Routes>
    </>
  );
}

export default App;
