import React, {Component} from 'react';
import {list} from './list.json';
//import logo from './logo.svg';
import './App.css';


class App extends Component{
  state = {
    list,
    text:'',
  };
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     list,
  //   };
  // this.addRowAccount = this.addRowAccount.bind(this);
  // this.removeRowAccount = this.removeRowAccount.bind(this);
  // }
onHandleAccount = (event)=> {
 console.log(event)
  //this.setState({list:list})
}

removeRowAccount = (id)=>{
  const isNotId = item => item.objectID !== id;
  const updatedList = this.state.list.filter(isNotId);
  this.setState({ list: updatedList});
}

  render(){
    const {list} = this.state;

    return(
    <div className="App">
     
      <header className="App-header">
        <span>
         Desayuno  Burger Queen 
        </span>
        Mesa <input 
        type ='number'
        />
         {list.map(item =>
         <div key={item.objectID}>
            <button id="myId"
            type="button"
            onClick={() => this.onHandleAccount(item.Alimento)}
             >  
            {item.Alimento}{item.costo} 
            </button>
         </div>
          
      )}
     
      </header>
      {/* <div>
      {list.map((item, i) => <div key={i}> {item.Alimento} </div>)}
      </div> */}
    </div>
    );
  }
}


export default App;
