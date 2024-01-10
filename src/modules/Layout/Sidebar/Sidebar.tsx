import React, { FC, useState } from "react";
import Image from "next/image";
import { VerifyIcon } from "../../../components/SvgList";
import { LinkData } from "./LinkData";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

export const Sidebar: FC<Props> = () => {
  const router = useRouter();
  return (
    <div className="p-[25px] flex flex-col items-center justify-start bg-black rounded-[20px]">
      <div className="flex items-center justify-center gap-[10px]">
        <Image src={"/imgs/logo.png"} alt={"logoimg"} width={42} height={40} />
        <p className="text-white uppercase font-semibold text-[20px] leading-[30px]">
          bones
        </p>
      </div>
      <div className="mt-[64px] flex items-center justify-start flex-col gap-[14px]">
        <Image
          src={"/imgs/avatar.png"}
          alt={"avatar_image"}
          width={70}
          height={70}
        />
        <div>
          <p className="font-semibold text-white text-[16px] leading-[24px] uppercase">
            tardis
          </p>
          <span className="flex items-center justify-center gap-[3px] text-[#C2C2C2] text-[14px] leading-[21px]">
            verified <VerifyIcon />
          </span>
        </div>
        <ul className="flex flex-col items-center justify-center gap-[25px]">
          {LinkData.map((data, index) => (
            <Link href={data.path} key={index}>
              <li
                className={`items-center justify-start flex gap-[14px] text-[16px] cursor-pointer w-[204px] ${
                  router.pathname === data.path
                    ? "text-white font-bold bg-[#6400B3] rounded-[20px] py-[18px] pl-[20px]"
                    : "text-[#C2C2C2] px-[20px]"
                }`}
              >
                {data.Icon}
                {data.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
