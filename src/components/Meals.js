import React, {Component} from 'react';
import './Meals.css'

class Meals extends Component{
    state={
        products:[],
     }
     componentDidMount(){
         fetch('/products/lunch')
         .then(res => res.json())
         .then(products => {
              this.setState({products: products.products}, () => console.log('Products fetched', products))
         });
     }
  render(){
     const {products} = this.state;
     return(
        <div className="col-md-8 meals-background">
            <h1 className="center">¡Buenas tardes!</h1>
            {products.map((item,index) =>
                <div className="btn-group p-0 " key={index}>
                    <button 
                        type="button"
                        className="btn btn-secondary btn-md  meal-btn"
                        onClick = {()=>this.props.addOrder(item)}  
                    > 
                        {/* <img className = "card-img-top" src={item.img} alt="Card image cap"/> */}
                        <div>
                            <img className= "icon-button" src={item.image} alt="icon-btn" />
                             <span> <br/>{item.food} 
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
