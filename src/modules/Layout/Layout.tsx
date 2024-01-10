import React, { FC } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center transition-all duration-300">
      <div className="w-full max-w-[1500px] flex items-center justify-center relative flex-col">
        <div className="flex w-full">
          <Sidebar />
          <div className="flex flex-col items-start justify-start px-[30px] py-[20px] w-full">
            <Header />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
