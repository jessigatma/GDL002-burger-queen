import React, {Component} from 'react';
import { HashRouter, Route } from "react-router-dom";
import Breakfast from './components/Breakfast';
import Meals from './components/Meals';
import Account from './components/Account';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Kitchen from './components/Kitchen';

import './App.css';

class App extends Component{
    state = {
        noTable:'',
        orders: [],
        numberTable:'',
        total: 0,        
    };

getTableNumber = (event) =>{
        this.setState({
          noTable: event.target.value
        });
}

addNumberTable = (numberTable) =>{
    //console.log(numberTable)
    this.setState({
     numberTable:numberTable
   })
}

addOrder = (item) => {
    this.setState({orders: [...this.state.orders, item]}, () => {
        this.sumItemPrice(item.price)
        console.log(this.state.orders)})
}

sumItemPrice =(price) =>{
this.setState({total: this.state.total + price})
}

removeOrder = (index) => {
    let newTotal= (this.state.orders[index].price);
     this.setState({orders: this.state.orders.filter((e,i)=> {return i !== index}, console.log(this.state.orders)),
                    total: this.state.total - newTotal})
 }

onSubmit = () => {
    const url = "/orders";
    const sendOrder = {
        "table": this.state.numberTable,
        "cashOrder": this.state.orders
        // "status": 'send'
    }
    this.fetchPost(url, sendOrder);
}

fetchPost = (url,data) =>{
    fetch(url,{
        method:'post',
        body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
			}
        })
        .then(res => res.json())
		.then(response => console.log('status de respuesta', JSON.stringify(response)))
		.catch(error => console.log('Error ', error)); 
}

render(){
const {noTable,orders,numberTable,total} =this.state; 
    return(
        <HashRouter basename="/">
            <div>      
                <Route path = "/" component = {Welcome} exact />

                <Route path="/Cocina" component = {Kitchen} />

                <Route path = "/Meseros" render = {() => <Navbar 
                    table = {noTable}
                    getTableNumber={this.getTableNumber}
                    addNumberTable = {this.addNumberTable}
                    /> } 
                />

                <div className="container-fluid">
                    <div className="row">
                <Route path = "/Meseros/Desayunos" render = {() => <Breakfast 
                    addOrder = {this.addOrder}
                    /> } 
                />
                <Route path = "/Meseros/Desayunos" render = {() => <Account 
                    orders={orders}
                    numberTable={numberTable}
                    total = {total}
                    removeOrder={this.removeOrder}
                    onSubmit = {this.onSubmit}
                    /> } 
                />      
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                <Route path = "/Meseros/Comidas" render = {() => <Meals 
                    addOrder = {this.addOrder}
                    /> } 
                />
                <Route path = "/Meseros/Comidas" render = {() => <Account 
                    orders={orders}
                    numberTable={numberTable}
                    total = {total}
                    removeOrder={this.removeOrder}
                    onSubmit = {this.onSubmit}
                    /> } 
                />
                    </div>
                </div>
            </div>  
        </HashRouter>    
    );
}

}


export default App;

