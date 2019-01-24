import React from 'react';
import appStyles from '../../Containers/App.module.css';

const EditItem = (props) => {    
    return (
        <div className={appStyles.inputform}>
        <h2>Edit Item</h2>
        <input className={appStyles.inputtext} id="itemName" type="text"
        placeholder={props.name}
        onChange={props.editChangeName} 
        ></input>
       <br></br>

        <input type="text" className={appStyles.inputtext} placeholder={props.price}
        onChange={props.editChangePrice}
        ></input>
        <br></br>
       
        <input className={appStyles.inputtext} id="itemId" type="text" 
        placeholder={props.id}
         onChange={props.editChangeId}
        ></input>
        <br></br>

        <button className={appStyles.inputbutton} onClick={props.saveEdit}>Save Item</button>
      </div>
    )
}


export default EditItem;