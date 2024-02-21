import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
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
  );
}

export default Header



