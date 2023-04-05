import React from "react";
import { useState } from "react";
import Navigation from "../component/Navigation";
import Player from "../component/Player";
// import fs from "fs";

function Library(props) {
    console.log(props.clickHandler);
    const [song, setSong] = useState("Kahani Suno");
    const songs = [
        { name: "Kahani Suno", key: "1" },
        { name: "O Bedardi", key: "2" },
        { name: "Dil Galti Kar Baitha Hai", key: "3" },
        { name: "Maan Meri Jaan", key: "4" },
        { name: "Tere Pyar Mein", key: "5" },
    ];
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef();
    const handleClick = () => {
        setIsPlaying((prev) => !prev);
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };
    const renderedSong = songs.map((item) => {
        return (
            <div
                className="song"
                key={item.key}
                onClick={() => {
                    console.log(item.name);
                    // props.clickHandler(item.name);
                    setSong(item.name);
                }}>
                {item.name}
            </div>
        );
    });
    return (
        <>
            <div className="multiple-content-holder">
                <div className="container-area">
                    <audio
                        src={`../../Assets/Audio/${song}.mp3`}
                        ref={audioRef}
                    />
                    {/* <button onClick={handleClick}>play</button> */}
                    {renderedSong}
                </div>
            </div>
            <Player
                audioRef={audioRef}
                name={song}
                local={true}
            />
            <Navigation />
        </>
    );
}

export default Library;
