import React, { Component } from 'react';
import "./StatusBar";
import { Paper } from '@mui/material';

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Paper className="statusbar__status" />
            </div>
        );
    }
}
 
export default Status;