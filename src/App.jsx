import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './landpage'
import Destination from './destination'
import Travelpackage from './travelpackage'
import UserProfile from './user-profile'
import Dashboard from './admin/dashboard'
import Hotels from './hotels'
import Home from './Home'
import axios from 'axios'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [loading, setLoading] = useState(false);
useEffect(() =>{
  const validateToken = async () =>{
    // Check if token exists in local storage
    const token = localStorage.getItem('token')
    axios.defaults.headers.common["Authorization"] = `Bearer $(token)`;

    if(token){
      try {
        const response = await axios.get("http://localhost5223/api/account/verify-token");
        console.log(response);
        setIsAuthenticated(true);
      } catch (error) {
        
      }
    }
  }
  validateToken();
}, []);

  const handelLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    // setLoading(false);
  }

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path ="/destination" element={<Destination/>}/>
        <Route path="/travelpackage" element={<Travelpackage />} />
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/profile" element={<UserProfile />} />
        <Route path ="/admin/*" element={<Dashboard/>}/>
        {/* <Route path="/" element={<ImageSlider/>} /> */}
      </Routes>
      </BrowserRouter>
    
    
    </>
  )
}

export default App
