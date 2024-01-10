import React, { FC, useState } from "react";
import { DarkIcon, LightIcon, SearchIcon } from "./SvgList";

type Props = {};

export const ThemeSwitcher: FC<Props> = ({}) => {
  return (
    <div className="flex items-center justify-center p-[7px]">
      <div className="flex items-center justify-center gap-[8px]">
        <div className="flex items-center gap-[8px]">
          <LightIcon />
          <span className="text-white text-[14px]">Light</span>
        </div>
        <div className="flex items-center gap-[8px] p-[7px] bg-[#6400B3] rounded-[14px]">
          <DarkIcon />
          <span className="text-white text-[14px]">Dark</span>
        </div>
      </div>
    </div>
  );
};
