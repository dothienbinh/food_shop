import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div className="logo">
                {/* <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDU4Ljg4IDI1NS4yNCAzNi43MDMtMjAuMTI5YzEwLjQxOC01LjY4MzYgMTAuNDE4LTUuNjgzNiA0LjczNDQtMTYuMTAyLTUuNjgzNi0xMC40MTgtNS45MTgtMTAuMTg0LTE2LjEwMi00LjczNDRsLTM2LjkzOCAyMC4xMjljLTcuMTA1NSAzLjc4OTEtMTIuMDc4IDEyLjc4NS0xMi4wNzggMjAuODM2djM1LjUyaDIzLjY4em0tMTI0LjMyLTE0LjIwN2MtMS40MjE5LTExLjg0LTE3LjA1MS0xMS44NC0xNy4wNTEgMHY1OC4wMTJjMCA4Ljk5NjEtMTUuMTU2IDkuMjM0NC0xNS4xNTYgMC4yMzgyOHYtNTguMDEyYzAtMTEuODQtMTguNDY5LTEyLjA3OC0xOC40NjktMC4yMzgyOHY1OC4wMTJjMCA4Ljk5NjEtMTUuMTU2IDguOTk2MS0xNS4xNTYgMHYtNTguMDEyYzAtMTEuODQtMTUuMTU2LTExLjg0LTE2LjgxMiAwbC02LjE1NjIgNDYuMTc2Yy02LjM5NDUgNTkuNDM0IDM3LjQxNCA1NC40NjEgMzUuNTIgNzEuMDM5LTEzLjAyMyAxMTkuNTgtMTYuMTAyIDE2NC41NyAxMS44NCAxNjQuNTdzMjQuMTUyLTQ0Ljk4OCAxMS44NC0xNjQuNTdjLTEuNjU2Mi0xNi41NzQgNDEuOTEtMTEuNjAyIDM1LjUyLTcxLjAzOXptMTgzLjUxIDYzLjkzNGgtMTQxLjg0Yy0xMi4wNzggMC0xMi4wNzggMC0xMi4wNzggMTEuODR2MTEuNjAyYzAgMTIuMDc4IDAgMTIuMDc4IDEyLjA3OCAxMi4wNzhoNS42ODM2bDE2LjgxMiAxNjYuOTRjMS4xODM2IDEwLjY1NiAxLjE4MzYgMTAuNjU2IDExLjYwMiAxMC42NTZoNzMuNDA2YzEwLjQxOCAwIDEwLjQxOCAwIDExLjYwMi0xMC42NTZsMTYuODEyLTE2Ni45NGg1LjkxOGMxMi4wNzggMCAxMi4wNzggMCAxMi4wNzgtMTEuODR2LTExLjYwMmMwLTEyLjA3OCAwLTEyLjA3OC0xMi4wNzgtMTIuMDc4eiIvPgo8L3N2Zz4K" alt="Food and Drink" 
                className={cx('logo_img')} /> */}
                <Link to="/">
                <img src={logo} className="logo_img"></img>
                </Link>
            </div>
            <div className="footer-menu">
            <ul>
                <li><Link to="/catalog">Product</Link></li>
                <li><Link to="/">News</Link></li>
                <li><Link to="">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
          <div>
            <div className="footer-info">
              <div >
                <p><FontAwesomeIcon icon={faLocationDot} /></p>
                <p><FontAwesomeIcon icon={faClock} /></p>
                <p><FontAwesomeIcon icon={faMobileScreenButton} /></p>
                <p><FontAwesomeIcon icon={faPhone} /></p>
              </div>
              <div className="footer-info-icon">
                <p> Address: Ton That Thuyet, Nam Tu Liem, HN</p>
                <p> Open: 09h00 - 18h00</p> 
                <p> Hotline: (090) 777 777</p> 
                <p> Tel: (024) 24242424</p> 
              </div>
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu mang lại niềm vui mới mỗi ngày cho hàng
              triệu người tiêu dùng Việt. Hãy cùng hướng đến một cuộc sống
              năng động, tích cực hơn.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
