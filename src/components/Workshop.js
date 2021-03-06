import React,{useRef} from "react";
import gsap,{Power3} from 'gsap';
import img from "../imgs/WorkShop.jpeg";
import useHover from './hover.js'
import { useMediaQuery } from 'react-responsive'

const Workshop = () =>{
    var [hoverRef,isHovered] = useHover();
    var imgRef = useRef(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
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
        <div style={card} className="box">
            <img ref={imgRef} src={img} style={pic} alt="" />
            <div ref={hoverRef} style={cardText}>
                <h1 style={isTabletOrMobile ? mline : line}><span className="line" style={hide} >Workshops</span></h1>
            </div>
        </div>
    );

}
    

var card = {
    cursor : "pointer",
    height : "100%",
    width : "100%",
    backgroundColor : "rgba(0,0,0,0.4)",
    position : "relative",
    borderRadius : "8px",
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
    zIndex : "-10"
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
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    pointerEvents : "none"
}
var mline = {
    overflow : "hidden",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    pointerEvents : "none",
    fontSize :"1.8rem"
}
var hide = {
    display : "block",
    width : "100%",
    height : "100%",
    transform : "translateY(220%)",
    pointerEvents : "none"
}


export default Workshop;