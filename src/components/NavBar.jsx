'use client'

import React, { useState } from "react";
import { FaHome, FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { RiQrScan2Line } from "react-icons/ri";
import { IoIosRibbon } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "홈", icon: <FaHome size={20} /> },
    { id: "search", label: "상점", icon: <RiQrScan2Line size={20} /> },
    { id: "cart", label: "영수증", icon: <IoIosRibbon size={20} /> },
    { id: "favorites", label: "포인트 샵", icon: <IoBagHandleOutline size={20} /> },
    { id: "profile", label: "눈치게임", icon: <FaRegStar size={20} /> },
  ];

  return (
    <div className="border-t bg-white flex justify-around items-center w-full h-16">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center ${
            activeTab === tab.id ? "text-red-500" : "text-gray-500"
          }`}
        >
          <div className="text-lg">{tab.icon}</div>
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default NavBar;