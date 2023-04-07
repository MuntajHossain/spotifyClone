import React from "react";
import Navigation from "../component/Navigation";
import Player from "../component/Player";
import SearchBar from "../component/SearchBar";
import Content from "../component/Content";
import { useState } from "react";
import { useEffect } from "react";
import useSpotifyData from "../component/useSpotifyData";
import "./util.css";

export const tokenContext = React.createContext();

const Template = () => {
    console.log("template is being rendered");
    const client_id = "a128345ed4b14805858932b6f9f3a59a";
    const client_secret = "9e3ef8e17d5f42febe8a908efed1624a";
    const songs = [
        { name: "Kahani Suno", key: "1" },
        { name: "O Bedardi", key: "2" },
        { name: "Dil Galti Kar Baitha Hai", key: "3" },
        { name: "Maan Meri Jaan", key: "4" },
        { name: "Tere Pyar Mein", key: "5" },
    ];
    const [song, setSong] = useState("Kahani Suno");
    const audioRef = React.useRef();

    const [access_token, setAccess_token] = useState();

    const [mode, setMode] = useState("");

    const [homeData, setHomeData] = useState();
    const [lastSearchData, setLastSearchData] = useState();

    var param = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + access_token,
        },
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

    const fetchData = async (url) => {
        const response = await fetch(url, param);
        const resData = await response.json();
        // console.log(access_token);
        // console.log(url);
        // console.log(resData);
        return resData;
    };

    useEffect(() => {
        //Get Access Token
        const getAccessToken = async () => {
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

            const response = await fetch(
                "https://accounts.spotify.com/api/token",
                option
            );
            const data = await response.json();
            setAccess_token(data.access_token);
            setMode("home");
        };
        getAccessToken();
    }, []);

    useEffect(() => {
        if (mode === "home") {
            //Get the data for horizontal mode
            const data = [];
            var tempData;
            fetchData(
                "https://api.spotify.com/v1/search?q=lata mangeskar&type=artist "
            ).then((resData) => {
                data.push({
                    name: "Famous Singers",
                    mode: "horizontal",
                    data: resData,
                });
            });

            fetchData("https://api.spotify.com/v1/browse/new-releases").then(
                (resData) => {
                    data.push({
                        name: "Recent Albums",
                        mode: "vertical",
                        data: resData,
                    });
                    setHomeData(data);
                }
            );

            console.log(data);
        }
    }, [mode]);

    const searchDataHandler = (data) => {
        console.log("in searchDataHandler");
        console.log(data);
        const varData = [];
        varData.push({
            name: "Artists",
            mode: "horizontal",
            data: data.artists,
        });
        varData.push({
            name: "Albums",
            mode: "horizontal",
            data: data.albums,
        });
        varData.push({
            name: "Playlists",
            mode: "horizontal",
            data: data.playlists,
        });
        setLastSearchData(varData);
    };

    return (
        <tokenContext.Provider value={access_token}>
            <>
                <audio
                    src={`../../Assets/Audio/${song}.mp3`}
                    ref={audioRef}
                />
                <div className="app-body">
                    {mode === "search" && (
                        <SearchBar
                            searchDataHandler={searchDataHandler}
                            access_token={access_token}
                        />
                    )}

                    {mode === "home" && (
                        <div className="multiple-content-holder">
                            <Content
                                data={homeData}
                                access_token={access_token}
                            />
                        </div>
                    )}

                    {mode === "search" && (
                        <div className="multiple-content-holder">
                            <Content
                                data={lastSearchData}
                                access_token={access_token}
                            />
                        </div>
                    )}
                    {mode === "library" && (
                        <div className="multiple-content-holder">
                            <div className="container-area">{renderedSong}</div>
                        </div>
                    )}

                    <div className="control-holders">
                        <Player
                            audioRef={audioRef}
                            name={song}
                            local={true}
                        />
                        <Navigation modeHandler={setMode} />
                    </div>
                </div>
            </>
        </tokenContext.Provider>
    );
};

export default Template;
