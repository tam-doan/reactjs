import React, { Component } from 'react';
import './App.css';
import './App-main-style.css';
import './base.css';
import Header from './Components/Header/Header';
import Slideshow from './Components/Slideshow/Slideshow';
import Maincontent from './Components/Maincontent/Maincontent';
import Footer from './Components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="home page-template-default page page-id-5710   transparent-header-w t-dark-w  has-topbar-w  smooth-scroll wpb-js-composer js-comp-ver-4.12 vc_responsive esg-blurlistenerexists">
                <div id="wrap" className="colorskin-2 dark-submenu">
                    <Header />
                    <Slideshow />
                    <Maincontent />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
