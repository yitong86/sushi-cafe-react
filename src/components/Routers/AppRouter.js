import React from "react";
import {Routes, Route} from 'react-router-dom'
import Login from "../Auth/Login";
import Container from "../common/Container"
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import ContactUs from "../ContactUs/ContactUs";
import Category from "../Menu/MenuItems";
import Reviews from "../Reviews/Reviews";
import Logout from "../Auth/Logout";
import CheckOut from "../Auth/CheckOut";
const AppRouter = () => {
 

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path ="/menu" element={<Menu />}  />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/checkout" element={<CheckOut />} />
        
      </Routes>
    </Container>
  )
}

export default AppRouter;