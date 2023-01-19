import React, { Component } from 'react'
import "./LeftSide.css";
import ImageLayout from '../ImageLayout';

class LeftSide extends Component {
  constructor(props) {
      super(props);
      this.state = { }
  }
  render() {
    return (
      <div>
          <ImageLayout image="" text=""/>
          <ImageLayout />
          <ImageLayout />
          <ImageLayout />
          <ImageLayout />
          <ImageLayout />
      </div>
    );
  }
}

export default LeftSide