import React,{useRef} from 'react';
import facImg from "../imgs/facImg.jpeg";
import stuImg from "../imgs/stuImg.jpeg";
import uniImg from "../imgs/uniImg.jpeg";
import bgImg from  "../imgs/background.jpeg";
import journelImg from "../imgs/cvrJournel.jpg";
import "../stylesheets/table.css";
import {useRouteMatch,Link,Switch,Route} from "react-router-dom";
import FacultyRes from "../components/FacultyRes.js";
import { useMediaQuery } from 'react-responsive'

var Research = (props) => {
    var {path,url} = useRouteMatch();
    var facRef = useRef(null);
    var stuRef = useRef(null);
    var cvrRef = useRef(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });

    var showFac = () => {
        facRef.current.classList.add("active");
        stuRef.current.classList.remove("active");
        cvrRef.current.classList.remove("active");
    }
    var showStu = () => {
        facRef.current.classList.remove("active");
        stuRef.current.classList.add("active");
        cvrRef.current.classList.remove("active");
    }
    var showCvr = () => {
        facRef.current.classList.remove("active");
        stuRef.current.classList.remove("active");
        cvrRef.current.classList.add("active");
    }

    return (
       <div>
           <div style={navBG}></div>
           <h1 style={resTitle}>Research</h1>
           <div style={resHeadDiv}>
               <Link ref={facRef} style={resHead} onClick={showFac} to={`${url}/facultyResearch`}>
                    <img src={facImg} style={resHeadPic}  alt=""/><h2 style={isTabletOrMobile ? mresHeadTitle : resHeadTitle}>Faculty Reasearch</h2>
               </Link>
               <Link ref={stuRef} className="active" style={resHead} onClick={showStu} to={`${url}/studentResearch`}>
                    <img src={stuImg} style={resHeadPic}  alt=""/><h2 style={isTabletOrMobile ? mresHeadTitle : resHeadTitle}>Student Reasearch</h2>
               </Link>
               <Link ref={cvrRef} style={resHead} onClick={showCvr} to={`${url}/CVRJournel`}>
                    <img  src={uniImg} style={resHeadPic} alt=""/><h2 className="cvrj"  style={isTabletOrMobile ? mresHeadTitle : resHeadTitle}>CVR Journal</h2>
               </Link>
           </div>
           <div style={resContent}>
               <Switch>
                   <Route exact path = {`${path}`}>
                       <h1 style={resContentTitle}>Student Publications</h1>
                        
                        <table >
                            <thead>
                                <tr>
                                    <th>Name of the Student</th>
                                    <th>Department</th>
                                    <th>Title of the Paper/ Participation/Presentation</th>
                                    <th>National/ International/Journal/Conference/ Lecture</th>
                                    <th>Venue</th>
                                    <th>Date &amp; Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A. Praveen,Ch. Vikas Chandra</td>
                                    <td>EIE</td>
                                    <td>Converged Services &amp; a new generation of Networking</td>
                                    <td>by Dr. Bhumip Khasnabish</td>
                                    <td>Tata Consultancy Services, Deccan Park, Hyderabad</td>
                                    <td>13th July, 2010</td>
                                </tr>
                                <tr>
                                    <td>A. Praveen,Ch. Vikas Chandra</td>
                                    <td>EIE</td>
                                    <td>Converged Services &amp; a new generation of Networking</td>
                                    <td>by Dr. Bhumip Khasnabish</td>
                                    <td>Tata Consultancy Services, Deccan Park, Hyderabad</td>
                                    <td>13th July, 2010</td>
                                </tr>
                                <tr>
                                    <td>A. Praveen,Ch. Vikas Chandra</td>
                                    <td>EIE</td>
                                    <td>Converged Services &amp; a new generation of Networking</td>
                                    <td>by Dr. Bhumip Khasnabish</td>
                                    <td>Tata Consultancy Services, Deccan Park, Hyderabad</td>
                                    <td>13th July, 2010</td>
                                </tr>
                            </tbody>
                        </table>

                   </Route>
                   <Route exact path = {`${path}/studentResearch`}>
                        <h1 style={resContentTitle}>Student Publications</h1>
                        
                        <table >
                            <thead>
                                <tr>
                                    <th>Name of the Student</th>
                                    <th>Department</th>
                                    <th>Title of the Paper/ Participation/Presentation</th>
                                    <th>National/ International/Journal/Conference/ Lecture</th>
                                    <th>Venue</th>
                                    <th>Date &amp; Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A. Praveen,Ch. Vikas Chandra</td>
                                    <td>EIE</td>
                                    <td>Converged Services &amp; a new generation of Networking</td>
                                    <td>by Dr. Bhumip Khasnabish</td>
                                    <td>Tata Consultancy Services, Deccan Park, Hyderabad</td>
                                    <td>13th July, 2010</td>
                                </tr>
                                <tr>
                                    <td>A. Praveen,Ch. Vikas Chandra</td>
                                    <td>EIE</td>
                                    <td>Converged Services &amp; a new generation of Networking</td>
                                    <td>by Dr. Bhumip Khasnabish</td>
                                    <td>Tata Consultancy Services, Deccan Park, Hyderabad</td>
                                    <td>13th July, 2010</td>
                                </tr>
                                <tr>
                                    <td>A. Praveen,Ch. Vikas Chandra</td>
                                    <td>EIE</td>
                                    <td>Converged Services &amp; a new generation of Networking</td>
                                    <td>by Dr. Bhumip Khasnabish</td>
                                    <td>Tata Consultancy Services, Deccan Park, Hyderabad</td>
                                    <td>13th July, 2010</td>
                                </tr>
                            </tbody>
                        </table>

                   </Route>
                   <Route exact path = {`${path}/CVRJournel`}>
                        <h1 style={resContentTitle}>CVR Journel</h1>
                        <div style={bookDiv}>
                            <img src={journelImg} style={cvrjImg} alt="" />
                            <a style={{color : "white"}}href="http://cvr.ac.in/home4/Journal/Volume18.pdf">Volume 18, June 2020</a>
                        </div>
                   </Route>
                   <Route path = {`${path}/facultyResearch`}>
                        <FacultyRes />
                   </Route>
               
               </Switch>
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
    marginBottom : "5vh"
}
var resHeadDiv = {
    marginBottom : "3vh",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center"
}
var resHead = {
    display : "inline-block",
    textDecoration : "none",
    color : "white",
    width : "30%",
    fontSize : "1rem",
    borderRadius : "8px",
    textAlign : "center",
    position : "relative"
}
var resHeadPic = {
    display : "inline-block",
    position : "absolute",
    top : "0",
    left : "0",
    width : "100%",
    height : "100%",
    objectFit : "cover",
    zIndex : "-100",
    borderRadius : "8px"
}
var resHeadTitle = {
    padding : "10px 6px",
    color : "white",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    backgroundColor : "rgba(0,0,0,0.65)",
    borderRadius : "8px",
    fontSize : "1.8rem"
}
var mresHeadTitle = {
    padding : "10px 6px",
    color : "white",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    backgroundColor : "rgba(0,0,0,0.65)",
    borderRadius : "8px",
    fontSize : "1.4rem"
}

var resContent = {
    width : "95%",
    margin : "0 auto",
    backgroundImage : `linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${bgImg})`,
    backgroundPosition : "center",
    backgroundSize : "cover",
    backgroundRepeat : "no-repeat",
    borderRadius : "8px",
    padding : "8px 1px",
    marginBottom : "15vh"
}
var resContentTitle = {
    width : "95%",
    color : "white",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    textAlgin : "left",
    margin : "0 auto",
    marginBottom : "2vh"
}

var bookDiv = {
    margin : "0 auto",
    textAlign : "center",
    marginBottom : "10vh"
}

var cvrjImg = {
    width : "40%",
    display : "block",
    margin : "0 auto"
}

export default Research;