import React from "react";
import '../css/navbar.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";


class Navbar extends React.Component {
    state = { clicked: false }
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})    
    }
    render(){
        return(
            <>
                <BrowserRouter>
                <nav className="navbar">
                    <a href="" className="logo_link">
                        <img src="/Home_page/logo.png" alt="" className="im_logo" />
                    </a>
    
                    <div className="menu" id="menu">
                        <ul id="nav_list" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li className="nav_list_item"><NavLink to = '/'>Home</NavLink></li>
                            <li className="nav_list_item"><NavLink to = '/About' >Contact Us</NavLink></li>
                            <li className="nav_list_item"><NavLink to = '/contact' >Services</NavLink></li>
                            <li className="nav_list_item"><NavLink to = '/career' >Career</NavLink></li>
                        </ul>
                    </div>
    
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default Navbar