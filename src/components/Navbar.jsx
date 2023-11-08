import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.svg"
import "./Navbar.css"
import FieldsNavbar from './FieldsNavbar'
const Navbar = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} alt="" /> 
        </div>
        <NavLink to="/">
          <FieldsNavbar campo={"Inicio"}/>
        </NavLink>
        <FieldsNavbar campo={"Desarrollador"}/>
        <NavLink to="/abogado">
          <FieldsNavbar campo={"Abogado"}/>
        </NavLink>
        
        <FieldsNavbar campo={"Marketing"}/>
        <FieldsNavbar campo={"Contador"}/>
        <FieldsNavbar campo={"Secretaria"}/>
    </div>
        
  )
}

export default Navbar