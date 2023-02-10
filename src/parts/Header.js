import React from 'react';
import { useInView } from 'react-intersection-observer';
function Header(props) {
// atsimink pataisyti trigger once visur

    const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce:true});


    return (<>
        <h1 ref={myRef} className={`head pr ${myElementIsVisible ? 'slide-in': ''}`}>

            <span>{props.light} </span>
            {props.bold}
        </h1>
        </>
    );
  }
  
  export default Header;

