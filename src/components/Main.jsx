import React from 'react';
import Heading from './Heading';
import Slider from './Slider';
import BottomSlider from './BottomSlider';
import NavBar from './NavBar';

const Main = () => {
  return (
    <div className="w-full max-w-md mx-auto border h-screen flex flex-col">
      <Heading />
      <div className="rounded-t-3xl px-4 mt-4 py-3 bg-white">
        <p className="text-black text-sm md:text-base">
          매일매일 쏟아지는 다양한 혜택
        </p>
      </div>
      <Slider />
      <p className="text-black px-4 py-3 bg-white text-sm md:text-base">
        상품 구매
      </p>
      <BottomSlider />
      <NavBar />
    </div>
  );
};

export default Main;