import React from 'react';
import './Pages.css';
import '../App.css';

const AddItem = (props) => {

    
    return (
        <div className="inputform">
        <h2>Add New Item</h2>
        <input className="inputtext" id="itemName" type="text"
        placeholder="Item Name" 
        
        onChange ={props.editName}></input>
       <br></br>
       
        <input className="inputtext" id="itemPrice" type="text"
        placeholder="Item Price"
        
        onChange ={props.editPrice}></input>
        <br></br>
       
        <input className="inputtext" id="itemId" type="text" 
        placeholder="Unique ID"
       
        onChange ={props.editId}></input>
        <br></br>
       
        <button className="inputbutton" onClick={props.addItem}>Add Item</button>
      </div>
    )
}


export default AddItem;