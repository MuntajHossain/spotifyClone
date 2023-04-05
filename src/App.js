import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import Player from "./component/Player";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Library from "./Pages/Library";
import Login from "./Pages/Login";
// import Login from "./Pages/Login";

export const tokenContext = React.createContext();
export const currentMusicContext = React.createContext();

function App() {
    const client_id = "a128345ed4b14805858932b6f9f3a59a";
    const client_secret = "9e3ef8e17d5f42febe8a908efed1624a";
    var [access_token, setAccess_token] = useState();
    var [currentMusic, setCurrentMusic] = useState("");

    useEffect(() => {
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
        fetch("https://accounts.spotify.com/api/token", option)
            .then((response) => response.json())
            .then((json) => {
                console.log(json.access_token);
                setAccess_token(json.access_token);
            });
    }, []);

    return (
        <tokenContext.Provider value={access_token}>
            <currentMusicContext.Provider value={currentMusic}>
                <div className="App">
                    <Routes>
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="search"
                            element={<Search />}
                        />
                        <Route
                            path="library"
                            element={<Library />}
                        />
                    </Routes>

                    {/* <Login /> */}
                </div>
            </currentMusicContext.Provider>
        </tokenContext.Provider>
    );
}

export default App;
