import React from 'react';
import { Link } from "react-router-dom";
import './Welcome.css';

const Welcome = () =>{
    return(
        <div >
            {/* <header>Bienvenido a</header>
            <h1 className="burger-letter">Burger Queen</h1> */}
            <Link to="/Meseros" className="waitresslink"> Meseros </Link>
            <Link to = "/Cocina"className="kitchenlink"> Cocina </Link>
        </div>
    );
}

export default Welcome;