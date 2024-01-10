import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextArrowIcon, SettingIcon } from "../components/SvgList";

type Props = {};

export const QuickBuy: FC<Props> = () => {
  return (
    <div className="p-[24px] rounded-[20px] flex flex-col w-[286px] bg-black items-start justify-center">
      <div className="flex items-center justify-between w-full">
        <p className="font-semibold text-white text-[16px]">Quick Buy</p>
        <div className="cursor-pointer">
          <SettingIcon />
        </div>
      </div>
      <div className="mt-[47px] flex items-center justify-between gap-[12px] w-full">
        <div className="flex items-center justify-center gap-[15px]">
          <Image
            src={"/imgs/etherium-icon.png"}
            alt={"etherium-icon"}
            width={32}
            height={32}
          />
          <div>
            <span className="text-[13px] text-[#A4A8AB]">ETH</span>
            <p className="text-white font-bold text-[16px]">Ethereum</p>
          </div>
        </div>
        <div className="flex flex-col gap-[9px]">
          <span className="text-[13px] text-[#A4A8AB]">{`0.12000 BTC`}</span>
          <p className="text-white font-bold text-[16px]">{`0.01`}</p>
        </div>
      </div>
      <div className="mt-[47px] flex flex-col gap-[13px] w-full">
        <div className="w-full bg-gradient-to-b from-[#11BF61] to-[#78ffc700] cursor-pointer flex items-center justify-center py-[10.5px] rounded-[20px] gap-[32px]">
          <p className="text-white text-[16px] font-bold">Buy Ethereum</p>
          <div className="flex items-center justify-center rounded-[14px] bg-[#ffffff34] p-[10.5px]">
            <NextArrowIcon />
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#E14141] to-[#78ffc700] cursor-pointer flex items-center justify-center py-[10.5px] rounded-[20px] gap-[32px]">
          <p className="text-white text-[16px] font-bold">Sell Ethereum</p>
          <div className="flex items-center justify-center rounded-[14px] bg-[#ffffff34] p-[10.5px]">
            <NextArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
