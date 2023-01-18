import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import Logo from "../../Images/Icons/Logo.png";
import Home from "../../Images/Icons/Home.png"; /* Beginning of middle grid */
import Notif from "../../Images/Icons/Notif.png";
import Globe from "../../Images/Icons/Globe.png";
import Book from "../../Images/Icons/Book.png";
import Money from "../../Images/Icons/Money.png";
import { Avatar } from '@mui/material';
import PFP from "../../Images/PFPs/pfp.png"; /* Beginning of right grid */

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() { 
        return (
             <div>
                 <Grid container className="align__center navbar__line">
                     {/* Left side */}
                     <Grid item xs ={3}>
                         <div className="navbar__leftbar">
                             <img className="navbar__logo" src={Logo} alt="Logo png" width="40px"/>
                             <input className="navbar__search" type="text" placeholder="Search Blourg" />
                         </div>
                     </Grid>
                    {/* Middle */}
                     <Grid item xs ={6}>
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
                     </Grid>
                    {/* Right side */}
                     <Grid item xs ={3}>
                         <div className="navbar__right">
                             <div className="navbar__righttab">
                                 <Avatar className="navbar__rightimg" src={PFP} alt="PFP" height="30px" width="30px" />
                                 <div className="navbar__profilename"> Kenzie </div>
                             </div>
                         </div>
                     </Grid>
                 </Grid>
             </div> 
            );
    }
}
 
export default NavBar;