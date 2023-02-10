import React from 'react';
import { useInView } from 'react-intersection-observer';


function Contactname(props) {
    const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce:true});
    return (
        <>
        <div ref={myRef} className={`name ${myElementIsVisible ? 'appear': ''}`}>
            <p>{props.name}</p>
            <a href={`tel:${props.phone}`}>{props.phone}</a>
        </div>
        </>
    );
  }
  
  export default Contactname;