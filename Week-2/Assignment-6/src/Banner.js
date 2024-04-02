import React, { useState } from "react";
import "./styles/style.css";

const Banner = () => {
  let [slogan, setSlogan] = useState(false);

  const changeSloganHandler = () => {
    setSlogan(!slogan);
  };

  return (
    <div>
      <div onClick={changeSloganHandler} className="banner">
        <h1>{slogan ? "Have a Good Time!" : "歡迎來到我的網頁"}</h1>
        <img src="/images/coding.jpg" alt="coding" />
      </div>
    </div>
  );
};

export default Banner;
