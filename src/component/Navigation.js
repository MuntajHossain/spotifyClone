import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
    console.log("rendering Navigation");
    return (
        <nav className="main-nav">
            <Link
                to={"/"}
                className="main-link">
                <div
                    className="nav-item"
                    onClick={() => {
                        props.modeHandler("home");
                    }}>
                    <span className="material-symbols-outlined">home</span>
                    <span>Home</span>
                </div>
            </Link>
            <Link
                to={"/search"}
                className="main-link">
                <div
                    className="nav-item"
                    onClick={() => {
                        props.modeHandler("search");
                    }}>
                    <span className="material-symbols-outlined">search</span>
                    <span className="abc">Search</span>
                </div>
            </Link>
            <Link
                to={"/library"}
                className="main-link">
                <div
                    className="nav-item"
                    onClick={() => {
                        props.modeHandler("library");
                    }}>
                    <span className="material-symbols-outlined">
                        library_music
                    </span>
                    <span>Library</span>
                </div>
            </Link>
            <div className="nav-item">
                <span className="fa-brands fa-spotify fa-2x"></span>
                <span>Premium</span>
            </div>
        </nav>
    );
}

export default React.memo(Navigation);
