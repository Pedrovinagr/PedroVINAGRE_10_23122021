import React from 'react';
import '../styles/main.css';
import logo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'



export default function Header () {

    return(
        <nav className="main-nav">
          <a className="main-nav-logo" href="./index.html">
            <img
              className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
            <a className="main-nav-item" href="./sign-in.html">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </a>
          </div>
        </nav>        
    )
}
