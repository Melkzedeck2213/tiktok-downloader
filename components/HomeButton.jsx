import React from "react";
import Link from "next/link";

const HomeButton = () => {
  return (
    <div>
      <Link href="/">
        <button className="bg-purple-900 text-white rounded-full p-4 cursor-pointer my-10">
          ⬅ HOME
        </button>
      </Link>
    </div>
  );
};

export default HomeButton;
