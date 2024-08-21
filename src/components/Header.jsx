import logo from '../assets/investment-calculator-logo.png'
import React from 'react';
import '../index.css'

function Header() {
    
    return (
      <>
        <header id='header'>
          <img src={logo} />
          <h1>React Investment Calculator</h1>
        </header>
      </>
    );

}


export default Header;