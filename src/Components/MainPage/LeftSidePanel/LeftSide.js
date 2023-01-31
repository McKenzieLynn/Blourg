import React, { Component } from 'react'
import "./LeftSide.css";
import ImageLayout from '../ImageLayout';
import pfp from "../../../Images/PFPs/pfp.png"
import HeartHand from "../../../Images/Icons/HeartHand.png";
import Friends from "../../../Images/Icons/Friends.png";
import Picture from "../../../Images/Icons/Picture.png";
import Clock from "../LeftSidePanel/Clock/Clock.js";
import Calendar from "../../../Images/Icons/Calendar.png";
import Community from "../../../Images/Icons/Community.png";
import Library from "../../../Images/Icons/Library.png";
import Graph from "../../../Images/Icons/Graph.png";
import Shopping from "../../../Images/Icons/Shopping.png";
import Settings from "../../../Images/Icons/Settings.png";

class LeftSide extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        data:[]
      }
  }

  getData=()=>{
    let jsondata = [
        {
          "image": pfp,
          "text":"Kenzie Lynn Hearnsberger",
        },
        {
          "image": HeartHand,
          "text":"Mental Health Advocacy",
        },
        {
          "image":Friends,
          "text":"Friends",
        }, 
        {
          "image":Picture,
          "text":"Memories",
        },
        {
          "image":Calendar,
          "text":"Events",
        },
        {
          "image":Library,
          "text":"Beep Boop",
        },
        {
          "image":Community,
          "text":"Community Hub",
        },
        {
          "image":Graph,
          "text":"Viewer Tracking",
        },
        {
          "image":Shopping,
          "text":"Stationary Supplies",
        },
        {
          "image":Settings,
          "text":"Settings",
        },
    ];
    this.setState({data : jsondata});
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Clock/>
      
        {
          this.state.data.map( (item) =>(
            <ImageLayout image={item.image} text={item.text} />
          ))
        }

      </div>
    );
  }
}

export default LeftSide