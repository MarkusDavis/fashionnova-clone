import React from "react";

function CategoriesBanner() {
  return (
    <div className="flex items-center h-12 text-gray-500">
      <h3 className="font-semibold px-3 underline decoration-2 active">
        Women
      </h3>
      <h3 className="font-semibold px-3 cursor-pointer">Plus+Curve</h3>
      <h3 className="font-semibold px-3 cursor-pointer">Men</h3>
      <h3 className="font-semibold px-3 cursor-pointer">Kids</h3>
      <h3 className="font-semibold px-3 cursor-pointer">Beauty</h3>
    </div>
  );
}

export default CategoriesBanner;
