import React from 'react'
import bell from "../../public/lets-icons_bell.png"
import p from "../../public/Frame 427319011.png"
import Image from 'next/image'
import { LuBell } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";



const Heading = () => {
  return (
    <div className='w-full px-5 pt-3'
      style={{
        background: "linear-gradient(to right, #FF6766 100%, #F8954D 100%)"
      }}
    >
      <div className='flex items-center justify-between'>
        <div className='bg-white px-20 py-5'></div>
        <div className='flex gap-x-3 text-white'>
          <LuBell size={28} className='' />
          <IoPersonOutline size={28} />
        </div>
      </div>
      <div className='flex'>
        <div>
          <p className='py-4 font-semibold text-white'>
            홍길동 님 안녕하세요!
          </p>
          <p className='flex font-semibold text-white text-[40px]  gap-3 items-center'>
            <Image src={p} />
            5,000 P
          </p>
        </div>
        <div>
          {/* bob image */}
          {/* <Image /> */}
        </div>
      </div>
      <div className='bg-white/20 rounded-md text-white flex items-center justify-between p-2'>
        <p>
          응모권 4장
        </p>
        <p>
          사용 구매
        </p>
      </div>
    </div>
  )
}

export default Heading