import React from "react";
import "./Player.css";

function Player() {
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
                <span className="track-title">Hello Google</span>
                <span className="track-singer">muntaj</span>
            </div>
            <span className="material-symbols-outlined">speaker</span>
            <span className="material-symbols-outlined">play_arrow</span>
        </div>
    );
}

export default Player;
