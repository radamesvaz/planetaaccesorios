import React from 'react';
import './navbar.css';
import '../Container.css';
import logo from '../assets/logo.jpg';



function Navegacion() {
    return(
        <div className='navbar container'>
            <ul>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Lo mas nuevo</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Homee</a></li>
                <div className="mw4 fl"> <a href="#"><img style={{zIndex: -1, marginRight: 0}} src={logo} /> </a> </div>
                <li className="fl" style={{fontSize: 20}}><a href="#">Planeta Accesorios</a></li>
            </ul>
        </div>
    )
}

export default Navegacion;