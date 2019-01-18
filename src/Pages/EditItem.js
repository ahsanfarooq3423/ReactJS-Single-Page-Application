import React from 'react';
import './Pages.css';
import '../App.css';

const EditItem = (props) => {
    
    return (
        <div className="inputform">
        <h2>Edit Item</h2>
        <input className="inputtext" id="itemName" type="text"
        placeholder={props.name}
        onChange={props.editChangeName} 
        ></input>
       <br></br>

        <input type="text" className="inputtext" placeholder={props.price}
        onChange={props.editChangePrice}
        ></input>
        <br></br>
       
        <input className="inputtext" id="itemId" type="text" 
        placeholder={props.id}
         onChange={props.editChangeId}
        ></input>
        <br></br>

        <button className="inputbutton" onClick={props.saveEdit}>Save Item</button>
      </div>
    )
}


export default EditItem;