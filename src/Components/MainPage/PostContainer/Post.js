import { Avatar, Paper } from '@mui/material';
import React, { Component } from 'react';
import "./PostContainer.css";
import pfp from "../../../Images/PFPs/pfp.png";
import Poem from "../../../Images/rupipoem.jpg";
import Heart from "../../../Images/Icons/Heart.png";
import HeartButton from "../../../Images/Icons/HeartPlus.png";
import CommentButton from "../../../Images/Icons/CommentButton.png";
import ShareButton from "../../../Images/Icons/ShareButton.png";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    isImageAvaliable=(data)=>{
        return data==""?false:true
    }
    render() { 
        return ( 
            <div>
                <Paper className="post__container">
                    {/* Header */}
                    <div className="post__header">
                        <div className="post__header_img">
                            <Avatar src={pfp} className="post_img" />
                        </div>
                        <div className="post__header_text">
                            {this.props.object.user_name}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="post__description">
                        {this.props.object.description}
                    </div>

                    {/* Image */}
                    <div className="post__image">
                        {
                            this.isImageAvaliable(this.props.object.post_img) ? <img src={this.props.object.post_img} width="600px" /> : <span></span>
                        }
                    </div>

                    {/* Like Count */}
                    <div className="post_likeCountContainer">
                        <div className="post__like">
                            <img className="post__img" src={Heart} alt="like" />
                        </div>
                        <div className="post__likecount">
                            {this.props.object.like}
                        </div>
                    </div>

                    {/* Like share Box */}
                    <div className="post_likeShare">
                        <div className="post__tab">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={HeartButton} alt="heart"/>
                            </div>
                            <div className="post__tabtext">
                                Like
                            </div>
                        </div>

                        <div className="post__tab">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={CommentButton} alt="heart"/>
                            </div>
                            <div className="post__tabtext">
                                Comment
                            </div>
                        </div>

                        <div className="post__tab">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={ShareButton} alt="heart"/>
                            </div>
                            <div className="post__tabtext">
                                Share
                            </div>
                        </div>
                    </div>

                    {/* Comment Box */}
                    <div>
                        <div className="upload__comment">
                            <div>
                                <Avatar src={pfp} className="upload__pfp" />
                            </div>
                            <div>
                                <input className="upload__box" placeholder="Write a comment..." type="text" />
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
         );
    }
}
 
export default Post;