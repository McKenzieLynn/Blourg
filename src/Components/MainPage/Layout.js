import { Grid } from '@mui/material';
import React, { Component } from 'react';
import "./MainPage.css";
import LeftSide from "./LeftSidePanel/LeftSide";
import StoriesBar from './Stories/StoriesBar.js';
import Upload from "./Upload/Upload";
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePanel/RightSide';

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
                        <LeftSide />
                    </Grid>

                    {/* Middle */}
                    <Grid className="middleContainer">
                        <StoriesBar />
                        <Upload />
                        <PostContainer />
                    </Grid>

                    {/* Right */}
                    <Grid item xs={3}>
                        <RightSide />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Layout;