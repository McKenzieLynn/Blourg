import { Grid } from '@mui/material';
import React, { Component } from 'react';
import "./MainPage.css";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="mainpage__container">
                <Grid container>
                    
                    {/* Left */}
                    <Grid item xs={3}> 
                        Left
                    </Grid>

                    {/* Middle */}
                    <Grid item xs={6}>
                        Middle
                    </Grid>

                    {/* Right */}
                    <Grid item xs={3}>
                        Right
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Layout;