import React from "react";
import {Routes, Route} from 'react-router-dom'
import Login from "../Auth/Login";
import Container from "../common/Container"
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import ContactUs from "../ContactUs/ContactUs";



const AppRouter = () => {

  // Home
  // Login
  // Menu
  //contact us
 

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/menu" element={<Menu />}  />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Container>
  )
}

export default AppRouter;