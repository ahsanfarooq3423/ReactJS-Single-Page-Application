import React from 'react';
import pageStyles from './Pages.module.css';

class Home extends React.Component {
    render(){
        return (
            <div className={pageStyles.card}>
                <h1 className={pageStyles.innertext}>Welcome to SPA Home Page</h1>
                <p className={pageStyles.innertext}>The easies this todo is to post in the forum.</p>
            </div>
        )
    }
}

export default Home;