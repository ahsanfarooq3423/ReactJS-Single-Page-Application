import React from 'react';
import appStyles from '../../Containers/App.module.css';


const AddItem = (props) => {

    
    return (
        <div className={appStyles.inputform}>
        <h2>Add New Item</h2>
        <input className={appStyles.inputtext} id="itemName" type="text"
        placeholder="Item Name" 
        
        onChange ={props.editName}></input>
       <br></br>
       
        <input className={appStyles.inputtext} id="itemPrice" type="text"
        placeholder="Item Price"
        
        onChange ={props.editPrice}></input>
        <br></br>
       
        <input className={appStyles.inputtext} id="itemId" type="text" 
        placeholder="Unique ID"
       
        onChange ={props.editId}></input>
        <br></br>
       
        <button className={appStyles.inputbutton} onClick={props.addItem}>Add Item</button>
      </div>
    )
}


export default AddItem;