import React, { useEffect } from "react";
import { useState } from "react";
import MediaHolder from "../component/MediaHolder";
import Navigation from "../component/Navigation";
import Player from "../component/Player";
import SearchBar from "../component/SearchBar";
import "./util.css";

function Search() {
    const [searchData, setSearchData] = useState();

    useEffect(() => {
        console.log(searchData);
    }, [searchData]);
    return (
        <>
            <SearchBar handleData={setSearchData} />
            <div className="multiple-content-holder">
                {searchData && (
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
                )}
            </div>
            <div className="control-holders">
                <Player />
                <Navigation />
            </div>
        </>
    );
}

export default Search;
