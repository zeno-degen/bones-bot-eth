import type { NextPage } from "next";
import { CoinProfile } from "../modules/CoinProfile";
import { QuickBuy } from "../modules/QuickBuy";

const Home: NextPage = () => {
  return (
    <div className="flex items-start w-full justify-between transition-all duration-300 p-[22px] rounded-[20px]">
      <CoinProfile />
      <QuickBuy />
    </div>
  );
};

export default Home;
