import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  CopyIcon,
  ExclamationmarkIcon,
  LinkIcon,
  PercentIncreaseIcon,
  RedditIcon,
  StarIcon,
  TwitchIcon,
  TwitterIcon,
  VerifyIcon,
} from "../components/SvgList";

type Props = {};

export const CoinProfile: FC<Props> = () => {
  const router = useRouter();
  return (
    <div className="w-[calc(100%-286px)] py-[56px] px-[40px] flex flex-col gap-[56px] bg-black">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-[12px]">
          <Image
            src={"/imgs/etherium-icon.png"}
            alt={"etherium-icon"}
            width={42}
            height={40}
          />
          <div className="flex flex-col items-start justify-center">
            <p className="text-[18px] leading-[27px] font-semibold text-white">
              Ethereum Price{" "}
              <span className="text-[#A4A8AB] font-normal">{`(ETH)`}</span>
            </p>
            <div className="flex items-center justify-center gap-[5px]">
              <span className="text-[14px] text-[#A4A8AB]">Rank</span>
              <div className="text-[10px] flex items-center justify-center bg-[#6400B3] py-[2px] w-[25px] rounded-[8px] text-white">
                #2
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#303A46] rounded-[16px] p-[9px] -mt-6">
            <StarIcon />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[67px]">
          <div className="flex flex-col items-start justify-center gap-[3px]">
            <p className="text-[14px] text-white">{`Ethereum Price (ETH)`}</p>
            <p className="text-[24px] text-[#6400B3] font-bold">
              {`Ethereum Price (ETH)`}{" "}
              <span className="text-white text-[12px] leading-[18px]">{`0.05637 BTC`}</span>
            </p>
          </div>
          <div className="flex items-center justify-center p-[10px] rounded-[16px] border-[1px] border-[#6400B3] bg-transparent text-[#6400B3]">
            <PercentIncreaseIcon />
            {`3.36%`}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[40px]">
        <div className="flex items-start justify-center gap-[15px] flex-col">
          <div className="flex items-center justify-center gap-[57px]">
            <p className="text-white text-[14px] text-left">Website</p>
            <div className="flex items-center justify-center text-[16px] text-[#A4A8AB] gap-[5px]">
              <VerifyIcon />
              {`ethereum.org`}
              <LinkIcon />
            </div>
          </div>
          <div className="flex items-start justify-center gap-[36px]">
            <p className="text-white text-[14px] text-left">Community </p>
            <div className="flex items-center justify-center gap-[10px]">
              <div className="flex items-center justify-center text-[14px] text-white gap-[6px] cursor-pointer">
                <TwitterIcon />
                {`Twitter`}
              </div>
              <div className="flex items-center justify-center text-[14px] text-white gap-[6px] cursor-pointer">
                <RedditIcon />
                {`Reddit`}
              </div>
              <div className="flex items-center justify-center text-[14px] text-white gap-[6px] cursor-pointer">
                <TwitchIcon />
                {`Twitch`}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[50px]">
            <p className="text-white text-[14px] text-left">Explorers </p>
            <div className="flex items-center justify-center gap-[10px]">
              <div className="flex items-center justify-center border-[1px] border-[#363B47] text-[#C2C2C2] text-[10px] rounded-[10px] bg-transparent cursor-pointer py-[7px] px-[14px]">
                {`Oklink`}
              </div>
              <div className="flex items-center justify-center border-[1px] border-[#363B47] text-[#C2C2C2] text-[10px] rounded-[10px] bg-transparent cursor-pointer py-[7px] px-[14px]">
                {`Etherscan`}
              </div>
              <div className="flex items-center justify-center border-[1px] border-[#363B47] text-[#C2C2C2] text-[10px] rounded-[10px] bg-transparent cursor-pointer py-[7px] px-[14px]">
                {`Ethplorer`}
              </div>
              <div className="flex items-center justify-center border-[1px] border-[#363B47] text-[#C2C2C2] text-[10px] rounded-[10px] bg-transparent cursor-pointer py-[7px] px-[14px]">
                {`Blockchair`}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[50px]">
            <p className="text-white text-[14px] text-left">Contract </p>
            <div className="flex items-center justify-center gap-[10px]">
              <div className="flex items-center justify-center">
                <Image
                  src={"/imgs/metamask-icon.png"}
                  alt={"metamask-icon"}
                  width={22}
                  height={20}
                  className="mt-1"
                />
                <p className="text-white text-[14px]">{`70d088...bd959933f8`}</p>
              </div>
              <div className="h-[14px] border-[#C2C2C2] border-opacity-20 border-[1px] " />
              <div className="flex items-center justify-center cursor-pointer">
                <CopyIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[170px] border-[1px] border-white border-opacity-30" />

        <div className="flex flex-col items-center justify-center gap-[39px]">
          <div className="flex flex-col gap-[5px]">
            <p className="flex items-center justify-center gap-[5px] text-[14px] text-[#A4A8AB]">
              Market Cap <ExclamationmarkIcon />
            </p>
            <p className="text-white text-[18px] font-semibold">$135.0B</p>
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="flex items-center justify-center gap-[5px] text-[14px] text-[#A4A8AB]">
              Volume 24h <ExclamationmarkIcon />
            </p>
            <p className="text-white text-[18px] font-semibold">$2.3T</p>
          </div>
        </div>

        <div className="h-[170px] border-[1px] border-white border-opacity-30" />

        <div className="flex flex-col items-center justify-center gap-[39px]">
          <div className="flex flex-col gap-[5px]">
            <p className="flex items-center justify-center gap-[5px] text-[14px] text-[#A4A8AB]">
              Circulating Supply <ExclamationmarkIcon />
            </p>
            <p className="text-white text-[18px] font-semibold">{`119,572,047`}</p>
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="flex items-center justify-center gap-[5px] text-[14px] text-[#A4A8AB]">
              Total Supply <ExclamationmarkIcon />
            </p>
            <p className="text-white text-[18px] font-semibold">{`119,572,047`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
