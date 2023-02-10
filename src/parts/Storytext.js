import React from 'react';
import { useInView } from 'react-intersection-observer';

function Storytext(props) {

    const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce:true});
    const { ref: myRef2, inView: myElementIsVisible2 } = useInView({triggerOnce:true});
    return (
        <>
            <div className='text'>
                <p ref={myRef} className={`${myElementIsVisible ? 'appear' : ''}`}>{props.text1}</p>
                <p ref={myRef2} className={`${myElementIsVisible2 ? 'appear' : ''}`}>{props.text2}</p>
            </div>
        </>
    );
  }

  export default Storytext