import SideContent from '@/components/SideContent';
import Main from "@/components/Main";
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-x-4 md:flex-row w-full h-screen items-center justify-center">
      {/* SideContent Section */}
      
      <SideContent />
      <Main />
    </div>
  );
};

export default HomePage;
