import React, { Component } from 'react'
import './Upload.css';
import { Paper, Avatar } from '@mui/material';
import pfp from "../../../Images/PFPs/pfp.png";
import Pencil from "../../../Images/Icons/Pencil.png";
import PhotoAdd from "../../../Images/Icons/PhotoAdd.png";
import Mood from "../../../Images/Icons/Mood.png";

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
                    <div classname="upload__tabs">
                        <img src={Pencil} width="35px" alt="Writing" />
                        {/* <div className="upload__text">Writing</div> */}
                    </div>
                    <div classname="upload__tabs">
                        <img src={PhotoAdd} width="35px" alt="Photoadd"/>
                        {/* <div className="upload__text">Photo</div> */}
                    </div>
                    <div classname="upload__tabs">
                        <img src={Mood} width="35px" alt="Mood"/>
                        {/* <div className="upload__text">Mood</div> */}
                    </div>
                </div>
            </Paper>
        </div>
         );
    }
}
 
export default Upload;