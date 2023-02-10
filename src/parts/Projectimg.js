import { useInView } from 'react-intersection-observer';
import React from 'react';

function Projectimg(props) {
    const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce:true});

    return (
        <>
            <div className={`project-img ${myElementIsVisible ?  '' : ''}` }>
                <img ref={myRef} src={props.src} alt={props.alt} className={`${myElementIsVisible ?  '' : ''}` }></img>
            </div>
        </>
    );
  }

  export default Projectimg
  