import React from 'react';
import Header from "../parts/Header";
import Menutext from "../parts/Menutext";


function Menu(props) {
    return (
        <section id='menu'>
            <Header light={props.menu.titleLight} bold={props.menu.titleBold}/>
            <div className='wedo-text text'>
                <Menutext head={props.menu.header1} hidden={props.menu.header1About}/>
                <Menutext head={props.menu.header2} hidden={props.menu.header2About}/>
                <Menutext head={props.menu.header3} hidden={props.menu.header3About}/>
                <Menutext head={props.menu.header4} hidden={props.menu.header4About}/>
                <Menutext head={props.menu.header5} hidden={props.menu.header5About}/>
                <Menutext head={props.menu.header6} hidden={props.menu.header6About}/>
                <Menutext head={props.menu.header7} hidden={props.menu.header7About}/>
                <Menutext head={props.menu.header8} hidden={props.menu.header8About}/>
                <Menutext head={props.menu.header9} hidden={props.menu.header9About}/>
            </div>
        </section>
    );
  }
  
  export default Menu;