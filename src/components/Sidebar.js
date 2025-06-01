import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-4 w-48">
      <ul>
        <li className="cursor-pointer"><Link to="/">Home</Link></li>
        <li className="cursor-pointer">Shorts</li>
        <li className="cursor-pointer">Videos</li>
        <li className="cursor-pointer">Live</li>
      </ul>
      <h1 className="font-bold pt-5 cursor-pointer">Subscriptions</h1>
      <ul className="pt-2">
        <li className="cursor-pointer">Music</li>
        <li className="cursor-pointer">Sports</li>
        <li className="cursor-pointer">Gaming</li>
        <li className="cursor-pointer">Music</li>
      </ul>
      <h1 className="font-bold pt-5 cursor-pointer">Watch Later</h1>
      <ul className="pt-2">
        <li className="cursor-pointer">Music</li>
        <li className="cursor-pointer">Sports</li>
        <li className="cursor-pointer">Gaming</li>
        <li className="cursor-pointer">Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
