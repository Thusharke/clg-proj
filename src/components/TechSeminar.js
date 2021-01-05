import React,{useRef} from "react";
import gsap,{TweenMax,Power3,ScrollTrigger} from 'gsap';
import {useIntersection} from 'react-use';
import img from "../imgs/techSem.jpeg";
import useHover from './hover.js';
import { useMediaQuery } from 'react-responsive'

const TechSeminar = () =>{

    var divRef = useRef(null);
    var [hoverRef,isHovered] = useHover();
    var imgRef = useRef(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    var intersection = new useIntersection(divRef,{
        root:null,
        rootMargin: "0px",
        threshold : 0.6
    });
    var slideUp = (line) => {
            gsap.to(
                line,
                {
                    y : "0%",
                    ease : Power3.easeInOut,
                    duration : 0.6,
                    stagger : {
                        amount : 0.2
                    }
                }
            );
    }
    // var open = (box) =>{
    //     gsap.to(
    //         box,
    //         {
    //             width : "100%",
    //             ease : Power3.easeInOut,
    //             duration : 1.5
    //         }
    //     );
    // }
    if((intersection.intersectionRatio > 0.6)){
        // open(".box");
        console.log("hello bosh")
        slideUp(".line");
    }

    if(isHovered){
        console.log("reyy");
        gsap.to(imgRef.current,{
            scale : "1.2",
            ease : Power3.easeOut,
            duration : 0.4
        })
    }
    else{
        gsap.to(imgRef.current,{
            scale : "1",
            ease : Power3.easeOut,
            duration : 0.4
        })
    }


    return(
        <div style={container} ref={divRef} >
            <div style={card} className="box" >
                <img ref={imgRef} style={pic} src={img} />
                <div ref={hoverRef} style={cardText}>
                    <h1 style={isTabletOrMobile ? mline : line}><span className="line" style={hide} >Technical</span></h1>
                    <h1 style={isTabletOrMobile ? mline : line}><span className="line" style={hide} >Seminars</span></h1>
                </div>
            </div>
        </div>
    );

}

var container = {
    height : "100%",
    width : "100%",
    cursor : "pointer"
}


var card = {
    height : "100%",
    width : "100%",
    backgroundColor : "rgba(0,0,0,0.4)",
    position : "relative",
    borderRadius : "8px",
    width : "100%",
    overflow : "hidden"
}
var pic = {
    height : "100%",
    width : "100%",
    position : "absolute",
    objectFit : "cover",
    top : "0",
    left : "0",
    borderRadius : "8px",
    zIndex : "-10",
    ':hover' : {
        transform : "scale(1.2)"
    }
}
var cardText = {
    height : "100%",
    width : "100%",
    textAlign : "center",
    position : "absolute",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    color : "white"
}
var line = {
    overflow : "hidden",
    pointerEvents : "none",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    fontSize : "1.9rem"
}
var mline = {
    overflow : "hidden",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    pointerEvents : "none",
    fontSize :"2rem"
}
var hide = {
    display : "block",
    width : "100%",
    height : "100%",
    transform : "translateY(220%)",
    pointerEvents : "none"
}


export default TechSeminar;