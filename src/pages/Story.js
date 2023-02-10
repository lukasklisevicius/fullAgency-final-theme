import React from 'react';
import Header from "../parts/Header";
import Storytext from "../parts/Storytext";


function Story(props) {
    return (
        <>
        <div className='black'>
            <section id='story'>
                <Header light={props.story.titleLight} bold={props.story.titleBold}/>
                <Storytext text1={props.story.text1} text2={props.story.text2}/>
            </section>
        </div>
        </>
    );
  }
  
  export default Story;