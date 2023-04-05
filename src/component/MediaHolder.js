import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { tokenContext } from "../App";
import HorizontalMedia from "./HorizontalMedia";
import "./MediaHolder.css";

function MediaHolder(props) {
    let access_token = useContext(tokenContext);
    const [singers, setSingers] = useState([]);
    console.log(props.data);

    useEffect(() => {
        // console.log("in use effect");
        // console.log(access_token);
        if (props.data === undefined) {
            console.log("props data not sent");
            var param = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + access_token,
                },
            };
            fetch(
                "https://api.spotify.com/v1/search?q=lata mangeskar&type=artist ",
                param
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log(access_token);
                    if (data.artists.items) {
                        setSingers(data.artists.items);
                    }
                });
        } else {
            console.log("props data has been sent");
            setSingers(props.data);
        }
    }, [props.data, access_token]);
    useEffect(() => {
        console.log(singers);
    }, [singers]);

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
            <div className="media-holder">
                {MediaCards}
                {/* <HorizontalMedia />
                <HorizontalMedia />
                <HorizontalMedia />
                <HorizontalMedia />
                <HorizontalMedia />
                <HorizontalMedia />
                <HorizontalMedia /> */}
            </div>
        </div>
    );
}

export default MediaHolder;
