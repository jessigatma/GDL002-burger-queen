import React, {Component} from 'react';
import {menuMeals} from './menuMeals.json'
import './Meals.css'

class Meals extends Component{
    state={
        menuMeals,
    }
  render(){
     const {menuMeals} = this.state;
     return(
        <div className="col-md-8 meals-background">
            <h1>¡Buenas tardes!</h1>
            {menuMeals.map((item,index) =>
                <div className="btn-group p-0 " key={index}>
                    <button 
                        type="button"
                        className="btn btn-secondary btn-md  meal-btn"
                        onClick = {()=>this.props.addOrder(item)}  
                    > 
                        {/* <img className = "card-img-top" src={item.img} alt="Card image cap"/> */}
                        <div>
                            <img className= "icon-button" src={item.image} alt="icon-btn" />
                             <span> <br/>{item.Food} 
                                {item.Foody}
                                 {item.Drink} 
                                 {item.Extra}  
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

export default Meals;
