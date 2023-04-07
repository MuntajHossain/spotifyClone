import React, { useState } from "react";
import "./Player.css";

function Player(props) {
    console.log("rendering Player");
    console.log(props.audioRef);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleClick = () => {
        setIsPlaying((prev) => !prev);
        if (isPlaying) {
            props.audioRef.current.pause();
        } else {
            props.audioRef.current.play();
        }
    };
    return (
        <div className="player">
            <div className="img-container">
                <img
                    src={`https://picsum.photos/200`}
                    alt="Track Thumbnail"
                    className="thumbnail"
                />
            </div>
            <div className="track-info">
                <span className="track-title">{props.name}</span>
                <span className="track-singer">
                    {props.local ? "local" : "online"}
                </span>
            </div>
            <span className="material-symbols-outlined">speaker</span>
            <span
                className="material-symbols-outlined play-button"
                onClick={handleClick}>
                {isPlaying ? "play_circle" : "pause_circle"}
            </span>
        </div>
    );
}

export default React.memo(Player);
