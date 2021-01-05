import React,{useRef} from 'react';
import gsap,{Power3} from 'gsap';
import {useIntersection} from 'react-use'
import img1 from "../imgs/we1.jpg";
import img2 from "../imgs/we2.jpeg";
import img3 from "../imgs/we3.jpg";
import img4 from "../imgs/we4.jpg";
import { useMediaQuery } from 'react-responsive'
var Workevents = (props) =>{
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
        drag(".events2");
    }
    return(
        <div ref={eventsBox} style={eventsContainer}>
            <h1 style={eventsTitle}>Workshops Held</h1>
            <div className="events2" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img1} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>One day workshop on "Introduction to Django Framework"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Mr. Priteesh Panchmahalkar, Alumini of CVRCE on 17.07.2017.</i></p>
                </div>
            </div>
            <div className="events2" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img2} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Two day workshop on "Python Programming"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Mr. D. Sujan Kumar, CVRCE from 21.03.2017 to 22.03.2017</i></p>
                </div>
            </div>
            <div className="events2" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img3} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>One day workshop on "Advanced Java Scripts Technologies"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Mr. Kotaru Keerti, FreeLancer, on 28.01.2017.</i></p>
                </div>
            </div>
            <div className="events2" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img4} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Two day workshop on "Public Key Infrastructure"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>by Dr. Mishbuddin and Team, CDAC, from 21.01.2016 to 22.01.2016</i></p>
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

export default Workevents