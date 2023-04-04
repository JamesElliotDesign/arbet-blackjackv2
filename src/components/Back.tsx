import React from "react";
import { useRouter } from "next/router";

const Back: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("https://arbet.casino");
  };

  return (
    <button
      className="focus:outline-none font-roboto text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-[#e57310] hover:bg-[#d16413] focus:ring-blue-800 class:"
      onClick={handleButtonClick}
    >
      Back to Dashboard
    </button>
  );
};

export default Back;
