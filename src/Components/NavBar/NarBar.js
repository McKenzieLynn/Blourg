import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import Logo from "../../Images/Icons/Logo.png";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() { 
        return (
             <div>
                 <Grid container >
                     <Grid item xs ={3}>
                         <div className="navbar__leftbar">
                             <img className="navbar__logo" src={Logo} alt="Logo png" width="40px"/>
                             <input className="navbar__search" type="text" placeholder="Search Blourg" />
                         </div>
                     </Grid>
                     <Grid item xs ={6}>
                         middle
                     </Grid>
                     <Grid item xs ={3}>
                         right
                     </Grid>
                 </Grid>
             </div> 
            );
    }
}
 
export default NavBar;