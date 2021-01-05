import React, {useEffect, useRef, useState} from 'react';
import gsap,{TweenMax, Power3} from 'gsap';
import {useWindowScroll} from 'react-use';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';
import "../stylesheets/hover.css";

var  Nav = (props) => {
    var del = props.d;
    var nav = useRef();
    var layer = useRef();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    var [col,setCol] = useState("none");
    if(props.d != 2.8) del = 0.1;
    useEffect(() =>{
        gsap.from(
            nav.current,
            {opacity : "0",ease : Power3.easeOut, duration : 0.6, delay: del}
        );
        gsap.from(
            layer.current,
            {width : "0",ease : Power3.easeInOut, duration : 0.6, delay: del}
        );
        window.addEventListener('scroll',  e => {
            if (window.scrollY > 80) {
                gsap.to(
                    nav.current,
                    {backgroundColor : "rgba(50, 98, 182,1)",boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.51)",ease : Power3.easeOut, duration : 1}
                );
            } else {
                console.log("bring darknes")
                gsap.to(
                    nav.current,
                    {backgroundColor : "rgba(50, 98, 182,0)",boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0)",ease : Power3.easeOut, duration : 1}
                );
            }
        });
    })

    var showLinks = () =>{
        document.querySelector(".vLinks").classList.toggle("roll");
        document.querySelector(".burger").classList.toggle("toggle");
    }


        return (
            <div ref={nav} style={navbar} className="navbar">
                <div style={logoDiv}>
                <Link style={link} to="/">
                    <h1 style={isTabletOrMobile ? mlogo : logo}>CVRCOE</h1>
                </Link>
                </div>
                <div style={isTabletOrMobile ? hide : linksDiv}>
                    <ul style={navLinks}>
                    <li  style={linkDiv}>
                            <Link style={link} to="/news">
                                News
                            </Link>
                        </li>
                        <li  style={linkDiv}>
                            <Link style={link} to="/research">
                                Reasearch
                            </Link>
                        </li>
                        <li  style={linkDiv}>
                            <Link style={link} to="/faculty">
                                Faculty
                            </Link>
                        </li>
                        <li style={linkDiv,border}>
                            <Link style={link} to="/infra">
                                Infrastructure
                            </Link>
                            <div ref={layer} style={blackLayer}></div>
                        </li>
                    </ul>
                </div>
                <div style={isTabletOrMobile ? burgerDiv : hide}>
                    <div className="burger" onClick={showLinks} style={burger}>
                        <div style={line} className="line1"></div>
                        <div style={line} className="line2"></div>
                        <div style={line} className="line3"></div>
                    </div>
                    <div className="vLinks" style={vLinks}>
                        <ul style={navLinks}>
                        <li  style={linkDiv}>
                                <Link style={link} to="/news">
                                    News
                                </Link>
                            </li>
                            <li  style={linkDiv}>
                                <Link style={link} to="/research">
                                    Reasearch
                                </Link>
                            </li>
                            <li  style={linkDiv}>
                                <Link style={link} to="/faculty">
                                    Faculty
                                </Link>
                            </li>
                            <li style={linkDiv,border}>
                                <Link style={link} to="/infra">
                                    Infrastructure
                                </Link>
                                <div ref={layer} style={blackLayer}></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
}

var navbar  = {
    position : "fixed",
    zIndex : "100",
    display : "flex",
    width : "100vw",
    height : "12vh",
    justifyContent : "space-between",
    alignItems : "center",
    color : "white",
    top : "0",
    backgroundColor : "none",
    opacity : "1",
};

var logoDiv = {
    width : "40%",
    paddingLeft : "15px",
    position : "relative"
};

var mlogo = {
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
};
var logo = {
    paddingLeft : "20px",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
};

var linksDiv = {
    width : "40%"
};

var navLinks = {
    listStyle : "none",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center"
};

var linkDiv = {
    position : "relative",
    display : "inline-block",
    overflow : "hidden"
}

var border = {
    padding : "4px 8px",
    border : "1px solid rgb(177 50 39)",
    borderRadius : "8px",
    overflow : "hidden",
    position : "relative"
}

var blackLayer = {
    height : "100%",
    width : "100%",
    position : "absolute",
    left : "0",
    top : "0",
    zIndex : "-20",
    backgroundColor : "rgb(207, 61, 48)"
}

var link = {
    fontSize : "1.2rem",
    color : "white",
    textDecoration : "none"
};


var hide = {
    display : "none"
}
var burgerDiv = {
    textAlign : "right",
    paddingRight : "18px",
    cursor : "pointer"
}
var burger = {
    display : "flex",
    flexDirection : "column",
    justifyContent : "space-evenly",
    alignItems : "center",
    width : "40px",
    height : "40px"
}
var line = {
    backgroundColor : "white",
    width : "95%",
    height : "2px",
    borderRadius : "0.5px"
}
var vLinks = {
    width : "100%",
    backgroundColor :  "rgba(50, 98, 182,1)",
    padding : "15vh 0 5vh 0",
    position : "absolute",
    top : "0",
    left  : "0",
    zIndex : "-10000",
    transform : "translateY(-100%)",
    opacity : "0",
    transition : "all 0.5s ease-in-out"
}

export default Nav;