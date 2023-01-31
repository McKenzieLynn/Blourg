import React, { Component } from 'react'
import './Upload.css';
import { Paper, Avatar } from '@mui/material';
import pfp from "../../../Images/PFPs/pfp.png";

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
        <div>
            <Paper className="upload__container" >
                <div className="upload__top">
                    <div>
                        <Avatar src={pfp} className="upload__pfp" />
                    </div>
                    <div>
                        <input className="upload__box" placeholder="What's on your mind?" type="text" />
                    </div>
                </div>
                <div className="upload__bottom">

                </div>
            </Paper>
        </div>
         );
    }
}
 
export default Upload;