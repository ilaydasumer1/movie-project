import React from "react";
import { Link } from "react-router-dom";
import headerphoto from "../assets/headerphoto.png";

function Header() {
  return (
    <div className="header-container">
      <div
        className="header-background"
        style={{ backgroundImage: `url(${headerphoto})` }}
      >
        <div className="header-content">
          <div className="header-name-and-list">
            <div className="header-name">
              <span>
                <>
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </g>
                  </svg>
                </>
              </span>
              <p>Moviesumer</p>
            </div>
            <div>
              <ul className="header-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
                <li>
                  <Link to="/genre">Genre</Link>
                </li>
                <li>
                  <Link to="/mylist">My List</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-text">
            <h1 className="text-1">FİND MOVİES</h1>
            <h1 className="text-2">THE SHOWS AND MORE</h1>
            <p>
              Offers a wide variety of movies and TV shows for streaming. It
              also offers a subscription model
            </p>
            <p>
              Another popular streaming service with a diverse selection of
              movies It also offers a subscription model
            </p>
            <p>
              TV shows, and original content. It also offers a subscription
              model It also offers a subscription model
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
