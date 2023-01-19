import React, { Component } from "react";
import "./MainPage.css";
import { Avatar } from "@mui/material";
import PFP from "../../Images/PFPs/pfp.png";

class ImageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="imagelayout__container">
                <div className="imagelayout__imglay">     {/* Picture Section */}
                    <Avatar classname="imagelayout__img" src={PFP} alt="PFP" />
                </div>
                <div className="imagelayout__text">      {/* Text section */}
                    {this.props.text}
                </div>
            </div>
        );
    }
}
  
  export default ImageLayout;