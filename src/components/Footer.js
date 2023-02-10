import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer';


function Footer(props) {
    const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce:true});
    return (
        <footer ref={myRef}>
            <div style={{maxWidth:'900px'}}>
                <div className='con'>
                    <ul>
                        <li className={`${myElementIsVisible?'appear-soc':''}`}><a href={props.links.facebookLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li className={`${myElementIsVisible?'appear-soc':''}`}><a href={props.links.instagramLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faInstagram} style={{color:'#000',position:'absolute',fontSize:'2rem'}}></FontAwesomeIcon></a></li>
                        <li className={`${myElementIsVisible?'appear-soc':''}`}><a href={props.links.linkedinLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faLinkedinIn} style={{color:'#000',position:'absolute',fontSize:'2rem'}}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
                <div className='copyrights'>
                    <p>© {props.links.copyrights}</p>
                </div>
            </div>
        </footer>

    );
  }
  
  export default Footer;