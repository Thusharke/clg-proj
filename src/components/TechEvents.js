import React,{useRef} from 'react';
import gsap,{Power3} from 'gsap';
import {useIntersection} from 'react-use'
import { useMediaQuery } from 'react-responsive'
import img1 from "../imgs/te1.jpg";
import img2 from "../imgs/te2.jpeg";
import img3 from "../imgs/te3.jpg";
import img4 from "../imgs/te4.jpg";
import img5 from "../imgs/te5.jpg";
var TechEvents = (props) =>{
    var eventsBox = useRef(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
    var observer = new useIntersection(eventsBox,{
        root : null,
        rootMargin : "0px",
        threshold : 0.3
    });

    var drag = (el) => {
        gsap.to(el,{
            x : "0",
            opacity : "1",
            duration : 1,
            stagger : {
                amount : 0.6
            },
            ease : Power3.easeOut
        })
    }


    if(observer && observer.intersectionRatio > 0.3){
        drag(".events");
    }
    return(
        <div ref={eventsBox} style={eventsContainer}>
            <h1 style={eventsTitle}>Technical Seminars Held</h1>
            <div className="events" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img1} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Problem Domains for Software Projects</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Mr. P. Sreenivas, Tech Manindra on 06.12.2017</i></p>
                </div>
            </div>
            <div className="events" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img2} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Machine Learning and Mobile Apps</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Dr. Madhu Udali, USA on 17.08.2017</i></p>
                </div>
            </div>
             <div className="events" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img3} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Software Designed Data Center</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Mr. Ram Karan, RCV Technologies on 08.08.2017</i></p>
                </div>
            </div>
            <div className="events" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img4} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Wireless Sensor Networks</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Dr. S V Srikanth, CDAC, Hyderabad on 28.07.2017</i></p>
                </div>
            </div>
            <div className="events" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img5} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Rapid prototyping - 3D technology</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Dr. Venkatesh, OU on 10.07.2017</i></p>
                </div>
            </div>
            
        </div>
    );
}

var eventsContainer = {
    width : "100%",
    height : "100%",
    backgroundColor : "rgb(216, 214, 255)",
    overflowY : "scroll"
}

var eventsTitle =   {
    margin : "2vh 0 1vh 0",
    textAlign : "center"
}

var tech_card = {
    transform : "translateX(40%)",
    opacity : "0",
    width : "90%",
    display : "flex",
    flexWrap : "wrap",
    margin : "2vh auto",
    borderRadius : "10px",
    backgroundColor : "rgb(181 181 181)"
}
var imgContainer = {
    width : "20%"
}
var mimgContainer = {
    width : "100%"
}
var pic = {
    width : "100%",
    height : "100%",
    borderTopLeftRadius : "10px",
    borderBottomLeftRadius : "10px",
    objectFit : "cover"
}
var mpic = {
    width : "100%",
    borderTopLeftRadius : "10px",
    borderBottomLeftRadius : "10px",
    objectFit : "cover"
}
var tech_info = {
    padding : "2vh",
    color : "black",
    width : "70%"
}
var mtech_info = {
    padding : "2vh",
    color : "black",
    width : "100%"
}

var eventName = {
    fontWeight : "bold",
    marginBottom : "1vh"
}

var eventDesc = {
    marginBottom : "1vh"
}

var authorDesc ={
    fontSize : "1rem",
    fontWeight : "bold"
}

export default TechEvents