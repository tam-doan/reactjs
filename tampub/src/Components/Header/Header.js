import React, { Component } from 'react';
import logo from './images/shopstack-logo-email.png';
import './css/Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <section className="top-bar">
                    <div className="container">
                        <div className="top-links lftflot">
                            <a href="http://www.shopstack.asia/">Call : (+66) 86-613-2807</a>
                        </div>
                            <div className="top-links rgtflot">
                            <div className="socialfollow">
                                <a rel="noopener noreferrer" href="https://www.facebook.com/shopstack/" className="facebook">
                                    <i className="fa-facebook"></i>
                                </a>
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/company/shopstack-company/" className="linkedin">
                                    <i className="fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <header id="header" className="horizontal-w  sm-rgt-mn  w-header-type-10">
                    <div className="container">
                        <div className="col-md-3 col-sm-3 logo-wrap">
                            <div className="logo">
                                <a href="http://www.shopstack.asia:80/">
                                    <img src={logo} className="shopstack-logo" alt="Shopstack logo" />
                                </a>
                            </div>
                        </div>

                        <nav id="nav-wrap" className="nav-wrap1 col-md-9 col-sm-9">
                            <div className="container">
                                <ul id="nav">
                                <li id="menu-item-9557" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9557"><a href="http://www.shopstack.asia" data-description="start here">Home</a></li>
                                    <li id="menu-item-9597" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9597"><a href="http://www.shopstack.asia:80/index.php/about-us/" data-description="About Us">Company</a></li>
                                    <li id="menu-item-9596" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9596"><a href="http://www.shopstack.asia:80/index.php/portfolio-shopstack/" data-description="">Portfolio</a></li>
                                    <li id="menu-item-9592" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9592"><a href="http://www.shopstack.asia:80/index.php/contact-us/" data-description="connect now">Contact</a></li>
                                </ul>   
                            </div>
                        </nav>                        
                    </div>                    
                </header>
            </div>
        );
    }
}

export default Header;
