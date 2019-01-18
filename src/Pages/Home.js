import React from 'react';
import './Pages.css'
class Home extends React.Component {
    render(){
        return (
            <div className="card">
                <h1 className="innertext">Welcome to SPA Home Page</h1>
                <p className="innertext">The easies this todo is to post in the forum.</p>
            </div>
        )
    }
}

export default Home;