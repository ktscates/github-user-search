"use client";

import { React } from "react";
import Image from "next/image";
import location from "../../assets/location.png";
import link from "../../assets/link.svg";
import building from "../../assets/building.png";
import Moment from "moment";
import twitter from '../../assets/twitter.png'
import linkw from "../../assets/linkw.svg";
import buildingw from "../../assets/buildingw.png";
import locationw from "../../assets/locationw.png";
import twitterw from '../../assets/twitterun.png'

const Users = ({ username, theme}) => {
  console.log("username in the users component", username);

  return (
    <div className={`mx-auto w-[45%] bg-white dark:bg-searchDark flex gap-[37px] mt-6 p-12 rounded-[15px] ${theme === 'light' ? 'searchbox' : ''} `}>
      {username && (
        <>
          <div>
            <Image className="rounded-full"
              src={username.avatar_url}
              alt="logo"
              width={125}
              height={125}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col">
                <h1 className="font-bold leading-[39px] text-[26px] text-numbers dark:text-white">
                  {username.name}
                </h1>
                <h6 className=" font-normal text-base leading-6 text-blue">
                  @{username.login}
                </h6>
                <h3 className=" mt-5 font-normal leading-[25px] text-[15px] text-navy dark:text-white opacity-75 mix-blend-normal ">
                  {username.bio ? username.bio : "This profile has no bio"}
                </h3>
              </div>
              <h4 className=" font-normal text-modes dark:text-white leading-[22px] text-[15px]">
                {"Joined " + Moment(username.created_at).format("DD MMM YYYY")
}
              </h4>
            </div>
            <div className="flex flex-row justify-around py-3 rounded-[10px] mt-8 bg-backgroundLight dark:bg-infoDark dark:text-white">
              <div>
                <h6 className=" font-normal text-[13px] leading-[19px] text-navy dark:text-white">
                  Repos
                </h6>
                <h2 className=" text-numbers dark:text-white font-bold text-[22px] leading-8 text-left">
                  {username.public_repos}
                </h2>
              </div>
              <div>
                <h6 className=" font-normal text-[13px] leading-[19px] text-navy dark:text-white">
                  Followers
                </h6>
                <h2 className=" text-numbers font-bold text-[22px] leading-8 text-left dark:text-white">
                {username.followers}
                </h2>
              </div>
              <div>
                <h6 className=" font-normal text-[13px] leading-[19px] text-navy dark:text-white">
                  Following
                </h6>
                <h2 className=" text-numbers font-bold text-[22px] leading-8 text-left dark:text-white">
                {username.following}
                </h2>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-[37px]">
              <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <Image src={theme === 'dark' ? locationw : location} alt="logo" width={13} height={20} />
                  </div>
                  <h2 className={` text-[15px] font-normal ${username.location ? 'text-navy dark:text-white' : 'text-navy text-opacity-50 dark:text-white dark:text-opacity-25'} `}>
                    {username.location ? username.location : "Not Available"}
                  </h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <Image src={theme === 'dark' ? twitterw : twitter} alt="logo" width={20} height={16} />
                  </div>
                  <h2 className={`text-[15px] font-normal ${username.twitter_username ? 'text-navy dark:text-white' : 'text-navy text-opacity-50 dark:text-white dark:text-opacity-25'} `}>
                    {username.twitter_username ? username.twitter_username : "Not Available"}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12 mt-5">
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <Image src={theme === 'dark' ? linkw : link} alt="logo" width={20} height={20} />
                  </div>
                  <h2 className="text-navy text-[15px] font-normal">
                    {username.html_url}
                  </h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <Image src={theme === 'dark' ? buildingw : building} alt="logo" width={20} height={19} />
                  </div>
                  <h2 className={`text-[15px] font-normal ${username.company ? 'text-navy dark:text-white' : 'text-navy text-opacity-50 dark:text-white dark:text-opacity-25'} `}>
                    {username.company ? username.company : "Not Available"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
