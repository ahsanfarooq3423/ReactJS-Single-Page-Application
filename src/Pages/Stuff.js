import React from 'react';
import './Pages.css';


class Stuff extends React.Component {
    render() {
        return (
            <div className="items" >
                <p className="pitem">Item name: {this.props.name}</p>
                <p className="pprice">Price: {this.props.price}</p>
                <div class="btnEdit">
                <button onClick={this.props.delete}>Delete</button>
                <button onClick={this.props.edit}>Edit</button>
                </div>
               
            </div>
        )
       
    }
}

export default Stuff;

