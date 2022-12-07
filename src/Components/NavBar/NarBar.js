import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';

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
                         left
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