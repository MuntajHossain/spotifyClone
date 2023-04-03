import "./HorizontalMedia.css";

import React, { useEffect, useState } from "react";

function HorizontalMedia(props) {
    var [imgSrc, setImgSrc] = useState("https://picsum.photos/200");
    var [name, setName] = useState(" ");

    // console.log(props.img.name);
    // console.log(`rendering Vertical Media`)
    useEffect(() => {
        if (props.img.images[1] !== undefined) {
            setImgSrc(props.img.images[2].url);
        } else {
            console.log("in else");
            console.log(props.img.images);
        }
        setName(props.img.name);
        // console.log(props.img);
        // {props.img!==undefined ?setImgSrc(props.img.images[2].url): console.log(imgSrc)}
        // {props.img!==undefined ?setName(props.img.name): console.log(imgSrc)}
    }, [props]);
    // console.log(props.img);
    return (
        <div className="media media--vertical media--150 ">
            <div className="media__image ">
                <img
                    src={imgSrc}
                    alt=""
                />
            </div>
            <div className="media__body">
                <span className="media__body__title">{name}</span>
                <span className="media__body__subtitle">google</span>
            </div>
        </div>
    );
}

export default HorizontalMedia;
