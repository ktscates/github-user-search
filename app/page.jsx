"use client";

import { React, useState } from "react";
import Search from "../components/search/Search";
import Image from "next/image";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <main className=" bg-backgroundLight dark:bg-backgroundDark flex flex-col min-h-screen pt-[144px]">
      <div className="mx-auto w-[45%] text-title flex flex-row justify-between">
        <h1 className="font-bold text-[26px] leading-[39px] dark:text-white">
          devfinder
        </h1>
        <div className="flex gap-4 justify-center items-center">
          <h1 className="text-modes text-[13px] font-bold leading[19px] tracking-[2.5px] dark:text-white mt-2">
            {theme === "dark" ? "LIGHT" : "DARK"}
          </h1>

          <Image
            className="cursor-pointer"
            src={theme === "dark" ? sun : moon}
            alt="moon"
            width={20}
            height={20}
            onClick={changeTheme}
          />
        </div>
      </div>
      <Search changeTheme={changeTheme} theme={theme} />
      {/* <Users /> */}
    </main>
  );
}
