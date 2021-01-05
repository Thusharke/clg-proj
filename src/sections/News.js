import React from 'react';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "../stylesheets/hover.css";
import img1 from "../imgs/new1.jpg";
import img2 from "../imgs/new2.jpg";
import img3 from "../imgs/new3.jpg";
import img4 from "../imgs/new4.jpg";
import { useMediaQuery } from 'react-responsive';

var slides = [
    {
        key : 1,
        content : <img src={img3} alt=""/>
    },
    {
        key : 2,
        content : <img src={img2} alt=""/>
    },
    {
        key : 3,
        content : <img src={img1} alt=""/>
    },
    {
        key : 4,
        content : <img src={img4} alt=""/>
    }
]

var  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
};

var News = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    return (
       <div>
           <div style={navBG}></div>
           <h1 style={resTitle}>News</h1>
           <div style={contentDiv}>
                <div style={isTabletOrMobile ? msection1 : section1}>
                    <div style={achiDiv}>
                    <h1 style={aboutTitle}>Achievements</h1>
                        <div style={isTabletOrMobile ? machiPics : achiPics }>
                            <Carousel
                                slides={slides} 
                                goToSlide={state.goToSlide}
                                offsetRadius={state.offsetRadius}
                                showNavigation={state.showNavigation}
                                animationConfig={state.config}
                            />
                        </div>
                        <div style={achis}>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR Students Shine at Smart India Hackathon 2019</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR Alumni are part of the movies "Antariksham 9000 kmph", "The Ghazi” and "AWE"</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">Director of the college, Prof. K. Ramasastri, awarded the Lifetime Achievement award by ISTE</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR is proud to have been a host of the world's biggest hackathon</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR conducts online Graduation Day for 2020 batch</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR conducts online Graduation Day for 2020 batch</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR establishes Apple Lab</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR introduces new M.Tech. courses in AI and Data Sciences</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">The Week rates CVR as the second best private engineering college in Telangana, 43rd in the country</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR Students Shine at Smart India Hackathon 2019</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR Alumni are part of the movies "Antariksham 9000 kmph", "The Ghazi” and "AWE"</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">Director of the college, Prof. K. Ramasastri, awarded the Lifetime Achievement award by ISTE</h3>
                            <h3 style={isTabletOrMobile ? machi : achi} className="nlink">CVR is proud to have been a host of the world's biggest hackathon</h3>
                        </div>
                    </div>
                </div>
                <div style={isTabletOrMobile ? msection2 : section2}>
                    <div style={latDiv}>
                        <h3 style={infoTitle}>Latest Updates</h3>
                        <p style={lnew} className="nlink">B.Tech IV Year II Semester Advanced Supplementary Examinations (R15,R12,R11: 2011-2016 Admitted Batches) Notification</p>
                        <p style={lnew} className="nlink">B.Tech IV Year I Semester I Mid Examinations Timetable</p>
                        <p style={lnew} className="nlink">Notice regarding rescheduled B.Tech I Year II Semester Main &amp; Supplementary (R18,R15&amp;R12) Examination on 1-12-2020</p>
                        <p style={lnew} className="nlink">Revised Schedule for Supplementary Examinations of B.Tech I Year I Semester (R12&amp;R15)</p>
                        <p style={lnew} className="nlink">B.Tech. I Year II Semester Lab External Examinations Time Table for students who appeared for theory exams at District Center</p>
                        <p style={lnew} className="nlink">Revised Schedule for B.Tech II/II (R12&amp;R15) Supplementary Examinations on 8-12-2020</p>
                        <p style={lnew} className="nlink">B.Tech I &amp; II Year I Semester Supplementary Examinations (R18: 2018&amp;2019 Admitted Batches) Notification</p>
                        <p style={lnew} className="nlink">B.Tech I &amp; II Year I Semester Supplementary Examinations (R18: 2018&amp;2019 Admitted Batches) Timetable</p>
                        <p style={lnew} className="nlink">Notice regarding scholarships for B.Tech. First Year SC/ST/BC/EBC/Minority/ Disabled students</p>
                    </div>
                    <div style={qlinkDiv}>
                        <h3 style={newsTitle}>Quick Links</h3>
                        <p style={qlink} className="nlink">CVR Journal of Science and Technology</p>
                        <p style={qlink} className="nlink">Administrative Audit Report</p>
                        <p style={qlink} className="nlink">AICTE EOA 2019-20</p>
                        <p style={qlink} className="nlink">UGC Minor Research Project</p>
                    </div>
                    <div style={acaTime}>
                        <h3 style={newsTitle}>Academic Calenders</h3>
                        <p style={alink} className="nlink">B.Tech.</p>
                        <p style={alink} className="nlink">M.Tech.</p>
                    </div>
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
var resTitle = {
    fontSize : "40px",
    color : "white",
    width : "95%",
    margin : "18vh auto",
    marginBottom : "0"
}
var aboutTitle = {
    fontFamily : "Oswald",
    padding : "1.95rem",
    color : "#282c34"
}
var contentDiv = {
    width : "100%",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center"
}

var section1 = {
    width : "65%"
}
var msection1 = {
    width : "95%"
}
var achiDiv = {
    width : "95%",
    margin : "2vh auto",
    backgroundColor : '#d8d6ff',
    borderRadius : "8px",
    paddingBottom : "5vh"
}
var achiPics = {
    display : "block",
    height : "60vh",
    width : "90%",
    margin : "0 auto",
    textAlign : "center"
}
var machiPics = {
    display : "block",
    height : "40vh",
    width : "90%",
    margin : "0 auto"
}
var achis = {
    marginTop : "12vh",
    color : "#282c34",
    padding : "0 1vw",
    textAlign : "center"
}
var achi = {
    width : "95%",
    border : '1px solid #282c34',
    color : "rgb(207, 61, 48)",
    padding : "5px",
    margin : "0 auto",
    borderRadius : "5px",
    marginBottom : "2vh",
    fontWeight : "normal"
}
var machi = {
    width : "95%",
    border : '1px solid #282c34',
    color : "rgb(207, 61, 48)",
    padding : "5px",
    margin : "0 auto",
    borderRadius : "5px",
    marginBottom : "2vh",
    fontSize : "1rem",
    fontWeight : "normal"
}
var latDiv = {
    width : "95%",
    margin : "2vh auto",
    backgroundColor : '#d8d6ff',
    padding : "10px",
    borderRadius : "8px"
}
var infoTitle = {
    fontFamily : "Oswald",
    textAlign : "center",
    color : "#282c34",
    marginBottom : "0.6rem"
}
var lnew = {
    width : "95%",
    border : '1px solid #282c34',
    color : "#282c34",
    padding : "5px",
    margin : "0 auto",
    borderRadius : "5px",
    marginBottom : "2vh"
}

var section2 = {
    width : "25%"
}
var msection2 = {
    width : "95%"
}
var newsTitle = {
    fontFamily : "Oswald",
    textAlign : "center",
    color : "#282c34",
    width : "97%",
    marginBottom : "0.6rem"
}
var qlinkDiv = {
    width : "95%",
    margin : "2vh auto",
    backgroundColor : '#d8d6ff',
    padding : "5px",
    borderRadius : "8px"
}
var qlink ={
    width : "95%",
    border : '1px solid #282c34',
    color : "#282c34",
    padding : "5px",
    margin : "0 auto",
    borderRadius : "5px",
    marginBottom : "1vh"
}
var acaTime = {
    width : "95%",
    margin : "2vh auto",
    backgroundColor : '#d8d6ff',
    padding : "5px",
    paddingBottom : "15px",
    borderRadius : "8px"
}
var alink = {
    textAlign : 'center'
}

export default News;