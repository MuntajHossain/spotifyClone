import React from "react";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Navigation from "./component/Navigation";
// import Player from "./component/Player";
// import Home from "./Pages/Home";
// import Search from "./Pages/Search";
// import Library from "./Pages/Library";
// import Login from "./Pages/Login";
import Template from "./Pages/Template";
// import Login from "./Pages/Login";

export const tokenContext = React.createContext();
export const currentMusicContext = React.createContext();

function App() {
    console.log("in app");
    // const client_id = "a128345ed4b14805858932b6f9f3a59a";
    // const client_secret = "9e3ef8e17d5f42febe8a908efed1624a";
    // var [access_token, setAccess_token] = useState();
    // var [currentMusic, setCurrentMusic] = useState("");

    // useEffect(() => {
    //     const getAccessToken = async () => {
    //         var option = {
    //             method: "POST",

    //             headers: {
    //                 "Content-Type": "application/x-www-form-urlencoded",
    //             },
    //             body:
    //                 "grant_type=client_credentials&client_id=" +
    //                 client_id +
    //                 "&client_secret=" +
    //                 client_secret,
    //             json: true,
    //         };

    //         const response = await fetch(
    //             "https://accounts.spotify.com/api/token",
    //             option
    //         );
    //         const data = await response.json();
    //         setAccess_token(data.access_token);
    //     };
    //     getAccessToken();
    // }, []);
    // useEffect(() => {
    //     console.log(access_token);
    // }, [access_token]);

    return <Template />;
}

export default App;
