import React from 'react';
import { useInView } from 'react-intersection-observer';

function Video(props) {
    const { ref: myRef1, inView: myElementIsVisible1 } = useInView({triggerOnce:true});

    const { ref: myRef2, inView: myElementIsVisible2 } = useInView({triggerOnce:true});

    return (
        <section className={`video-con `} id='video-con'>
            <video ref={myRef1} className={`video video-deskt ${myElementIsVisible1 ? 'appear': ''}`} autoPlay playsInline muted loop src={props.video.videoDesktop.mediaItemUrl}></video>
            <video ref={myRef2} className={`video video-mob ${myElementIsVisible2 ? 'appear': ''}`} autoPlay playsInline muted loop src={props.video.videoMobile.mediaItemUrl}></video>
        </section>
    );
  }
  
  export default Video;