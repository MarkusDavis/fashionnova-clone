import Image from "next/image";
import React from "react";

function PromoBanner1() {
  return (
    <div className="bg-red-500">
      <img
        className=" cursor-pointer w-full"
        layout="fill"
        objectFit="contain"
        src="https://firebasestorage.googleapis.com/v0/b/fashionnovaclone.appspot.com/o/banner.jpg?alt=media&token=80477028-ef1d-4624-9306-bfc01cec21a4"
      />
    </div>
  );
}

export default PromoBanner1;
