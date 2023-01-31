import React, { Component } from 'react';
import "./NavBar.css";
import Logo from "../../Images/Icons/Logo.png";
import Home from "../../Images/Icons/Home.png"; /* Beginning of middle grid */
import Notif from "../../Images/Icons/Notif.png";
import Globe from "../../Images/Icons/Globe.png";
import Book from "../../Images/Icons/Book.png";
import Money from "../../Images/Icons/Money.png";
import { Avatar } from '@mui/material';
import PFP from "../../Images/PFPs/pfp.png"; /* Beginning of right grid */
import Plus from "../../Images/Icons/Plus.png";
import Message from "../../Images/Icons/Message.png";
import Unread from "../../Images/Icons/Unread.png";
import DropDown from "../../Images/Icons/DropDown.png";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
             <div>
                 <div container className="navbar__line">
                     {/* Left side */}
                     <div>
                         <div className="navbar__leftbar">
                             <img className="navbar__logo" src={Logo} alt="Logo png" width="40px"/>
                             <input className="navbar__search" type="text" placeholder="Search Blourg" />
                         </div>
                     </div>
                    {/* Middle */}
                     <div>
                         <div className="navbar__middle">
                             <div className="navbar__icons active">
                                 <img src={Home} alt="Home" height="35px" width="35px" />
                             </div>
                             <div className="navbar__icons">
                                 <img src={Notif} alt="Notif" height="35px" width="35px" />
                             </div>
                             <div className="navbar__icons">
                                 <img src={Globe} alt="Explore" height="35px" width="35px" />
                             </div>
                             <div className="navbar__icons">
                                 <img src={Book} alt="Book" height="35px" width="35px" />
                             </div>
                             <div className="navbar__icons">
                                 <img src={Money} alt="Money" height="35px" width="35px" />
                             </div>
                         </div>
                     </div>
                    {/* Right side */}
                     <div>
                         <div className="navbar__right">
                             <div className="navbar__righttab">
                                 <div className="user__profile">
                                    <Avatar className="navbar__rightimg" src={PFP} alt="PFP" />
                                    <div className="navbar__profilename"> Kenzie </div>
                                 </div>
                                <div className="navbar__rightbuttons">
                                    <div className="button">
                                        <img src={Plus} alt="Money" className="navbar__rightIcon"/>
                                    </div>
                                    <div className="button">
                                        <img src={Message} alt="Money" className="navbar__rightIcon"/>
                                    </div>
                                    <div className="button">
                                        <img src={Unread} alt="Money" className="navbar__rightIcon"/>
                                    </div>
                                    <div className="button">
                                        <img src={DropDown} alt="Money" className="navbar__rightIcon"/>
                                    </div>
                                </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
            );
    }
}
export default NavBar;