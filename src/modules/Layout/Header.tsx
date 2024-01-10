/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
// import { CloseIcon, MobileMenuIcon } from "../../components/SvgList";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MegaMenuIcon,
  NotificationIcon,
  SettingIcon,
  WalletIcon,
} from "../../components/SvgList";
import { SearchBox } from "../../components/SearchBox";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center">
        <MegaMenuIcon />
        <SearchBox />
      </div>
      <div className="flex items-center justify-center gap-[15px]">
        <ThemeSwitcher />
        <div className="flex items-center justify-center gap-[10px]">
          <div className="flex items-center justify-center rounded-[20px] cursor-pointer bg-transparent p-[18px]">
            <WalletIcon />
          </div>
          <div className="flex items-center justify-center rounded-[20px] cursor-pointer bg-transparent p-[18px]">
            <SettingIcon />
          </div>
          <div className="flex items-center justify-center rounded-[20px] cursor-pointer bg-transparent p-[18px] relative">
            <NotificationIcon />
            <div className="text-[14px] bg-[#FF3E46] rounded-[6px] flex items-center justify-center absolute w-[20px] text-white top-[10px] right-[10px]">
              8
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
