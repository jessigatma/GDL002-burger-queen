import React, {Component} from 'react';
import {menuBreakfast} from './menuBreakfast.json';
import './Breakfast.css';


class Breakfast extends Component{
    state={
       menuBreakfast,
    }
  render(){
     const {menuBreakfast} = this.state;
     return(
        <div className="col-md-8 breakfast-background">
            <h1 className="center">¡Buenos días!</h1>
            {menuBreakfast.map((item,index) =>
                <div  key={index} className="btn-group mt-3">
                    <button 
                        type="button"
                        className="btn btn-default btn-md mt-4  brk-btn"
                        onClick = {()=>this.props.addOrder(item)}  
                    > 
                        <div>
                            <img className= "icon-button" src={item.image} alt="icon-btn1"/>
                             <span> <br/>{item.Food} 
                                 {item.Drink} 
                                 {item.Coffee}  
                            </span>      
                            <span> <br/> ${item.price} </span>

                        </div>
                    </button>  
                </div>                   
            )}
        </div>
     )

 }
}

export default Breakfast;