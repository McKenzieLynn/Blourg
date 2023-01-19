import React, { Component } from 'react'
import "./LeftSide.css";
import ImageLayout from '../ImageLayout';
import HeartHand from "../../../Images/Icons/HeartHand.png";
import Friends from "../../../Images/Icons/Friends.png";
import Picture from "../../../Images/Icons/Picture.png";

class LeftSide extends Component {
  constructor(props) {
      super(props);
      this.state = { }
  }
  render() {
    return (
      <div>
          <ImageLayout image={HeartHand} text="Mental Health Advocacy"/>
          <ImageLayout image={Friends} text="Friends"/>
          <ImageLayout image={Picture} text="Memories"/>
      </div>
    );
  }
}

export default LeftSide