import React, { useRef, useEffect } from 'react';
import img1 from '../imgs/students.jpeg';
import { TweenMax, Power3} from 'gsap';
import { useMediaQuery } from 'react-responsive'
var Home = (props) => {
    var img = useRef();
    var slider1 = useRef();
    var line1 = useRef();
    var line2 = useRef();
    var loader1 = useRef();
    var loaderDiv1 = useRef();
    var text1 = useRef();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    useEffect(() =>{
        TweenMax.fromTo(
            loader1.current,
            0.8,
            {width : "0"},
            {width : "100%", ease : Power3.easeInOut}
        ).delay(0.2);
        TweenMax.to(
            loaderDiv1.current,
            0.1,
            {display : "none"}
        ).delay(1);
        TweenMax.fromTo(
            img.current,
            0.8,
            {height : "0"},
            {height : "100%", ease : Power3.easeInOut}
        ).delay(1);
        TweenMax.to(
            img.current,
            0.8,
            {scale : "1", ease : Power3.easeInOut}
        ).delay(1.8);
        TweenMax.fromTo(
            slider1.current,
            0.4,
            {x : "-100%"},
            {x : "0%", ease : Power3.easeOut}
        ).delay(1.8);
        TweenMax.from(
            line1.current,
            0.6,
            {y : "138%",ease : Power3.easeOut}
        ).delay(2.4);
        TweenMax.from(
            line2.current,
            0.6,
            {y : "138%",ease : Power3.easeOut}
        ).delay(2.5);
        TweenMax.from(
            text1.current,
            0.6,
            {opacity : "0",ease : Power3.easeOut}
        ).delay(2.8);
    })
        return (
            <div style={landing} className="landing">
                <div style={hero} className="hero">
                            <img ref={img} src={img1} style={pic} className="pic" alt="" /> 
                </div>
                <div ref={slider1}  style={slider} className="slider"></div>
                <div style={isTabletOrMobile ? mtext : text} className="text">
                    <h1 style={isTabletOrMobile ? mheadLine : headLine} className="headLine">
                        <span style={isTabletOrMobile ? mhide : hide} ref={line1}>Computer Science</span> 
                    </h1>
                    <h1 style={isTabletOrMobile ? mheadLine : headLine} className="headLine">
                        <span style={isTabletOrMobile ? mhide : hide} ref={line2}>Department</span>
                    </h1>
                    <p style={isTabletOrMobile ? minfo : info} ref={text1}className="info">
                     Towards a Global Knowledge Hub, striving continuously in pursuit of excellence in Education, Research, consultancy and Technological services to the society
                    </p>
                </div>
                <div style={loaderDiv} ref={loaderDiv1}>
                    <div style={loader} ref={loader1}></div>
                </div>
            </div>
        );
}

var landing = {
    height : "100vh",
    width : "100vw",
    position : "relative",
    overflowX : "hidden"
}

var loaderDiv = {
    height : "100vh",
    width : "100vw",
    backgroundColor : "#131b21",
    position : "absolute",
    top: "0",
    left : "0",
    zIndex : 3,
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
}

var loader = {
    height : "4px",
    backgroundColor : "white",
}

var hero = {
    height : "100%",
    width  : "100%",
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
}

var pic ={
    transform : "scale(1.2)",
    height : "100%",
    width  : "100%",
    objectFit : "cover"
}

var slider = {
    height : "100vh",
    width : "100%",
    position : "absolute",
    top : "0",
    left : "0",
    background : "linear-gradient(to right, rgba(0,0,0,0.8),rgba(0,0,0,0.4))",
}

var text = {
    position : "absolute",
    top : "50%",
    left : "5%",
    color : "white",
    width : "90%"
}
var mtext = {
    position : "absolute",
    top : "60%",
    left : "2%",
    color : "white",
    width : "90%"
}

var headLine = {
    height : "5rem",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    fontFamily : "Oswald",
    fontSize : "4.8rem",
    position : "relative",
    overflow : "hidden"
}
var mheadLine = {
    height : "3rem",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    fontFamily : "Oswald",
    fontSize : "2.7rem",
    position : "relative",
    overflow : "hidden"
}

var hide = {
    display : "block",
    height : "100%",
    width : "100%",
    transform : "translateY(-32%)",
}
var mhide = {
    display : "block",
    height : "100%",
    width : "100%",
    transform : "translateY(-12%)",
}

var info = {
    width : "60%",
    fontWieght : "200",
    marginLeft : "0.5rem",
    fontSize : "1.2rem",
    marginTop : "1rem"
}
var minfo = {
    width : "100%",
    fontWieght : "200",
    marginLeft : "0.5rem",
    fontSize : "1.1rem",
    marginTop : "1rem",
    transform : "translateX(-4px)"
}

export default Home;