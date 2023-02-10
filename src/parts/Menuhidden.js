import { useInView } from 'react-intersection-observer';
import React from 'react';

function Menuhidden(props) {
const { ref: myRef, inView: myElementIsVisible } = useInView();

    return (
        <>
   <span style={{opacity:0}} ref={myRef} className={`${myElementIsVisible?'appear':''}`}> {props.hidden}</span>
        </>
    );
  }
  
  export default Menuhidden;