import Image from 'next/image';
import React from 'react';
import { LuBell } from 'react-icons/lu';
import { IoPersonOutline } from 'react-icons/io5';
import bob from '../../public/dailybob logo favicon collection-1.png';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

const SideContent = () => {
  return (
    <div className="flex flex-col gap-y-2 p-4 rounded-xl pt-6">
      <div className="flex items-center gap-x-60 md:gap-x-0 justify-between w-full mt-20 md:mt-0 md:p-4">
        {/* Logo Section */}
        <div>
          <Image
            src={bob}
            alt="Logo"
            className="w-16 md:w-36 object-cover"
          />
        </div>

        {/* Icons Section (visible only on mobile) */}
        <div className="flex  md:hidden gap-x-3 text-black">
          <LuBell size={28} />
          <IoPersonOutline size={28} />
        </div>
      </div>


      <div className="hidden md:flex space-y-2 flex-col mt-5">
        <h2 className="text-[#4D4D4D] text-xl md:text-3xl font-bold">
          즐거운<br /> 앱테크의 시작!
        </h2>
        <h2 className="text-[#FF5E18] text-2xl md:text-4xl font-bold">
          데일리밥
        </h2>
      </div>

      <div className="hidden md:flex gap-x-4 mt-5">
        <button className="bg-black flex items-center gap-x-2 text-white px-4 py-3 rounded-md text-sm">
          <FaGooglePlay />
          Google Play
        </button>
        <button className="bg-black flex items-center gap-x-2 text-white px-4 py-3 rounded-md text-sm">
          <FaAppStoreIos />
          App Store
        </button>
      </div>

      <div className="hidden md:flex mt-5">
        <button className="flex bg-[#FEE500] text-[#4D4D4D] px-20 py-3 gap-3 rounded-md text-sm">
          카카오톡 상담하기
        </button>
      </div>
    </div>
  );
};

export default SideContent;