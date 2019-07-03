import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Kitchen extends Component{
    render(){
        return(
            <div>
            <div className="cardkitchen kitchen-background">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">MESA 6</li>
                    <li className="list-group-item">sandwich de jamón y queso <button>Listo</button></li>
                    <li className="list-group-item">café con leche <button>listo</button></li>
                    <li className="list-group-item">jugo de frutas <button>listo</button></li>
                </ul>
            </div>
            <Link to = "/" >Burger Queen</Link>
            </div>
        )
    }
}

export default Kitchen;