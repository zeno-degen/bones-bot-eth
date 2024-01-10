import React, { FC, useState } from "react";
import { SearchIcon } from "./SvgList";

type Props = {};

export const SearchBox: FC<Props> = ({}) => {
  return (
    <div className="flex items-center justify-center py-[19px] px-[26px] gap-[17.05px] rounded-[20px]">
      <SearchIcon />
      <input
        className="bg-transparent outline-none placeholder-[#92929D] text-[14px] text-white"
        placeholder="Search in dashboard..."
      />
    </div>
  );
};
