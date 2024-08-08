import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './landpage'
import Destination from './destination'
import Travelpackage from './travelpackage'
import UserProfile from './user-profile'
import Dashboard from './admin/dashboard'
import Hotels from './hotels'
import ImageSlider from './ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
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
