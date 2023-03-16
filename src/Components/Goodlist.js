import React from "react";

function Goodlist(props) {
  return (
    <div className="goods container">
      {props.goods.map((item) => {
        const { id, name, description, price, full_background } = item;
        return (
          <div className="card" key={id}>
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
                onClick={() => props.addToBasket({ id, name, price })}
              >
                BUY
              </button>
              <div className="right" style={{ fontSize: "1.5rem" }}>
                {price}$
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Goodlist;
