import React from 'react';
import Nav from "../components/Nav";
import { useInView } from 'react-intersection-observer';


function Home(props) {

    const { ref: myRef, inView: myElementIsVisible } = useInView();

    return (
            <header ref={myRef}>
                <div className='logo'>
                    <div className='a-logo'>
                        <img style={{scale:0.7}} className={`${myElementIsVisible? 'appear': ''}`} src={props.home} alt={props.home.logo_img}></img>
                    </div>
                </div>
                <Nav pages={props.pages}/>
            </header>
    );
  }
  
  export default Home;