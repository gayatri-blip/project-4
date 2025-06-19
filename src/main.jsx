import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

// import App from './App.jsx'
import Navbar from './Navbar.jsx'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {Home,Electronics,Shoes,Clothes} from './Home.jsx'
import Link from './Link.jsx'
import Login from './Login.jsx'
import ProductDetails1 from './Product_details1.jsx'
import ProductDetails2 from './Product_Details2.jsx'
import ProductDetails3 from './Product_Details3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    

    <Router>
      
<Navbar/>


      <Routes>
        <Route path='/Home'element={<Home/>}>
        <Route path='/Home/Electronics'element={<Electronics/>}></Route>
        <Route path='/Home/Shoes'element={<Shoes/>}></Route>
        <Route path='/Home/Clothes'element={<Clothes/>}></Route>
        </Route>
        <Route path='/Link'element={<Link/>}></Route>
        <Route path='/Login'element={<Login/>}></Route>
        <Route path="/ProductDetails1/:id" element={<ProductDetails1/>}></Route>
        <Route path="/ProductDetails2/:id" element={<ProductDetails2/>}></Route>
        <Route path="/ProductDetails3/:id" element={<ProductDetails3/>}></Route>
      </Routes>
      
    </Router>

    
  </StrictMode>,
)
