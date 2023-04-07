import React, { useEffect } from "react";
import { useContext } from "react";
import { tokenContext } from "../App";
import "./SearchBar.css";

function SearchBar({ searchDataHandler, access_token }) {
    const inputRef = React.createRef();
    // const access_token = useContext(tokenContext);
    // console.log(props.handleData);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    useEffect(() => {
        console.log(access_token);
    }, [access_token]);

    const clickHandler = () => {
        const searchQuery = inputRef.current.value;
        console.log(searchQuery);

        var param = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token,
            },
        };
        fetch(
            `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist,album,playlist`,
            param
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(access_token);
                if (data) {
                    searchDataHandler(data);
                }
            });
    };
    return (
        <div className="search-bar">
            <input
                placeholder="Search songs,albums,artists here..."
                className="search-input"
                ref={inputRef}></input>
            <button
                className="search-button"
                onClick={clickHandler}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
