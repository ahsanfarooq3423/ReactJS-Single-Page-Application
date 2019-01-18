import React, { Component } from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Stuff from './Pages/Stuff';
import AddItem from './Pages/AddItem';
import EditItem from './Pages/EditItem';
import './App.css';
import './Pages/Pages.css';


const Title = () => {
  return <h1 addclass="title">Simple Single Page Application (React)</h1>        
}

class App extends Component {

 //Functions that change the state.
  homeState = () => {
    this.setState({currentPage: 'home'})
  }    
  stuffState = () => {
    this.setState({currentPage: 'stuff'})
  }
  
  contactState = () => {
    this.setState({currentPage: 'contact'})
  }

  addItemState = () => {
    this.setState({currentPage: 'additem'});
    
  }
  

  //the state object
  state = {
    currentPage: 'stuff',
    itemNameEdit: '',
    itemPriceEdit: '',
    itemIdEdit: '',
    editItemIndex: 0,
    stuff: [
      {id : "aw21", name: "iPhone X", price: "$10000"},
      {id : "aw22", name: "TreadMill", price: "$20000"},
      {id : "aw23", name: "Air Freshner", price: "$34"},
      {id : "aw24", name: "Air Bag", price: "$50"},
      {id : "aw25", name: "Whey Protien", price: "$65"},
      {id : "aw26", name: "BCAA", price: "$635"},
      {id : "aw27", name: "Pampers", price: "$265"},
      {id : "aw28", name: "TV", price: "$65"},
      {id : "aw29", name: "Rackets", price: "$65"},
      {id : "aw30", name: "Tomatoes", price: "$5"}
    ]
  }

  //deleteHanldler
  deleteItemHanlder = (stuffIndex) => {
    const stuffs = [...this.state.stuff];
    stuffs.splice(stuffIndex,1);
    this.setState({stuff : stuffs});
  }

  //addHandler
  addItemHandler = () => {
    let name = document.getElementById('itemName').value;
    let price= document.getElementById('itemPrice').value;
    let id= document.getElementById('itemId').value;
    let flag = true;
    if ((name.length && price.length && id.length) !=0){
      let newItem = {id,name,price};
    
      for (var i = 0 ; i<this.state.stuff.length; i++){
        if (this.state.stuff[i].id === id){
          alert("Please Enter a unique id");
          flag = false;
        }
        else{
          continue;  
        }
      }

      if (flag){
        this.state.stuff.push(newItem);
        this.setState({currentPage: 'stuff'});
      }
    }
    else {
      alert("Please enter the full details.");
    }   
  }

  //editItemHandler
  editItemHandler = (index) => {
    this.setState({editItemIndex : index});
    this.setState({currentPage : 'edit'});
    let name = this.state.stuff[index].name;
    let price = this.state.stuff[index].price;
    let id = this.state.stuff[index].id;

    this.setState({itemNameEdit: name});
    this.setState({itemPriceEdit: price});
    this.setState({itemIdEdit: id});
  }

  editChangeName = (event) => {
    
    const index = this.state.editItemIndex;
    const name = event.target.value;
    const stuff = [...this.state.stuff];
    stuff[index].name = name;
    this.setState({stuff : stuff}); 
    
  }

  editChangePrice = (event) => {
    const index = this.state.editItemIndex;
    const price = event.target.value;
    const stuff = [...this.state.stuff];
    stuff[index].price = price;
    this.setState({stuff : stuff}); 
  }

  editChangeId = (event) => {
    const index = this.state.editItemIndex;
    const id = event.target.value;
    const stuff = [...this.state.stuff];
    stuff[index].id = id;
    this.setState({stuff : stuff}); 
  }
  

  render() {
    const  stuff = (
      <div className="stuff">
      <h1 className="innertext">Welcome to the Single Page Application Items</h1>
          {
            this.state.stuff.map((item,index) => {
              return <Stuff 
                        name={item.name} 
                        price={item.price} 
                        key={item.id} 
                        delete={() => this.deleteItemHanlder(index)}
                        edit = {() => this.editItemHandler(index)} />
            })
          }
          <br></br>
          <button className="addItem" onClick={this.addItemState}><h3>Add Item</h3></button>  
    </div>
    )

    let showPage = (stuff);
    if (this.state.currentPage === 'home'){
      showPage = (<Home/>)
    }
    if (this.state.currentPage === 'stuff'){
      showPage = (stuff);
    }
    else if (this.state.currentPage === 'contact'){
      showPage = (<Contact/>);
    }

    else if (this.state.currentPage === 'additem'){
      showPage = (<AddItem 
         length = {this.state.stuff.length}
         addItem = {this.addItemHandler}/>)
    }

    else if (this.state.currentPage === 'edit'){
      showPage = (<EditItem name={this.state.itemNameEdit} 
                  price={this.state.itemPriceEdit} 
                  id={this.state.itemIdEdit} 
                  editChangeName = {this.editChangeName}
                  editChangePrice = {this.editChangePrice}
                  editChangeId = {this.editChangeId}
                  saveEdit = {this.stuffState}/>)
    }

    const homeActive = (<li><a href="#" id="home" className='activelink' onClick={this.homeState}>Home</a></li>);
    const homeInActive = (<li><a href="#" id="home"  onClick={this.homeState}>Home</a></li>);
   
   
    return (
      <div className="App">
         <h1>SPA</h1>
         <Title/>
          <div className="navbar" >
          <ul className="nav">
              {this.state.currentPage === 'home' ?
               homeActive: homeInActive
               }
              
              {this.state.currentPage === 'stuff' ?
              <li><a href="#" id="stuff" className='activelink' onClick={this.stuffState}>Stuff</a></li>:
              <li><a href="#" id="stuff" onClick={this.stuffState}>Stuff</a></li>}
              
              {this.state.currentPage === 'contact' ?
                <li><a href="#" id="contact" className='activelink'  onClick={this.contactState}>Contact</a></li>
              :<li><a href="#" id="contact"  onClick={this.contactState}>Contact</a></li>}
          </ul>
        </div>
       {showPage}
    </div>
    );
  }
}

export default App;
