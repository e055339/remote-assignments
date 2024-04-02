import React, { useState } from "react";
import "./styles/style.css";

const ClassInfo = () => {
  let [showMore, setShowMore] = useState(false);

  const showMoreHandler = () => {
    setShowMore(true);
  };

  return (
    <div>
      <section>
        <h2>課程資訊</h2>
        <div className="content">
          <div className="block">
            <a href="#">html基礎</a>
            <img src="/images/html.jpg" alt="html" />
          </div>
          <div className="block">
            <a href="#">css進階</a>
            <img src="images/css.jpg" alt="html" />
          </div>
          <div className="block">
            <a href="#">javascript基礎</a>
            <img src="/images/javascript.jpg" alt="html" />
          </div>
          <div className="block">
            <a href="#">react全攻略</a>
            <img src="/images/react.jpg" alt="html" />
          </div>
        </div>
      </section>
      {showMore && (
        <section className="moreClass" style={{ display: "flex" }}>
          <div className="content">
            <div className="block">
              <a href="#">mySQL攻略</a>
              <img src="/images/mySQL.jpg" alt="html" />
            </div>
            <div className="block">
              <a href="#">拳擊初階</a>
              <img src="/images/boxing.jpg" alt="html" />
            </div>
            <div className="block">
              <a href="#">可愛貓貓</a>
              <img src="/images/fat cat.jpg" alt="html" />
            </div>
            <div className="block">
              <a href="#">How to get Google offer?</a>
              <img src="/images/interview.jpg" alt="html" />
            </div>
          </div>
        </section>
      )}
      <div>
        <footer>
          <div>
            <button onClick={showMoreHandler} className="btn">
              查看更多課程
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ClassInfo;
