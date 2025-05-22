import React, { useContext } from "react";
import "./index.css";
import { CiLight, CiDark } from "react-icons/ci";
const Header = () => {

  return (
    <header>
      <div className="header-sections-container">
        {/* <section className="header-section-one-main"> */}
          <img
            src="https://www.palamurbio.com/img/pbs1.png"
            style={{ width: "100px", height: '30px' }}
            alt="palamur-icon"
          />
        {/* </section> */}
        <section className="header-section-two-main">
          <div className="header-theme-change-card">
            <CiLight size={22} />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
