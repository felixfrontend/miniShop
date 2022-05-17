import React from "react";
import GoodsItem from "./GoodsItem";

const GoodList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;
  if (!goods.length) {
    return <h2>Nothing here</h2>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default GoodList;
