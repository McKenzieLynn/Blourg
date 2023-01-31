import React, { Component } from 'react';
import Story from './Story';
import './StoriesBar.css';

class StoriesBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="stories__container">
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </div>
        );
    }
}
 
export default StoriesBar;