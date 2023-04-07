import React, { useState } from "react";
import { useEffect } from "react";
import HorizontalMedia from "./HorizontalMedia";
import MediaHolder from "./MediaHolder";
import VerticalMediaHolder from "./VerticalMediaHolder";

const ContentHolder = ({ data, access_token }) => {
    console.log(access_token);
    const [renderedElement, setRenderedElement] = useState();

    useEffect(() => {
        if (data) {
            const abc = data.map((element) => {
                console.log(element);
                if (element.mode === "horizontal") {
                    return (
                        <MediaHolder
                            name={element.name}
                            data={element.data.items}
                        />
                    );
                } else {
                    console.log("in else");
                    return (
                        <VerticalMediaHolder
                            name={element.name}
                            // data={element.data.items}
                            access_token={access_token}
                        />
                    );
                }
            });
            console.log(abc);
            setRenderedElement(abc);
        }
    }, [data]);

    return (
        <>
            {renderedElement}
            {/* {searchData && (
                    <MediaHolder
                        name="Artists"
                        data={searchData.albums.items}
                    />
                )}
                {searchData && (
                    <MediaHolder
                        name="Albums"
                        data={searchData.artists.items}
                    />
                )}
                {searchData && (
                    <MediaHolder
                        name="PlayList"
                        data={searchData.playlists.items}
                    />
                )} */}
        </>
    );
};

export default ContentHolder;
