import React from "react"
import "./Header.css"
import { NavLink } from "react-router-dom"
import Logo from "../../Assets/Image/logo.png"
import UserImg from "../../Assets/Image/UserImg.jpg"

export default function Header(){
    return(
        <div className="Header">
           <img src={Logo} alt="..." />
           <div className="Header-menu">
               <NavLink to='/dashboard' className="menu-style" activeClassName="selected" style={{textDecoration: 'none'}}>Dashboard</NavLink>
               <NavLink to='/my-requests' className="menu-style" activeClassName="selected" style={{textDecoration: 'none'}}>My Requests</NavLink>
               <NavLink to='/my-edications' className="menu-style" activeClassName="selected" style={{textDecoration: 'none'}}>My Medications</NavLink>
               <NavLink to='/my-transcations' className="menu-style" activeClassName="selected" style={{textDecoration: 'none'}}>My Transcations</NavLink>
               {/* <div className="menu-style">Medications</div>
               <div className="menu-style">My Transcations</div> */}
               <img className="User-image" src={UserImg} alt="..." />
               <div className="menu-style">Hi, Sam </div>
           </div>
        </div>
    )
}