import React from 'react';
import './navbar.css';
import '../Container.css';

function Navbar() {
    return(
        <div className='navbar container'>
            <ul>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Lo mas nuevo</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Home</a></li>
                <li className="fl"><a href="#">Imagen aqui</a></li>
            </ul>
            <img src="./assets/logo.png" />
        </div>
    )
}

export default Navbar;