import React,{useRef} from 'react';
import { useIntersection } from 'react-use';
import { useMediaQuery } from 'react-responsive'
import gsap,{Power3} from 'gsap';
import img1 from "../imgs/fdp1.jpeg";
import img2 from "../imgs/fdp2.jpg";
import img3 from "../imgs/fdp3.jpg";
import img4 from "../imgs/fdp4.jpg";
import img5 from "../imgs/fdp5.jpg";
var FDPevents = (props) =>{
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
        drag(".events1");
    }
    return(
        <div ref={eventsBox} style={eventsContainer}>
            <h1 style={eventsTitle}>Faculty Development Programmes Held</h1>
            <div className="events1" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img1} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>One week FDP on "Internet of Things and Smart Applications"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>from 27.11.2017 to 01.12.2017</i></p>
                </div>
            </div>
            <div className="events1" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img2} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Four day FDP on "Developing Applications using Apple Technologies"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>from 21.08.2017 to 24.08.2017</i></p>
                </div>
            </div>
            <div className="events1" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img3} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>One day FDP on "Plickers Educational Tool"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>on 28.04.2017.</i></p>
                </div>
            </div>
            <div className="events1" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img4} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>Two day FDP on "Technical Writing Skills"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>from 06.07.2017 to 07.07.2017.</i></p>
                </div>
            </div>
            <div className="events1" style={tech_card}>
                <div style={isTabletOrMobile ? mimgContainer : imgContainer}>
                    <img style={isTabletOrMobile ? mpic : pic} src={img5} alt=""/>
                </div>
                <div style={isTabletOrMobile ? mtech_info : tech_info}>
                    <h3 style={eventName}>One week FDP on "Mobile Application Development using Android"</h3>
                    <p style={eventDesc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis aperiam porro, consequuntur ex voluptas nobis corrupti a, officiis nulla ducimus, cumque deleniti fugiat. Nisi fugiat tenetur vel tempora? Laboriosam, veritatis excepturi repudiandae impedit tenetur pariatur. Recu
                    </p>
                    <p style={authorDesc}><i>from 12.06.2017 to 17.06.2017</i></p>
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

export default FDPevents