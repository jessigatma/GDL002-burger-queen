import React from 'react';
import { Link } from "react-router-dom";
import './Welcome.css';

const Welcome = () =>{
    return(
        <div >
            {/* <header>Bienvenido a</header>
            <h1 className="burger-letter">Burger Queen</h1> */}
            <Link to="/Meseros"> Meseros </Link>
            <Link to = "/Cocina"> Cocina </Link>
        </div>
    );
}

export default Welcome;