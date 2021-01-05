import React,{useRef} from 'react';
import {useIntersection} from 'react-use';
import TechSeminar from "../components/TechSeminar.js";
import Workevents from "../components/Workevents.js";
import FDPevents from "../components/FDPevents.js";
import FDPs from "../components/FDPs.js";
import Workshop from "../components/Workshop.js";
import gsap,{Power3} from 'gsap';
import { useMediaQuery } from 'react-responsive'
import {useRouteMatch} from  'react-router-dom';
import TechEvents from '../components/TechEvents.js';

var About = () => {
    var {path,url} = useRouteMatch();
    var sec1 = useRef(null);
    var upDiv = useRef(null);
    var TechDiv = useRef(null);
    var FDPDiv = useRef(null);
    var WorkDiv = useRef(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    var sec1Observer = useIntersection(sec1 ,{
        root:null,
        rootMargin : "0px",
        threshold : 0.2
    })
    var divObserver = useIntersection(upDiv ,{
        root:null,
        rootMargin : "0px",
        threshold : 0.4
    })
    console.log(url + " url")
    console.log(path + " path")

    var animate = (el) =>{
        gsap.to(el,{
            y : "0",
            opacity : "1",
            duration : 0.6,
            stagger : {
                amount : 0.1
            },
            ease : Power3.easeOut
        })
    }
    var animate1 = (el) =>{
        gsap.to(el,{
            x : "0",
            opacity : "1",
            duration : 1,
            stagger : {
                amount : 0.5
            },
            ease : Power3.easeOut,
            delay : 0.4
        })
    }

    var showTechDiv = () => {
        document.body.style.overflow = "hidden"
        gsap.to(TechDiv.current,{
            display : "block",
            duration : 1
        })
    }
    var showFDPDiv = () => {
        document.body.style.overflow = "hidden"
        gsap.to(FDPDiv.current,{
            display : "block",
            duration : 1
        })
    }
    var showWorkDiv = () => {
        document.body.style.overflow = "hidden"
        gsap.to(WorkDiv.current,{
            display : "block",
            duration : 1
        })
    }

    var hideTechDiv = () => {
        document.body.style.overflow = "visible"
        gsap.to(TechDiv.current,{
            display : "none",
            duration : 0
        })
    }
    var hideFDPDiv = () => {
        document.body.style.overflow = "visible"
        gsap.to(FDPDiv.current,{
            display : "none",
            duration : 0
        })
    }
    var hideWorkDiv = () => {
        document.body.style.overflow = "visible"
        gsap.to(WorkDiv.current,{
            display : "none",
            duration : 0
        })
    }


    if(sec1Observer && sec1Observer.intersectionRatio > 0.2){
        console.log("push")
        animate(".push");
    }
    if(divObserver && divObserver.intersectionRatio > 0.4){
        console.log("pull")
        animate1(".pull");
    }
    
    return (
        <div style={aboutPage}>
            <h1 style={aboutTitle}>About Department</h1>
            <div style={section2}>
                    <div onClick = {showTechDiv} style={isTabletOrMobile ? mcardDiv : cardDiv}><TechSeminar /></div>
                    <div onClick = {showFDPDiv}  style={isTabletOrMobile ? mcardDiv : cardDiv}><FDPs /></div>
                    <div onClick = {showWorkDiv} style={isTabletOrMobile ? mcardDiv : cardDiv}><Workshop /></div>
            </div>
            <div ref = {sec1}style={section1}>
                <div className="push" style={isTabletOrMobile ? minfoDiv : infoDiv}>
                    <div style={info}>
                    <h3 style={infoTitle}>Department of Computer Science and Engineering</h3>
                        <p>
                            The Computer Science and Engineering department was started in the year 2001 with an intake of 60 B.Tech. students. The current B.Tech. intake is 300. The department also offers M.Tech. in Artificial Intelligence (with an intake of 18) and Ph.D. The department was accredited by the National Board of Accreditation (NBA) of All India Council for Technical Education (AICTE) in the year 2007.<br />
                            The faculty in the department consists of seven Professors, ten Associate Professors, out of which nine are pursuing Ph.D. in their respective areas from JNTU, OU and UoH, and twenty six Assistant Professors, out of which one is pursuing Ph.D. The department has expertise in the areas of Cloud Computing, Secure Computing, Software Engineering, Image Processing, Data Mining, Mobile Computing, and Parallel Programming.<br />
                            Major achievements by  students of this department include the award of 3 Gold Medals by JNTU(H) to Mr. Harsh H. Shah, during 2008-09 (for outstanding academic performance among all affiliated colleges).<br />
                            The department has set up 2 research labs for encouraging research activity. The department is equipped with licensed software like Rational Rose, the latest Microsoft software through an Microsoft Imagine subscription, as well as a Digital Library. Along with Windows and Linux, various advanced operating systems (Windows Server, MacOS, VMWare) are available in the labs. Labs are also equipped with the latest IBM/HP/Apple servers. There is a separate Apple Lab with iMac and Mac Mini systems. Students also have access to devices like tablets (iOS, Android) for doing projects. Certification oriented programs are conducted regularly to better prepare students for industry (e.g., Adobe Flex, IBM DB2, EMC SAN, Infosys Campus Connect).
                        </p>
                    </div>
                </div>
                <div ref={upDiv} className="push" style={isTabletOrMobile ? mupdatesDiv : updatesDiv}>
                    <div style={updates}>
                        <h4 style={newsTitle}>Mission</h4>
                        <div className="pull" style={update}>
                            <p style={mtext}>To produce the best quality Computer Science professionals by imparting quality training, hands on experience and value education</p>
                        </div>
                        <div className="pull" style={update}>
                            <p style={mtext}>To strengthen links with industry through partnerships and collaborative developmental works</p>
                        </div>
                        <div className="pull" style={update}>
                            <p style={mtext}>To strengthen links with industry through partnerships and collaborative developmental works</p>
                        </div>
                        <div className="pull" style={update}>
                            <p style={mtext}>To extend technical expertise to other technical institutions of the region and play a lead role in imparting technical education</p>
                        </div>
                        <div className="pull" style={update}>
                            <p style={mtext}>To inculcate work ethics and commitment in students for their future endeavors to serve the society.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={TechDiv} style={eventDiv}>
                <div onClick = {hideTechDiv} style={close}><i style={icon} class="fas fa-arrow-left fa-lg"></i></div>
                <TechEvents />
                </div>
            <div ref={FDPDiv}  style={eventDiv}>
                <div onClick = {hideFDPDiv} style={close}><i style={icon} class="fas fa-arrow-left fa-lg"></i></div>
                <FDPevents />
            </div>
            <div ref={WorkDiv} style={eventDiv}>
                <div onClick = {hideWorkDiv} style={close}><i style={icon} class="fas fa-arrow-left fa-lg"></i></div>
                <Workevents />
            </div>
        </div>
    );
}

var close ={
    position : "fixed",
    top : "2.5vh",
    left : "0",
    width : "35px",
    height : "35px",
    backgroundColor : "rgb(207, 61, 48)",
    color : "white",
    textAlign : "center",
    lineHeight : "35px",
    cursor : "pointer",
    zIndex : "100"
}
var icon = {
    position : "relative",
    transform : "translateY(2px)"
}


var aboutPage = {
    color : "black",
    overflowX : "hidden"
}
var aboutTitle = {
    fontFamily : "Oswald",
    padding : "1.95rem",
    color : "#d8d6ff"
}
var section1 = {
    width : "100%",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "space-around",
    alignItems : "center",
    marginBottom : "5vh"
}
var infoDiv = {
    width : "60vw",
    transform : "translateY(50px)",
    opacity : "0"
}
var minfoDiv = {
    width : "90vw",
    transform : "translateY(50px)",
    opacity : "0",
    marginBottom : "2vh"
}
var infoTitle = {
    textAlign : "center",
    color : "#282c34",
    marginBottom : "0.6rem"
}
var info = {
    width : "100%",
    backgroundColor : "#d8d6ff",
    borderRadius : "5px",
    padding : "20px"
}
var updatesDiv = {
    width : "30vw",
    alignSelf : "start",
    transform : "translateY(30%)",
    opacity : "0"
}
var mupdatesDiv = {
    width : "90vw",
    alignSelf : "start",
    transform : "translateY(30%)",
    opacity : "0"
}
var updates = {
    width : "100%",
    backgroundColor : "#d8d6ff",
    borderRadius : "5px",
    padding : "20px",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "space-around",
    alignItems : "center",
}
var update = {
    width : "97%",
    borderRadius : "5px",
    border : "1px solid #9faadc",
    padding : "5px",
    marginBottom : "0.4rem",
    backgroundColor : "#282c34",
    color : "white",
    transform : "translateX(40%)",
    opacity : "0"
}
var mtext =  {
    fontSize : "0.95rem"
}
var newsTitle = {
    textAlign : "left",
    color : "#282c34",
    width : "97%",
    marginBottom : "0.6rem"
}
var section2 = {
    marginBottom : "2rem",
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "space-evenly",
    alignItems : "strech"
}

var cardDiv = {
    width : "30%",
    height : "22vh",
    position : "relative"
}
var mcardDiv = {
    width : "95%",
    height : "25vh",
    position : "relative",
    marginBottom : "3vh"
}
var eventDiv = {
    height : "100vh",
    width : "100vw",
    position : "fixed",
    top : "0",
    left: "0",
    display : "none",
    zIndex : "500"
}

export default About;