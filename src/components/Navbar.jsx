import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets_project/logo.svg";
import "./Navbar.css";
import FieldsNavbar from "./FieldsNavbar";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <NavLink to="/"  style={{ textDecoration: 'none', color: '' }}>
        <FieldsNavbar campo={"Inicio"} />
      </NavLink>
      <NavLink to="/desarrollador">
        <FieldsNavbar campo={"Desarrollador"} />
      </NavLink>
      <NavLink to="/abogado">
        <FieldsNavbar campo={"Abogado"} />
      </NavLink>
      <NavLink to="/marketing">
        <FieldsNavbar campo={"Marketing"} />
      </NavLink>
      <NavLink to="/contador">
        <FieldsNavbar campo={"Contador"} />
      </NavLink>
      <NavLink to="/secretaria">
        <FieldsNavbar campo={"Secretaria"} />
      </NavLink>
      <NavLink to="/gerente">
        <FieldsNavbar campo={"Gerente"} />
      </NavLink>
    </div>
  );
};

export default Navbar;
