import React,{useRef,useEffect} from 'react';
import {useRouteMatch,Link,Switch,Route} from "react-router-dom";
import "../stylesheets/table.css";
import {useIntersection} from 'react-use'
import gsap,{Power3} from 'gsap';
import { useMediaQuery } from 'react-responsive'

var FacultyRes = (props) =>{
        var {path,url} = useRouteMatch();
        var pubRef = useRef(null);
        var preRef = useRef(null);
        var semRef = useRef(null);

        const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
        var showPub = () => {
                pubRef.current.classList.add("activeSub");
                preRef.current.classList.remove("activeSub");
                semRef.current.classList.remove("activeSub");
        }
        var showPre = () => {
                pubRef.current.classList.remove("activeSub");
                preRef.current.classList.add("activeSub");
                semRef.current.classList.remove("activeSub");
        }
        var showSem = () => {
                pubRef.current.classList.remove("activeSub");
                preRef.current.classList.remove("activeSub");
                semRef.current.classList.add("activeSub");
        }

        return (
                <div >
                <div style={facLinks}>
                        <Link ref={pubRef} style={isTabletOrMobile ? mresHead : resHead} onClick={showPub} to={`${url}/publications`}>
                                <h3   style={isTabletOrMobile ? mresHeadTitle : resHeadTitle}>Publications</h3>
                        </Link>
                        <Link ref={preRef} style={isTabletOrMobile ? mresHead : resHead} onClick={showPre} to={`${url}/presentations`}>
                                <h3  style={isTabletOrMobile ? mresHeadTitle : resHeadTitle}>Presentations</h3>
                        </Link>
                        <Link ref={semRef} style={isTabletOrMobile ? mresHead : resHead} onClick={showSem} to={`${url}/seminars`}>
                                <h3  style={isTabletOrMobile ? mresHeadTitle : resHeadTitle}>Seminars</h3>
                        </Link>
                </div>

                <Switch>
                        <Route exact path={`${path}/publications`}>
                                <h1 style={resContentTitle}>Publications</h1>
                                <div className="resText" style={resText}>
                                        1. Ms. Humaira Nishat, Assoc. Professor and Mr. Shakeel Ahmed, Sr. Asst. Professor, both of ECE Department, published a paper entitled “Performance evaluation of on-demand routing protocols AODV and modified AODV (R - AODV) in MANETs” in International Journal of Computer Applications Vol 2 No 1 pp 94-101.
                                </div>
                                <div className="resText" style={resText}>
                                        2. Dr. Bhatt, Professor, Department of Management Studies, published a paper on “The Primacy of University Industry Knowledge Transfer” in the seminar proceedings of an AICTE sponsored 2 Day National Seminar on Changing Paradigm in Management Education &amp; its relevance to Business Corporations, pp 57-62 on 4th &amp; 5th March, 2011.
                                </div>
                                <div className="resText" style={resText}>
                                        3. Dr. Bhatt, Professor, Department of Management Studies, published a paper on “Relevance of Management Studies in Non Government Organizations” in the seminar proceedings of an AICTE sponsored 2 Day National Seminar on Changing Paradigm in Management Education &amp; its relevance to Business Corporations, pp 153-158 on 4th &amp; 5th March, 2011.
                                </div>
                                <div className="resText" style={resText}>
                                        4. Ms. T. Esther Rani, Sr. Asst. Professor, ECE Department, presented a paper on “Area And Power Optimised Multipliers With Minimum Leakage” at the IEEE International Conference on Electronics Computer Technology (ICECT) in Kanyakumari, India 8th-9th June, 2011 and the same was published in the conference proceedings.
                                </div>
                                <div className="resText" style={resText}>
                                        5. Ms. Humaira Nishat, Assoc. Professor, ECE Department, published a paper entitled “Performance Evaluation Of Routing Protcols in Manets” in the International Journal of Wireless and Mobile Networks Vol 3 No 2 on 11th June 2011.
                                </div>
                                <div className="resText" style={resText}>
                                        6. Ms. Humaira Nishat, Assoc. Professor, ECE Department published a paper entitled “Energy Aware Qos On-Demand Routing Protocols for Manets” in the International Journal of Computer Applications Vol 23 No 8 pp 12-17 on 11th June, 2011.
                                </div>
                        </Route>
                        <Route exact path={`${path}/presentations`}>
                                <h1 style={resContentTitle}>Presentations</h1>
                                <div className="resText1" style={resText1}>
                                1. Dr. B. Archana, Assoc. Professor, Department of Management Studies, presented a paper on “Extracts from Vedas for the changes needed in the curriculum of MBA Colleges” at a 2 day National Seminar on "Changing Paradigm In Management Education &amp; Its Relevance to Business Corporations", sponsored by AICTE, at CVR College of Engineering on 4th &amp; 5th March, 2011.
                                </div>
                                <div className="resText1" style={resText1}>
                                2. Ms. Asifa Tazeem, Asst. Professor, Department of Management Studies, presented a paper on “Role Of Management Education in Shaping The Economy” at a 2 day National Seminar on "Changing Paradigm In Management Education &amp; Its Relevance to Business Corporations", sponsored by AICTE, at CVR College of Engineering on 4th &amp; 5th March, 2011.
                                </div>
                                <div className="resText1" style={resText1}>
                                3. Ms. S. Lalita, Asst. Professor, Department of Management Studies, presented a paper on “Research in Management Education &amp; Development” at a 2 Day National Seminar on "Changing Paradigm in Management Education &amp; Its relevance to Business Corporations", sponsored by AICTE, at CVR College of Engineering on 4th &amp; 5th March, 2011.
                                </div>
                                <div className="resText1" style={resText1}>
                                4. Ms. Vanishree Sah, Asst. Professor, Department of Management Studies, presented a paper on “Industry Needs &amp; Orientation” at a 2 Day National Seminar on "Changing Paradigm in Management Education &amp; Its relevance to Business Corporations", sponsored by AICTE, at CVR College of Engineering on 4th &amp; 5th March, 2011.
                                </div>
                                <div className="resText1" style={resText1}>
                                5. Dr. B. Archana, Assoc. Professor, Department of Management Studies, presented a paper on “Green &amp; Eco Friendly Environment - A Management Prespective” at AMS School of Informatics on 9th March 2011.
                                </div>
                                <div className="resText1" style={resText1}>
                                6. Mr. G. Sreedhar Sarma, Asst. Professor, Humanities &amp; Sciences Department, presented a paper on “Effects of Unsteady Free Convective Mhd Flow through a Porous Medium With Variable Suction” at a National Conference on Advances in Mathematical Sciences at SV University, Tirupathi on 28th &amp; 29th March 2011.
                                </div>
                        </Route>
                        <Route exact path={`${path}/seminars`}>
                                <h1  style={resContentTitle}>Seminars</h1>
                                <div className="resText2" style={resText2}>
                                1. C. Ramesh, Associate Professor of CSE Department, participated in a workshop on “Data Mining” conducted at Chadalawada Engineering College, during the period 12th July – 16th July, 2010.
                                </div>
                                <div className="resText2" style={resText2}>
                                2. Ch. Rammohan, Associate Professor of CSE Department, participated in a workshop on “Cryptography and Network Security” organized by Vignan University, Guntur from 12th July – 16th July, 2010.
                                </div>
                                <div className="resText2" style={resText2}>
                                3. M. Raghava, Associate Professor of CSE Department, participated in a five-day workshop on “SAP as Part of SAP University Alliance Program” organized by JEG Hyderabad from 24th Aug – 28th Aug, 2010.
                                </div>
                                <div className="resText2" style={resText2}>
                                4. N. Nagarjuna, Asst.Professor of CSE Department, participated in a five-day workshop on “Computer Networks” at KIIT University, Bhubaneswar from 12th July – 16th July, 2010.
                                </div>
                                <div className="resText2" style={resText2}>
                                5. Ms. V. Sowjanya, Asst. Professor of CSE Department, participated in a six-day International Conference on “Computing with Scientific Python” organized by ISB, Hyderabad and Mahindra Satyam, Hitech City.
                                </div>
                                <div className="resText2" style={resText2}>
                                6. Ms. S. Bharatipriya, Asst. Professor of CSE Department, participated in a five day workshop on “Software Engineering” from 28th June – 2nd July at Madhavi Thyagaraja College of Engineering.
                                </div>
                        </Route>
                </Switch>
        </div>
);
}
var resContentTitle = {
    width : "95%",
    color : "white",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    textAlgin : "left",
    margin : "4vh auto",
    marginBottom : "2vh"
}
var facLinks = {
    width : "100%",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center"
}

