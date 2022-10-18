import Image from "next/image";
import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import {
  CameraIcon,
  EyeIcon,
  GlobeAltIcon,
  HeartIcon,
  MenuIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

function Banner() {
  const [changeText, setChangeText] = useState([]);
  return (
    <div className="flex items-center sticky top-0 z-50 shadow-md p-2 bg-black">
      <ChevronLeftIcon className="text-white h-8" />
      <p className="text-center text-white font-bold flex-grow">
        Don't Miss 40% Off & Shoes! No Code Needed
      </p>
      <ChevronRightIcon className="h-8 flex-end text-white" />
    </div>
  );
}

export default Banner;
