import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API call - ", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="p-2 grid grid-flow-col">
      <div className="flex flex-col-reverse md:flex-row items-center col-span-1">
        <div className="flex justify-center items-center rounded-full hover:bg-slate-200 active:bg-slate-300 w-12 h-12">
          <img
            onClick={toggleMenuHandler}
            className="w-6 h-6 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt="Menu"
          />
        </div>
        <Link to="/">
          <img
            className="h-8 mx-6 cursor-pointer"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>
      <div className="flex justify-center col-span-10">
        <div className="relative w-4/6">
          <div className="flex">
            <input
              className="px-5 py-2 w-full rounded-l-full border border-gray-300"
              type="text"
              value={searchQuery}
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="p-1 w-16 border border-gray-300 bg-slate-100 rounded-r-full flex justify-center cursor-pointer hover:bg-slate-200 active:bg-slate-300">
              <img
                className="w-6"
                src="https://www.svgrepo.com/show/7109/search.svg"
                alt="search"
              />
            </button>
          </div>
          {showSuggestions ? (
            <div className="absolute w-[32.5rem] left-0 right-0 top-full bg-white shadow-md rounded-xl z-10">
              <ul className="p-2">
                {suggestions.map((s) => (
                  <li
                    onMouseDown={() => {
                      setSearchQuery(s);
                    }}
                    key={s}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      className="w-4 h-4"
                      src="https://www.svgrepo.com/show/7109/search.svg"
                      alt="search"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="max-w-28 p-2 text-end rounded-full border border-slate-300 max-h-28 col-span-1 flex flex-col md:flex-row justify-evenly items-center cursor-pointer hover:bg-blue-100 active:bg-slate-300">
          <img
            className="w-7 h-7"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="user"
          />
          <span className="text-blue-700 font-medium">Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Head;
