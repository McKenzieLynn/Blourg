import React, { Component } from 'react';
import './RightSide.css';
import ImageLayout from '../ImageLayout';
import pfp from "../../../Images/PFPs/pfp.png";
import rex from "../../../Images/PFPs/rex.jpg";
import Will from "../../../Images/PFPs/will.jpg";
import Ryan from "../../../Images/PFPs/ryan.jpg";
import Amanda from "../../../Images/PFPs/amanda.jpg";
import Colin from "../../../Images/PFPs/colin.jpg";
import An from "../../../Images/PFPs/an.jpg";
import Bria from "../../../Images/PFPs/bria.png";
import Ty from "../../../Images/PFPs/ty.png";
import Austin from "../../../Images/PFPs/austin.jpg";
import Kristian from "../../../Images/PFPs/kristian.jpg";

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : []
        }
    }

    getData=()=>{
        let jsondata = [
            {
              "image": pfp,
              "text":"Kenzie Lynn Hearnsberger",
            },
            {
              "image": Ryan,
              "text":"Ryan Talbot",
            },
            {
              "image": Will,
              "text":"Will Montagnino",
            }, 
            {
              "image": rex,
              "text":"Rexhep Rexhepi",
            },
            {
              "image": Amanda,
              "text":"Amanda Wade",
            },
            {
              "image": Colin,
              "text":"Colin Rodney",
            },
            {
              "image": An,
              "text":"An Nguyen",
            },
            {
              "image": Bria,
              "text":"Bria Whitehead",
            },
            {
              "image": Ty,
              "text":"Brittany Jeffery",
            },
            {
              "image": Austin,
              "text":"Austin Ledet",
            },
            {
              "image": Kristian,
              "text" : "Kristian Leopold",
            },
        ];
        this.setState({data : jsondata});
      }

      componentDidMount() {
        this.getData();
      }
      
    render() { 
        return ( 
            <div className="rightside__container">
                <div className="rightside__header">
                    Contacts
                </div>
                <div className="rightside__content">
                    {
                        this.state.data.map( (item) =>(
                            <ImageLayout image={item.image} text={item.text} />
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
export default RightSide;