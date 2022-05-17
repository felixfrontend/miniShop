import React from "react";

const GoodsItem = (props) => {
  // const fakeImg = process.env.PUBLIC_URL + "/assets/placeholder.jpg";
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "20px", fontWeight: 500 }}>
          {price} сом.
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
