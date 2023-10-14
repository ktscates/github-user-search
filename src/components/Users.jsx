"use client";

import React from "react";
import Image from "next/image";
import location from "../../public/assets/location.svg";
import link from "../../public/assets/link.svg";
import building from "../../public/assets/building.svg";
import twitter from "../../public/assets/twitter.svg";
import linkw from "../../public/assets/linkw.svg";
import buildingw from "../../public/assets/buildingw.svg";
import locationw from "../../public/assets/locationw.svg";
import twitterw from "../../public/assets/twitterw.svg";
import Moment from "moment";

const Users = ({ username, theme }) => {

  return (
    <div
      className={`lg:mx-auto lg:w-[730px] md:w-[573px] md:mx-auto mx-6 bg-white dark:bg-searchDark mt-6 lg:p-12 p-6 rounded-[15px] ${
        theme === "light" ? "searchbox" : ""
      } `}
    >
      <div className="flex justify-between lg:gap-[37px] md:gap-[41px] gap-[19.5px]">
        <div>
          <Image
            className="rounded-full"
            src={username?.avatar_url}
            alt="logo"
            width={100}
            height={100}
            priority={true}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex lg:flex-row md:flex-col flex-col justify-between items-baseline">
            <div>
              <h1 className="font-bold lg:leading-[39px] lg:text-[26px] leading-6 text-4 text-numbers dark:text-white">
                {username?.name}
              </h1>
              <h6 className=" font-normal lg:text-base lg:leading-6 text-[13px] leading-[19px] text-blue">
                @{username?.login}
              </h6>
            </div>
            <h4 className=" font-normal text-modes dark:text-white lg:leading-[22px] lg:text-[15px] text-[13px] leading-[19px] mt-[6px]">
              {"Joined " + Moment(username?.created_at).format("DD MMM YYYY")}
            </h4>
          </div>
          <h3 className="lg:block md:hidden hidden mt-5 font-normal leading-[25px] lg:text-[15px] text-[13px] text-navy dark:text-white opacity-75 mix-blend-normal">
            {username?.bio ? username?.bio : "This profile has no bio"}
          </h3>
          <div className="lg:flex md:hidden hidden flex-row justify-around py-3 rounded-[10px] mt-8 bg-backgroundLight dark:bg-infoDark dark:text-white">
            <div>
              <h6 className=" font-normal lg:text-[13px] text-[11px] lg:leading-[19px] leading-4 text-navy dark:text-white">
                Repos
              </h6>
              <h2 className=" text-numbers dark:text-white font-bold lg:text-[22px] text-[16px] lg:leading-8 leading-6 lg:text-left text-center">
                {username?.public_repos ? username?.public_repos : "0"}
              </h2>
            </div>
            <div>
              <h6 className=" font-normal lg:text-[13px] text-[11px] lg:leading-[19px] leading-4 text-navy dark:text-white">
                Followers
              </h6>
              <h2 className=" text-numbers font-bold lg:text-[22px] text-[16px] lg:leading-8 leading-6 lg:text-left text-center dark:text-white">
                {username?.followers ? username?.followers : "0"}
              </h2>
            </div>
            <div>
              <h6 className=" font-normal lg:text-[13px] text-[11px] lg:leading-[19px] leading-4 text-navy dark:text-white">
                Following
              </h6>
              <h2 className=" text-numbers font-bold lg:text-[22px] text-[16px] lg:leading-8 leading-6 lg:text-left text-center dark:text-white">
                {username?.following ? username?.following : "0"}
              </h2>
            </div>
          </div>
          <div className=" lg:flex md:hidden hidden flex-col justify-between lg:mt-[37px] mt-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 md:grid md:grid-cols-2 md:gap-6 flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <Image
                    src={theme === "dark" ? locationw : location}
                    alt="logo"
                    width={13}
                    height={20}
                  />
                </div>
                <h2
                  className={` lg:text-[15px] text-[13px] font-normal ${
                    username?.location
                      ? "text-navy dark:text-white"
                      : "text-navy text-opacity-50 dark:text-white dark:text-opacity-25"
                  } `}
                >
                  {username?.location ? username?.location : "Not Available"}
                </h2>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <Image
                    src={theme === "dark" ? twitterw : twitter}
                    alt="logo"
                    width={20}
                    height={16}
                  />
                </div>
                <h2
                  className={`lg:text-[15px] text-[13px] font-normal ${
                    username?.twitter_username
                      ? "text-navy dark:text-white"
                      : "text-navy text-opacity-50 dark:text-white dark:text-opacity-25"
                  } `}
                >
                  {username?.twitter_username
                    ? username?.twitter_username
                    : "Not Available"}
                </h2>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 md:grid md:grid-cols-2 md:gap-6 lg:mt-5 mt-4 flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <Image
                    src={theme === "dark" ? linkw : link}
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </div>
                <h2 className="text-navy lg:text-[15px] text-[13px] font-normal dark:text-white">
                  {username?.html_url}
                </h2>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <Image
                    src={theme === "dark" ? buildingw : building}
                    alt="logo"
                    width={20}
                    height={19}
                  />
                </div>
                <h2
                  className={`lg:text-[15px] text-[13px] font-normal ${
                    username?.company
                      ? "text-navy dark:text-white"
                      : "text-navy text-opacity-50 dark:text-white dark:text-opacity-25"
                  } `}
                >
                  {username?.company ? username?.company : "Not Available"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="lg:hidden md:block block mt-5 font-normal leading-[25px] lg:text-[15px] text-[13px] text-navy dark:text-white opacity-75 mix-blend-normal">
        {username?.bio ? username?.bio : "This profile has no bio"}
      </h3>
      <div className="lg:hidden flex flex-row justify-around py-3 rounded-[10px] mt-8 bg-backgroundLight dark:bg-infoDark dark:text-white">
        <div>
          <h6 className=" font-normal lg:text-[13px] text-[11px] lg:leading-[19px] leading-4 text-navy dark:text-white">
            Repos
          </h6>
          <h2 className=" text-numbers dark:text-white font-bold lg:text-[22px] text-[16px] lg:leading-8 leading-6 lg:text-left text-center">
            {username?.public_repos ? username?.public_repos : "0"}
          </h2>
        </div>
        <div>
          <h6 className=" font-normal lg:text-[13px] text-[11px] lg:leading-[19px] leading-4 text-navy dark:text-white">
            Followers
          </h6>
          <h2 className=" text-numbers font-bold lg:text-[22px] text-[16px] lg:leading-8 leading-6 lg:text-left text-center dark:text-white">
            {username?.followers ? username?.followers : "0"}
          </h2>
        </div>
        <div>
          <h6 className=" font-normal lg:text-[13px] text-[11px] lg:leading-[19px] leading-4 text-navy dark:text-white">
            Following
          </h6>
          <h2 className=" text-numbers font-bold lg:text-[22px] text-[16px] lg:leading-8 leading-6 lg:text-left text-center dark:text-white">
            {username?.following ? username?.following: "0"}
          </h2>
        </div>
      </div>
      <div className=" lg:hidden flex flex-col justify-between lg:mt-[37px] mt-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 md:grid md:grid-cols-2 md:gap-6 flex flex-col gap-4">
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Image
                src={theme === "dark" ? locationw : location}
                alt="logo"
                width={13}
                height={20}
              />
            </div>
            <h2
              className={` lg:text-[15px] text-[13px] font-normal ${
                username?.location
                  ? "text-navy dark:text-white"
                  : "text-navy text-opacity-50 dark:text-white dark:text-opacity-25"
              } `}
            >
              {username?.location ? username?.location : "Not Available"}
            </h2>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Image
                src={theme === "dark" ? twitterw : twitter}
                alt="logo"
                width={20}
                height={16}
              />
            </div>
            <h2
              className={`lg:text-[15px] text-[13px] font-normal ${
                username?.twitter_username
                  ? "text-navy dark:text-white"
                  : "text-navy text-opacity-50 dark:text-white dark:text-opacity-25"
              } `}
            >
              {username?.twitter_username
                ? username?.twitter_username
                : "Not Available"}
            </h2>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 md:grid md:grid-cols-2 md:gap-6 lg:mt-5 mt-4 flex flex-col gap-4">
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Image
                src={theme === "dark" ? linkw : link}
                alt="logo"
                width={20}
                height={20}
              />
            </div>
            <h2 className="text-navy lg:text-[15px] text-[13px] font-normal dark:text-white">
              {username?.html_url}
            </h2>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Image
                src={theme === "dark" ? buildingw : building}
                alt="logo"
                width={20}
                height={19}
              />
            </div>
            <h2
              className={`lg:text-[15px] text-[13px] font-normal ${
                username?.company
                  ? "text-navy dark:text-white"
                  : "text-navy text-opacity-50 dark:text-white dark:text-opacity-25"
              } `}
            >
              {username?.company ? username?.company : "Not Available"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
