import React from "react";
import img1 from "../imgs/git.png";
import img2 from "../imgs/insta.png";
import img3 from "../imgs/link.png";

var Footer = (props) => {
    return (
        <div style={footer}>
            <p style={fline}>© all copy rights reserved,made with immense love by K.E Thushar</p>
            <div style={contactIcons}>
                <div style={icons}><a target="_blank" href="https://www.instagram.com/thusharke25/?hl=en" ><img style={logo} src={img1} alt=""/></a></div>
                <div style={icons}><a target="_blank" href="https://www.linkedin.com/in/thushar-ke-b00ba51a0/" ><img style={logo} src={img2} alt=""/></a></div>
                <div style={icons}><a target="_blank" href="https://github.com/Thusharke" ><img style={logo} src={img3} alt=""/></a></div>
            </div>
        </div>
    );
}

var footer = {
    backgroundColor : "black",
    color : "whitesmoke",
    width : "100%",
    height : "18vh",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
}
var fline ={
    width : "80%",
    textAlign : "center"
}
var contactIcons = {
    marginTop : "2vh",
    display: "flex",
    width: "80%",
    justifyContent: "center"
}
var icons ={
    margin : "0 0.3rem",
    transition: "all 0.5s"
}
var logo = {
    height: "32px",
    width: "32px"
}

export default Footer;