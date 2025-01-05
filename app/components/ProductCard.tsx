import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-slate-400 text-white text-xl hover:bg-slate-500">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
