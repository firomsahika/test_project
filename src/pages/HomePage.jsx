import SideContent from '@/components/SideContent';
import Main from "@/components/Main";
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-0 w-full h-screen items-center justify-center">
      <div className="flex flex-col md:basis-1/3 items-center justify-start w-full md:w-auto">
        <SideContent />
      </div>
      <div className="flex flex-col md:basis-2/3 w-full">
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
