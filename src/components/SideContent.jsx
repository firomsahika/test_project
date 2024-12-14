import Image from 'next/image';
import React from 'react';
import { LuBell } from 'react-icons/lu';
import { IoPersonOutline } from 'react-icons/io5';
import bob from '../../public/dailybob logo favicon collection-1.png';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

const SideContent = () => {
  return (
    <div className="flex flex-col gap-y-5 p-4 items-center rounded-xl pt-6"> {/* Added pt-6 for padding-top */}
      {/* Top Section: Logo and Icons */}
      <div className="w-full flex border items-center justify-between py-10 md:py-0">
        {/* Logo */}
        <Image src={bob} alt="Logo" className="h-30 py-20" />
        
        {/* Icons for mobile and desktop */}
        <div className="flex md:hidden  items-center gap-x-3 text-black">
          <LuBell size={28} />
          <IoPersonOutline size={28} />
        </div>
      </div>

      {/* Content for larger screens */}
      <div className="hidden md:flex flex-col mt-5">
        <h2 className="text-[#4D4D4D] text-xl md:text-3xl font-bold">
          즐거운<br /> 앱테크의 시작!
        </h2>
        <h2 className="text-[#FF5E18] text-2xl md:text-4xl font-bold">
          데일리밥
        </h2>
      </div>

      {/* App download buttons */}
      <div className="hidden md:flex gap-x-4 mt-5">
        <button className="bg-black flex items-center gap-x-2 text-white px-4 py-2 rounded-md text-sm">
          <FaGooglePlay />
          Google Play
        </button>
        <button className="bg-black flex items-center gap-x-2 text-white px-4 py-2 rounded-md text-sm">
          <FaAppStoreIos />
          App Store
        </button>
      </div>

      {/* Kakao Talk button */}
      <div className="hidden md:flex mt-5">
        <button className="flex bg-[#FEE500] text-[#4D4D4D] px-6 py-2 gap-3 rounded-md text-sm">
          카카오톡 상담하기
        </button>
      </div>
    </div>
  );
};

export default SideContent;
