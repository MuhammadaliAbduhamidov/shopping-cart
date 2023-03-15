import React from "react";

function Goodlist(props) {
  return (
    <div className="goods container">
      {props.goods.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.full_background} alt={item.name} />
            </div>
            <div className="card-content">
              <span className="card-title">{item.name}</span>
              <p>{item.description}</p>
            </div>
            <div className="card-action">
              <button className="btn">BUY</button>
              <div className="right" style={{ fontSize: "1.5rem" }}>
                {item.price}$
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Goodlist;
