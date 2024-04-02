import React from "react";
import "./styles/style.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <h1 id="logo">Eric的個人網頁</h1>
          <ul>
            <li>
              <a href="#">關於我</a>
            </li>
            <li>
              <a href="#">作品集</a>
            </li>
            <li>
              <a href="#">課程報名</a>
            </li>
            <li>
              <a href="#">聯絡資訊</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
