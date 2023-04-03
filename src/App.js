import React, { useEffect, useState } from "react";
// import "dotenv";
import "./App.css";
import { Switch, Router } from "react-router-dom";
// import HorizontalMedia from './component/HorizontalMedia';
import MediaHolder from "./component/MediaHolder";
import Navigation from "./component/Navigation";
import Player from "./component/Player";
import VerticalMedia from "./component/VerticalMedia";
import VerticalMediaHolder from "./component/VerticalMediaHolder";
import Home from "./Pages/Home";
import SearchBar from "./component/SearchBar";

export const tokenContext = React.createContext();

function App() {
    const client_id = "a128345ed4b14805858932b6f9f3a59a";
    const client_secret = "9e3ef8e17d5f42febe8a908efed1624a";
    var [access_token, setAccess_token] = useState();

    var option = {
        method: "POST",

        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
            "grant_type=client_credentials&client_id=" +
            client_id +
            "&client_secret=" +
            client_secret,
        json: true,
    };

    useEffect(() => {
        fetch("https://accounts.spotify.com/api/token", option)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setAccess_token(json.access_token);
            });
    }, []);

    return (
        <tokenContext.Provider value={access_token}>
            <div className="App">
                <SearchBar />
                <Navigation />
                <MediaHolder name="Famous Singers" />
                <VerticalMediaHolder name="Latest Songs" />
                <Player />
            </div>
        </tokenContext.Provider>
    );
}

export default App;
