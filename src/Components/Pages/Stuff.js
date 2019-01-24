import React from 'react';
import pageStyles from './Pages.module.css';

class Stuff extends React.Component {
    render(props) {
        return (
            <div className={pageStyles.items} >
                <p className={pageStyles.pitem}>Item name: {this.props.name}</p>
                <p className={pageStyles.pprice}>Price: {this.props.price}</p>
                <div class={pageStyles.btnEdit}>
                <button onClick={this.props.delete}>Delete</button>
                <button onClick={this.props.edit}>Edit</button>
                </div>
               
            </div>
        )
       
    }
}

export default Stuff;

