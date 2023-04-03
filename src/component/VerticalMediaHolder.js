import React from "react";
import { useEffect, useContext } from "react";
import VerticalMedia from "./VerticalMedia";
import "./VerticalMediaHolder.css";
import { tokenContext } from "../App";
import { useState } from "react";

function VerticalMediaHolder(props) {
    const access_token = useContext(tokenContext);

    const [data, setData] = useState();
    const [showMore, setShowMore] = useState(false);
    const [partialData, setPertialData] = useState([]);
    let datas;

    useEffect(() => {
        if (access_token !== undefined) {
            // console.log(access_token);
            var param = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + access_token,
                },
            };
            fetch("https://api.spotify.com/v1/browse/new-releases", param)
                .then((response) => response.json())
                .then((data) => {
                    setData(data.albums.items);
                    console.log(data.albums.items);
                    // console.log(data.albums.items[0]);
                    // setImgSrc(data.albums.items[0].images[2].url)
                });
        }
    }, [access_token]);
    useEffect(() => {
        if (data) {
            if (showMore === false) {
                datas = data.slice(0, 6);
            } else {
                datas = data;
            }
            setPertialData(
                datas.map((item) => {
                    // console.log(item);
                    return (
                        <VerticalMedia
                            img={item}
                            key={item.id}
                        />
                    );
                })
            );
        }
    }, [data, showMore]);

    const showMoreHandler = () => {
        setShowMore((prev) => !prev);
    };
    return (
        <div className="vertical-holder-wrapper">
            <div className="verticle-holder-title">{props.name}</div>
            <div className="vertical-holder">{partialData}</div>
            <div className="show-more-less">
                <span onClick={showMoreHandler}>
                    {showMore === false ? "Show More" : "Show Less"}
                </span>
            </div>
        </div>
    );
}

export default VerticalMediaHolder;
