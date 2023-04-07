import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { tokenContext } from "../App";
import HorizontalMedia from "./HorizontalMedia";
import "./MediaHolder.css";
import useSpotifyData from "./useSpotifyData";

function MediaHolder(props) {
    let access_token = useContext(tokenContext);
    const [singers, setSingers] = useState([]);
    console.log(props.data);
    const [isBusy, myData, setUseData] = useSpotifyData(access_token);

    useEffect(() => {
        // console.log("in use effect");
        // console.log(access_token);
        if (props.data === undefined) {
            console.log("props data not sent");

            setUseData(
                "https://api.spotify.com/v1/search?q=lata mangeskar&type=artist "
            );
        } else {
            console.log("props data has been sent");
            setSingers(props.data);
        }
    }, [props.data, access_token, setUseData]);

    useEffect(() => {
        console.log(myData);
        if (myData) {
            setSingers(myData.artists.items);
        }
    }, [myData]);

    const MediaCards = singers.map((item) => {
        // console.log(item.images);
        return (
            <HorizontalMedia
                img={item}
                key={item.id}
            />
        );
    });
    // console.log(MediaCards);
    // console.log("element is being rendered");
    return (
        <div className="media-list">
            <div className="media-list__title">
                <span> {props.name}</span>
            </div>
            <div className="media-holder">{MediaCards}</div>
        </div>
    );
}

export default MediaHolder;
