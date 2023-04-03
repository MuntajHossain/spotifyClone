import React from "react";
import "./Navigation.css";

function Navigation() {
    return (
        <nav>
            <div className="nav-item">
                <span className="material-symbols-outlined">home</span>
                <span>Home</span>
            </div>
            <div className="nav-item">
                <span className="material-symbols-outlined">search</span>
                <span>Search</span>
            </div>
            <div className="nav-item">
                <span className="material-symbols-outlined">library_music</span>
                <span>Library</span>
            </div>
            <div className="nav-item">
                <span className="fa-brands fa-spotify fa-2x"></span>
                <span>Premium</span>
            </div>
        </nav>
    );
}

export default Navigation;
