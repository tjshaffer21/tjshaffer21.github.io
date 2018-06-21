import React from "react";
import "./SocialCard.css";

const SocialCard = props => {
    return (
        <div className="social-card">
            <div id="social-id">
                <img src="https://github.com/tjshaffer21.png" id="social-img" alt="" />
                <h1 id="social-header">Thomas Shaffer</h1>
            </div>
            <div className="social-content">
                <ul>
                    <li>Education: B.S. in Computer Science - Software/Scientific Applications</li>
                    <li>Language Experience: C/C++, Python, Common Lisp</li>
                    <li>OS Experience: Linux</li>
                    <li><a href="https://github.com/tjshaffer21">GitHub</a></li>
                </ul>
            </div>
            <div className="social-badges">
                <img src="https://www.codewars.com/users/tjshaffer21/badges/micro" id="social-cw" alt="" />
            </div>
        </div>
    );
};
export default SocialCard;