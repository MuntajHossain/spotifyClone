import React, { useEffect } from "react";
import "./SearchBar.css";

function SearchBar() {
    const inputRef = React.createRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const clickHandler = () => {
        console.log("hello");
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
