import React from 'react';
import frame from "../../public/Frame 1000002343.png";
import frameb from "../../public/Frame 1000002342.png";
import Image from 'next/image';

const BottomSlider = () => {
    return (
        <div className="flex overflow-x-auto space-x-3 bg-white py-3">
            {/* First visible card */}
            <div className="flex gap-x-10 shadow-xl rounded-xl w-[350px] h-[80px] flex-shrink-0 px-4">
                <Image src={frame} alt="Frame" />
                <div className="flex gap-x-20 text-black ">
                    <div className='flex flex-col  rounded-xl'>
                        <p>[스타벅스]</p>
                        <p className='font-semibold text-xl text-nowrap'>아이스 아메리카노</p>
                        <p>~12월 31일 까지</p>
                    </div>

                   
                </div>
                <div className="bg-[#FFD8D8] rounded-md flex items-center justify-center p-4">
                        <Image src={frameb} alt="Frame Background" />
                </div>

            </div>

            {/* Second partially visible card */}
            <div className="bg-white rounded-xl shadow-xl w-[350px] h-[80px] flex-shrink-0">

            </div>
        </div>
    );
};

export default BottomSlider;
