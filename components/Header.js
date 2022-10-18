import Image from "next/image";
import React from "react";
import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import {
  CameraIcon,
  EyeIcon,
  GlobeAltIcon,
  HeartIcon,
  MenuIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

import { signOut } from "firebase/auth";

import { auth } from "../services/firebase-config";
import BetterLink from "./BetterLink";

import { useSelector } from "react-redux";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce(
    (prev, cur) => prev + +cur.itemQuantity,
    0
  );

  const toggleMenuHandler = () => {
    if (isMenuVisible) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        closeMenu();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-sm p-2">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <BetterLink href="/">
          <Image
            className=" w-full p-3"
            src="https://firebasestorage.googleapis.com/v0/b/fashionnovaclone.appspot.com/o/621e35f8f1231b47bf27034c%20(1).png?alt=media&token=d5c0e2ff-eefc-4f46-919c-625b65c33483"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </BetterLink>
      </div>
      <div className="pl-5  bg-gray-100 rounded-full flex items-center ">
        <SearchIcon
          className="hidden md:inline-flex h-5 text-black rounded-full
         bg-transparent cursor-pointer md:mx-2"
        />
        <input
          className="hidden md:inline-flex  flex-grow bg-transparent placeholder:text-gray-600 w-100 "
          type="text"
          placeholder="Search"
        />
        <CameraIcon
          className="hidden md:inline-flex h-5 text-black rounded-full bg-transparent
         cursor-pointer md:mx-2"
        />
      </div>
      {wishlistCount > 0 && (
                <span className="badge">{wishlistCount}</span>
              )}  <div className="flex items-center space-x-4 justify-end text-gray-700">
        <div className="flex items-center space-x-2">
          <div className="hidden rounded-full hover:bg-gray-200 mx-auto p-2">
            <SearchIcon className="h-6" />
          </div>
          <div className="rounded-full hover:bg-gray-200 mx-auto p-2">
            <EyeIcon className="h-6" />
          </div>
          <div className="rounded-full hover:bg-gray-200 mx-auto p-2">
            <HeartIcon className="h-6" />
          </div>
                   {cartCount > 0 && <span className="badge">{cartCount}</span>}
     <div className="rounded-full hover:bg-gray-200 mx-auto p-2">
            <ShoppingBagIcon className="h-6" />
          </div>
          <div className="rounded-full hover:bg-gray-200 mx-auto p-2">
            <MenuIcon className="h-6" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
