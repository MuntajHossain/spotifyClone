import React from "react";
import MediaHolder from "../component/MediaHolder";
import Navigation from "../component/Navigation";
import Player from "../component/Player";
import VerticalMediaHolder from "../component/VerticalMediaHolder";

function Home() {
    return (
        <>
            <div className="multiple-content-holder">
                <MediaHolder name="Famous Singers" />
                <VerticalMediaHolder name="Latest Songs" />
            </div>
            <div className="control-holders">
                <Player />
                <Navigation />
            </div>
        </>
    );
}

export default Home;
