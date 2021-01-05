import React from 'react';
import Carousel from "react-spring-3d-carousel";
import img1 from "../imgs/infra1.jpg";
import img2 from "../imgs/infra2.jpg";
import img3 from "../imgs/infra3.jpg";
import img4 from "../imgs/infra4.jpg";
import { config } from "react-spring";
import { useMediaQuery } from 'react-responsive'

var slides = [
    {
        key : 1,
        content : <img src={img1} />
    },
    {
        key : 2,
        content : <img src={img2} />
    },
    {
        key : 3,
        content : <img src={img3} />
    },
    {
        key : 4,
        content : <img src={img4} />
    }
]

var  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
};

var Infrastructure = (props) => {
    window.scrollTo(0,0);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    return (
        <div>
            <div style={navBG}></div>
            <div style={infraContainer}>
                <div style={isTabletOrMobile ? minfraDetails : infraDetails}>
                    <h1 style={isTabletOrMobile ? minfraTitle : infraTitle}>Infrastructure</h1>
                    <h2 style={infraSub}>Labs</h2>
                    <ul style={infraList}>
                        <li>10 B.Tech. Labs</li>
                        <li>2 M.Tech. Labs</li>
                    </ul>
                    <h2 style={infraSub}>Equipment</h2>
                    <ul style={infraList}>
                        <li>IBM System x226 eServers</li>
                        <li>IBM System x3400 M3 Servers</li>
                        <li>IBM System x3300 M4 Servers</li>
                        <li>IBM System x3250 M5 Rack Servers</li>
                        <li>Apple Mac Pro Server</li>
                        <li>Apple iMac and Mac Mini Systems (Apple Lab)</li>
                        <li>Laser printer/scanners</li>
                    </ul>
                    <h2 style={infraSub}>Software</h2>
                    <ul style={infraList}>
                        <li>All Microsoft software (through Microsoft Imagine subscription)</li>
                        <li>Rational Suite (including Rational Rose)</li>
                        <li>All Oracle software (through Oracle Academy membership)</li>
                        <li>macOS Server</li>
                    </ul>
                    <h2 style={infraSub}>Others</h2>
                    <ul style={infraList}>
                        <li>Department Library</li>
                        <li>Seminar Hall (compliant with NMEICT remote center requirements)</li>
                        <li>Conference Room</li>
                    </ul>
                </div>
                <div style={ isTabletOrMobile ? minfraPics : infraPics}>
                    <Carousel
                        slides={slides} 
                        goToSlide={state.goToSlide}
                        offsetRadius={state.offsetRadius}
                        showNavigation={state.showNavigation}
                        animationConfig={state.config}
                    />
                </div>
            </div>
        </div>
    );
}

var navBG = {
    backgroundColor : "rgba(50, 98, 182,1)",
    height : "12vh",
    width : "100vw",
    position : "fixed",
    top : "0",
    left : "0",
}
var infraContainer ={
    color : "white",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center",
    margin : "14vh auto",
    width : "90%"
}
var infraDetails ={
    width : "40%"
}
var minfraDetails ={
    width : "90%",
    order : "2"
}
var infraTitle ={
    fontSize : "50px",
    margin : "1vh 0 2vh 0",
    fontWeight : "bold"
}
var minfraTitle ={
    fontSize : "40px",
    margin : "1vh 0 2vh 0",
    fontWeight : "bold"
}
var infraSub={
    fontWeight : "bold",
    margin : "2vh 0 1vh 0"
}
var infraList = {
    listStyle : "none",
    color : "white"
}
var infraPics = {
    width : "60%",
    height : "50vh",
    alignSelf : "start",
    margin : "10vh auto"
}
var minfraPics = {
    width : "90%",
    height : "35vh",
    alignSelf : "start",
    margin : "10vh auto",
    order : "1"
}
export default Infrastructure;