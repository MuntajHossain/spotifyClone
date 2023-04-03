import React, { useState } from "react";
import { useEffect } from "react";
// import { Buffer } from "buffer";
// import { request } from "https";

import "./VerticalMedia.css";

function VerticalMedia(props) {
    var [imgSrc, setImgSrc] = useState("https://picsum.photos/200");
    var [name, setName] = useState(" ");

    // console.log(props.img.name);
    // console.log(`rendering Vertical Media`)
    useEffect(() => {
        setImgSrc(props.img.images[1].url);
        setName(props.img.name);
        // console.log(props.img);
        // {props.img!==undefined ?setImgSrc(props.img.images[2].url): console.log(imgSrc)}
        // {props.img!==undefined ?setName(props.img.name): console.log(imgSrc)}
    }, [props]);

    return (
        <div className="horizontal-media media-width--350">
            <div className="horizontal-media__image ">
                <img
                    src={imgSrc}
                    alt=""
                />
            </div>
            <div className="horizontal-media__body">
                <span className="horizontal-media__body__title">{name}</span>
                {/* <span className="horizontal-media__body__subtitle">google</span> */}
            </div>
        </div>
    );
}

export default VerticalMedia;
