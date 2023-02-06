import React, { Component } from 'react';
import "./PostContainer.css";
import Post from './Post';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
         }
    }

    // Calls from backend ; Misc. json info for now
    getData=()=>{ 
        let json=[
            {
                "post_ID": 1,
                "user_ID": 12345678,
                "user_img": "url...",
                "user_name": "Kenzie Lynn Hearnsberger",
                "description": "One of my favorites for inspo!",
                "post_img": "url of the image",
                "like": 25
            },
            {
                "post_ID": 2,
                "user_ID": 12345678,
                "user_img": "",
                "user_name": "#1 Tester NA",
                "description": "Example desc. for testing purposes",
                "post_img": "",
                "like": 12
            }
        ]

        this.setState({data : json});
    }

    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item} />
                    ))
                }
            </div>
         );
    }
}
 
export default PostContainer;