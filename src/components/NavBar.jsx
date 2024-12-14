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
      { id: "home", label: "홈", icon: <FaHome size={24} /> },
      { id: "search", label: "상점", icon: <RiQrScan2Line size={24} /> },
      { id: "cart", label: "영수증", icon: <IoIosRibbon size={24} /> },
      { id: "favorites", label: "포인트 샵", icon: <IoBagHandleOutline size={24} /> },
      { id: "profile", label: "눈치게임", icon: <FaRegStar size={24} /> },
    ];
  
    return (
      <div className="border py-20 md:py-8 absolute bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center w-full max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center ${
              activeTab === tab.id ? "text-red-500" : "text-gray-500"
            }`}
          >
            <div className="text-xl pb-1">{tab.icon}</div>
            <span className="text-sm">{tab.label}</span>
          </button>
        ))}
      </div>
    );
  };
  
  export default NavBar;
  