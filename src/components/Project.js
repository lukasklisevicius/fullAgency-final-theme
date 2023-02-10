import React from 'react';
import Border from "../parts/Border";
import Projecthead from "../parts/Projecthead";
import Projectimg from "../parts/Projectimg";
import Projecttag from '../parts/Projecttag'
import { useInView } from 'react-intersection-observer';



function Project(props) {
const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce:true});
const handleClick = (url) => {
    window.open(url, '_blank', 'noreferrer');
}

    
    return (
        <>
            <div onClick={() =>handleClick(props.project.linkToPage)} key={props.project.id} ref={myRef}  className={`project ${myElementIsVisible?'appear':''}`} id={props.project.id} >
                <div className='project-text'>
                    <Projecthead title={props.project.projectTitle}/>
                        {props.tags.map(tag =>{
                            return(<Projecttag key={tag.node.tagId} slug={tag.node.slug}/>)
                        })}
                        </div>
                        <Projectimg src={props.project.image.mediaItemUrl} alt={props.project.imgAlt}/>
                </div> 
            <Border />
        </>
    )
  }
  
  export default Project;