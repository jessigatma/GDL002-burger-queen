import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Kitchen.css';

class Kitchen extends Component{
    render(){
        return(
            <div className="kitchen-background">
                <h1 className="center">Los pedidos de las mesas son </h1>
                <p>solo los pedidos de los meseros son los que presentaran lo que quiero hacer, espero que el fondo se vea azulvioleta
                </p>
            
            <Link to = "/" >Burger Queen</Link>
            </div>
        )
    }
}

export default Kitchen;