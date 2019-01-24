import React from 'react';
import appStyles from '../../Containers/App.module.css';
import pageStyles from './Pages.module.css';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Stuff from './Stuff';

const Stuff = (props) => {
    return  <div className={pageStyles.stuff}>
    <h1 className={pageStyles.innertext}>Welcome to the Single Page Application Items</h1>
        {
          props.stuff.map((item,index) => {
            return  (<ErrorBoundary key={item.id}><Stuff 
                      name={item.name} 
                      price={item.price}    
                      delete={() => props.deleteItemHanlder(index)}
                      edit = {() => props.editItemHandler(index)} /></ErrorBoundary>)
          })
        }
        <br></br>
        <button className={appStyles.addItem} onClick={props.addItemState}><h3>Add Item</h3></button>  
  </div>
}

export default Stuffs;