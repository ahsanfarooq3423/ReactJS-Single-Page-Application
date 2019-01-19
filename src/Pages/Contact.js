import React from 'react';


import pageStyles from './Pages.module.css';

class Contact extends React.Component {
    render() {
       return (
        <div className={pageStyles.card}>
            <h1 className={pageStyles.innertext}>CONTACT US</h1>
            <p className={pageStyles.innertext}>Feel Free to Contact us at simplespa@spa.com</p>
        </div>
       )
    }
}

export default Contact;
