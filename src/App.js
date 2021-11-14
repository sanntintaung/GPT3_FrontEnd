import React from 'react';
import WhatisGpt3 from "./Containers/whatisGPT3/WhatisGPT3";
import Features from "./Containers/features/Features";
import Possibility from "./Containers/possibility/Possibility";
import Cta from "./Components/cta/CTA";
import Navbar from "./Components/navbar/Navbar";
import Blog from "./Containers/blog/Blog";
import Header from "./Containers/header/Header";
import Footer from "./Containers/footer/Footer";
import Brand from "./Components/brand/Brand";
import './app.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatisGpt3/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default App;