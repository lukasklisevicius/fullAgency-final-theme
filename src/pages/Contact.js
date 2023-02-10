import React from 'react';
import Contactemail from "../parts/Contactemail";
import Contactname from "../parts/Contactname";
import Header from "../parts/Header";


function Contact(props) {


    return (
        <>
        <div className='black'>
            <section id="contact">
                <Header light={props.contact.titleLight} bold={props.contact.titleBold}/>
                <div className='table'>
                    <Contactemail name={props.contact.pageName} email={props.contact.pageEmail}/>
                    <Contactname name={props.contact.person1Name} phone={props.contact.person1Phone}/>
                    <Contactname name={props.contact.person2Name} phone={props.contact.person2Phone}/>
                    <Contactname name={props.contact.person3Name} phone={props.contact.person3Phone}/>
                </div>
            </section>
        </div>
        </>
    );
  }
  
  export default Contact;