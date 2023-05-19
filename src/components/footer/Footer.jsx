/* eslint-disable no-unused-vars */
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    All Rights Reserved.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="#"><FaFacebookF /></a>
                    </span>
                    <span className="icon">
                       <a href="#">  <FaInstagram /></a>
                    </span>
                    <span className="icon">
                       <a href="https://github.com/gauravaayu"> <FaGithub /></a>
                    </span>
                    <span className="icon">
                       <a href="#"><FaTwitter /></a>
                    </span>
                    <span className="icon">
                        <a href="https://linkedin.com/in/gauravmishra001"><FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
