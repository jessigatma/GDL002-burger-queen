import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = (props) => {
   return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"className="welcome-letter">Burger Queen</Link>
            <ul className="navbar-nav mr-auto mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link ml-5" to = "/Meseros/Desayunos"> Desayunos </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ml-3" to = "/Meseros/Comidas"> Comidas </Link>
                </li>
            </ul>
           
          
            <form className="form-inline my-1">
                <div className="md-form form-sm my-0">
                    <input className="form-control form-control-sm mr-sm-2 mb-0" 
                    type="number" 
                    placeholder="Número de Mesa" 
                    aria-label="Search"
                    value={props.noTable}
                    onChange={props.getTableNumber}
                    />
                </div>
                <button className="btn btn-success ok-btn" type="button"
                onClick={()=> props.addNumberTable(props.table)}>
                Ok
                </button>
            </form>
                      
        </nav>
    </div> 
   )
}


export default Navbar;