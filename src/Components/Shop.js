import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Goodlist from "./Goodlist";
import Loader from "./Loader";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => data.featured && setGoods(data.featured));
    setLoading(false);
  }, []);
  console.log(goods);

  return <div>{loading ? <Loader /> : <Goodlist goods={goods} />}</div>;
}

export default Shop;
