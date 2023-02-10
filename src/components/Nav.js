import React from 'react';
import Navlink from "../parts/Navlink";





function Nav(props) {
    
    // console.log(props.pages)


    return (
        <nav>
            <ul>
                {props.pages.map(link =>{
                    if(link.slug === 'home' || link.slug === 'video'){return null}else{

                            return(<Navlink key={link.pageId} slug={link.slug}/>)
                       
                   
                }})}


            </ul>
        </nav>
    );
  }
  
  export default Nav;

