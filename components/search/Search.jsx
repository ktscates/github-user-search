"use client";

import { React, useEffect, useState } from "react";
import search from "../../assets/search.png";
import Image from "next/image";
import Users from "../users/Users";
import axios from "axios";

const Search = ({changeTheme, theme}) => {
  const [searchInput, setSearchInput] = useState();
  const [username, setUsername] = useState({});

  useEffect(() => {
    getUser("octocat")
  }, [])

  const getUser = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => setUsername(res.data))
      .catch((error) => console.log("there is an error", error));
  };


  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    getUser(searchInput)
  };

  return (
    <>
      <div className={`mx-auto w-[45%] flex flex-row justify-between bg-white mt-9 py-3 px-[10px] rounded-[15px] dark:bg-searchDark ${theme === 'light' ? 'searchbox' : ''}`}>
        <div className="flex flex-row gap-6 items-center">
          <div className="pl-6">
            <Image src={search} alt="search icon" width="auto" height="auto" />
          </div>
          <div className="w-72">
            <input
              className="w-full placeholder-navy outline-none text-navy dark:bg-searchDark dark:placeholder-white dark:text-white text-lg pr-4"
              placeholder="Search Github username..."
              onChange={handleChange}
              value={searchInput}
              type="text"
            />
          </div>
        </div>
        <button
          className=" bg-blue px-6 py-4 rounded-[10px] text-white cursor-pointer text-base font-bold"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      <Users username={username} changeTheme={changeTheme} theme={theme} />
    </>
  );
};

export default Search;
