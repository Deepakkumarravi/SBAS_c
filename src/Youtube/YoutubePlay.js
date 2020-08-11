import React, { Component } from 'react'
import YouTube from 'react-youtube';
import '../Youtube/Youtube.css'

export default class YoutubePlay extends Component {
    render() {
        return (
            <div className = "youtube-container">
                <div className = "youtube-header" >Manufacure Unit and Outlet Reviewed by Youtuber</div>
                <YouTube
                    ref={player => {this.player = player}}
                    id = {"youtubePlayer"}
                    opts={{ controls: false, quality: '360p' }}
                    videoId={"rrskbETCaDQ"}
                    className={"youtube-style"}
                    onEnd = {() => this.player.seekTo(0)}
                />
            </div>
        )
    }
}
