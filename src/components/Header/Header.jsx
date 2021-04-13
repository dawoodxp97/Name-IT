/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Header.css';
const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="head Image"
                className={`head-img ${
                    headerExpanded ? 'head-img-expanded' : 'head-img-contracted'
                }`}
            ></img>
            <h1
                className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}
            >
                {headTitle}
            </h1>
        </div>
    );
};
export default Header;