var resText = {
    width : "95%",
    backgroundColor : "#1e2127",
    borderRadius : "9px",
    border : "1px solid #848484",
    padding : "10px",
    margin : "0 auto",
    marginBottom : "1vh",
    color : "white"
}
var resText1 = {
        width : "95%",
        backgroundColor : "#1e2127",
        borderRadius : "9px",
        border : "1px solid #848484",
        padding : "10px",
        margin : "0 auto",
        marginBottom : "1vh",
        color : "white"
    }
    var resText2 = {
        width : "95%",
        backgroundColor : "#1e2127",
        borderRadius : "9px",
        border : "1px solid #848484",
        padding : "10px",
        margin : "0 auto",
        marginBottom : "1vh",
        color : "white"
    }
var resHeadTitle = {
    padding : "8px",
    color : "white",
    textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
    backgroundColor : "#1e2127",
    borderRadius : "8px",
    fontSize : "1.5rem",
    transitions : "all 1s"
}
var mresHeadTitle = {
padding : "2px",
color : "white",
textShadow: "2px 2px 1px rgba(0, 0, 0, 0.72)",
backgroundColor : "#1e2127",
borderRadius : "8px",
fontSize : "1.15rem",
transitions : "all 1s"
}

var resHead = {
    display : "inline-block",
    textDecoration : "none",
    color : "white",
    width : "20%",
    fontSize : "1rem",
    borderRadius : "8px",
    textAlign : "center",
    position : "relative",
    margin : "0 1vw",
    marginTop : "6px",
    backgroundColor : "#282c34",
}
var mresHead = {
        display : "inline-block",
        textDecoration : "none",
        color : "white",
        width : "33%",
        fontSize : "1rem",
        borderRadius : "8px",
        textAlign : "center",
        position : "relative",
        margin : "0 1vw",
        backgroundColor : "#282c34",
    }

export default FacultyRes;