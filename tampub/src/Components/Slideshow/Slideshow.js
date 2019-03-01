import React, { Component } from 'react';
import banner from './images/home_banner-1.png';
import './css/Slideshow.css';

class Slideshow extends Component {
    render() {
        return (
            <div className="slideshow-wrap">
                <div className="slideshow">
                    <img src={banner} className="banner" alt="Shopstack Banner" />
                </div>

                <div className="contact-wrap">
                    <div className="container">
                        <div className="wpb_column vc_column_container col-md-8 col-sm-8">
                            <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                    <p>
                                        <strong>Kickstart a project with us today</strong><br />
                                        We get your&nbsp;ecommerce channels up and running quickly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="alignright wpb_column vc_column_container col-md-4 col-sm-4">
                            <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                    <a href="http://www.shopstack.asia/index.php/contact-us/" className="button white  medium bordered-bot " target="_self">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slideshow;
