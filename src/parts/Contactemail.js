import React from 'react';
import { useInView } from 'react-intersection-observer';

function Contactemail(props) {
    const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce:true});


    return (
        <>
        <div ref={myRef} className={`email ${myElementIsVisible ? 'appear': ''}`}>
            <h3 >{props.name}</h3>
            <a  href={`mailto:${props.email}`}>{props.email}</a>
        </div>
        </>
    );
  }
  
  export default Contactemail;