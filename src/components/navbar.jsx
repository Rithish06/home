import React from "react";
import '../css/navbar.css'


class Navbar extends React.Component {
    state = { clicked: false }
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})    
    }
    render(){
        return(
            <>
                <nav className="navbar">
                    <a href="" className="logo_link">
                        <img src="/Home_page/logo.png" alt="" className="im_logo" />
                    </a>
    
                    <div className="menu" id="menu">
                        <ul id="nav_list" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li className="nav_list_item"><a href="" className="active">Home</a></li>
                            <li className="nav_list_item"><a href="">Contact Us</a></li>
                            <li className="nav_list_item"><a href="">Services</a></li>
                            <li className="nav_list_item"><a href="">Career</a></li>
                        </ul>
                    </div>
    
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar