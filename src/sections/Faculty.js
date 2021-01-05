import React from "react";
import img1 from "../imgs/fac1.jpg";
import img2 from "../imgs/fac2.jpg";
import img3 from "../imgs/fac3.jpg";
import img4 from "../imgs/fac4.jpg";
import { useMediaQuery } from 'react-responsive'

var Faculty = (props) =>{
    // window.scrollTo(0,0);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    return (
        <div>
            <div style={navBG}></div>
            <h1 style={facTitle}>Faculty</h1>
            <div style={mainFac}>
                <div style={isTabletOrMobile ? mmFac : mFac }>
                    <img style={pic} src={img1} alt="" />
                    <div style={p_head}>
                        <h6 style={mname}>Dr. N.V. Rao</h6>
                        <h5 style={role}>Emeritus Professor &amp; Dean Academics</h5>
                    </div>
                </div>
                <div style={isTabletOrMobile ? mmFac : mFac }>
                    <img style={pic} src={img2} alt="" />
                    <div style={p_head} >
                        <h6 style={mname}>Prof. L.C. Siva Reddy</h6>
                        <h5 style={role}>Prof. &amp; Vice Principal</h5>
                    </div>
                </div>
                <div style={isTabletOrMobile ? mmFac : mFac }>
                    <img style={pic} src={img3} alt="" />
                    <div style={p_head}>
                        <h6 style={mname}>Dr. K. Venkateswara Rao</h6>
                        <h5 style={role}>Professor &amp; HoD</h5>
                    </div>
                </div>
                <div style={isTabletOrMobile ? mmFac : mFac }>
                    <img style={pic} src={img4} alt="" />
                    <div style={p_head}>
                        <h6 style={mname}>Dr. K. Narendar Reddy</h6>
                        <h5 style={role}>Professor &amp; Associate Dean</h5>
                    </div>
                </div>
            </div>
            <div style={allFac}>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. Raghava M</h4>
                    <p style={facRole}>Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. A. Vani Vathsala</h4>
                    <p style={facRole}>Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. N. Satyanarayana</h4>
                    <p style={facRole}>Associate Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. G. Balakrishna</h4>
                    <p style={facRole}>Associate Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. Raghava M</h4>
                    <p style={facRole}>Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. A. Vani Vathsala</h4>
                    <p style={facRole}>Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. N. Satyanarayana</h4>
                    <p style={facRole}>Associate Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. G. Balakrishna</h4>
                    <p style={facRole}>Associate Professor</p>
                </div> 
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. Raghava M</h4>
                    <p style={facRole}>Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. A. Vani Vathsala</h4>
                    <p style={facRole}>Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. N. Satyanarayana</h4>
                    <p style={facRole}>Associate Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. G. Balakrishna</h4>
                    <p style={facRole}>Associate Professor</p>
                </div> 
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. Raghava M</h4>
                    <p style={facRole}>Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. A. Vani Vathsala</h4>
                    <p style={facRole}>Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. N. Satyanarayana</h4>
                    <p style={facRole}>Associate Professor</p>
                </div>
                <div style={isTabletOrMobile ? mfac : fac}>
                    <h4 style={facName}>Dr. G. Balakrishna</h4>
                    <p style={facRole}>Associate Professor</p>
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
var facTitle = {
    fontSize : "40px",
    color : "white",
    width : "95%",
    margin : "18vh auto",
    marginBottom : "0",
    paddingLeft : "5px"
}
var mainFac ={
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center",
    flexWrap : "wrap"
}
var mFac = {
    width : "22%",
    margin : "2rem 3px",
    backgroundColor: "rgb(65, 65, 65)",
    border: "1px solid rgb(59, 124, 236)",
    borderRadius: "10px",
    color : "white",
    padding : "0",
    position: "relative",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.46)",
    transition: "all 0.1s"
}
var mmFac = {
    width : "80%",
    margin : "2rem 3px",
    backgroundColor: "rgb(65, 65, 65)",
    border: "1px solid rgb(59, 124, 236)",
    borderRadius: "10px",
    color : "white",
    padding : "0",
    position: "relative",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.46)",
    transition: "all 0.1s"
}
var pic = {
    display : "block",
    height : "100%",
    width : '100%',
    objectFit : "contain",
    borderRadius : "10px"
}
var p_head = {
    position : "absolute",
    bottom : "0",
    left : "0",
    width : "100%",
    textAlign : "center",
    padding : "5px",
    height : "auto",
    backgroundColor : "rgba(19, 27, 33,0.8)",
    borderBottomLeftRadius : "10px",
    borderBottomRightRadius : "10px"
}
var mname = {
    fontWeight : "bold",
    fontSize : "1.2rem"
}
var role = {
    fontWeight : "normal",
    fontSize : "1rem"
}
var allFac = {
    margin : "2vh 0",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center",
    flexWrap : "wrap"
}
var fac = {
    width : "23%",
    marginBottom : "1.2rem",
    borderRadius  : "10px",
    backgroundColor : "#d8d6ff",
    textAlign : "center"
}
var mfac = {
    width : "47%",
    marginBottom : "1.2rem",
    borderRadius  : "10px",
    backgroundColor : "#d8d6ff",
    textAlign : "center"
}
var facName ={
    marginTop : "0.5rem",
    color : "rgb(19, 27, 33)"
}
var facRole ={
    marginBottom : "0.5rem",
    color : "rgb(19, 27, 33)"
}
export default Faculty;