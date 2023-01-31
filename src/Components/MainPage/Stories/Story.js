import React, { Component } from 'react';
import "./StoriesBar";
import { Paper } from '@mui/material';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Paper className="stories" />
            </div>
        );
    }
}
 
export default Story;