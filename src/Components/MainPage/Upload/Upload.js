import React, { Component } from 'react'
import './Upload.css';
import { Paper, Avatar } from '@mui/material';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <div>
                <Paper className="upload__container" />
            </div>
         );
    }
}
 
export default Upload;