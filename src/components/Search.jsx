"use client";

import { React, useEffect, useState } from "react";
import Image from "next/image";
import search from "../../public/assets/search.svg";
import Users from "./Users";
import axios from "axios";

const Search = ({ changeTheme, theme }) => {
  const [searchInput, setSearchInput] = useState();
  const [username, setUsername] = useState({});
  const [noResults, setNoResults] = useState(false);

  console.log("no results", noResults);

  useEffect(() => {
    if (!username) {
      getUser("octocat");
    }
  }, []);

  const getUser = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        // if (res.status === 200) {
          setUsername(res.data);
          setNoResults(false)
        // } else {
        //   getUser("octocat");
        //   setNoResults(true);
        // }

        console.log("status", res);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setNoResults(true);
          // getUser("octocat");
        }
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    getUser(searchInput);
  };

  return (
    <>
      <div
        className={`lg:mx-auto mx-6 lg:w-[730px] md:w-[573px] md:mx-auto flex flex-row justify-between bg-white mt-9 py-3 px-[10px] rounded-[15px] dark:bg-searchDark ${
          theme === "light" ? "searchbox" : ""
        }`}
      >
        <div className="flex flex-row lg:gap-6 gap-2 items-center">
          <div className="lg:pl-6 pl-0">
            <Image src={search} alt="search icon" width="auto" height="auto" />
          </div>
          <div className="lg:w-72 w-52 lg:flex lg:justify-between gap-8">
            <input
              className="w-full placeholder-navy outline-none text-navy dark:bg-searchDark dark:placeholder-white dark:text-white text-[13px] lg:text-lg lg:pr-4"
              placeholder="Search Github username..."
              onChange={handleChange}
              value={searchInput}
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          {noResults ? (
            <p className="hidden lg:block md:block text-red font-bold text-[15px] items-center">
              No Results
            </p>
          ) : null}

          <button
            className=" bg-blue hover:bg-btnHover px-6 py-4 rounded-[10px] text-white cursor-pointer lg:text-base text-[14px] font-bold"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
      </div>
      <Users username={username} changeTheme={changeTheme} theme={theme} />
    </>
  );
};

export default Search;
