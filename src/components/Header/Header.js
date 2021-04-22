import React from 'react';
import "./Header.scss";

const Header = () => {

  return (
    <header>
      <h1 className='desktop-title'>WELCOME TO CLOUDBANK</h1>
      <h1 className='mobile-title'>CLOUDBANK</h1>
      <nav className='nav-bar'>
        <ol>
          <li><button className='roll-btn'>ROLL</button></li>
          <li><button className='saved-btn'>SAVED</button></li>
          <li><button className='bell-btn'>THE BELL</button></li>
          <li><button className='floor1-btn'>FLOOR 1</button></li>
          <li><button className='floor2-btn'>FLOOR 2</button></li>
          <li><button className='floor3.1-btn'>FLOOR 3.1</button></li>
          <li><button className='floor3.2-btn'>FLOOR 3.2</button></li>
          <li><button className='floor3.3-btn'>FLOOR 3.3</button></li>
          <li><button className='floor3.4-btn'>FLOOR 3.4</button></li>
          <li><button className='floor3.5-btn'>FLOOR 3.5</button></li>
          <li><button className='floor3.6-btn'>FLOOR 3.6</button></li>
          <li><button className='floor3.7-btn'>FLOOR 3.7</button></li>
          <li><button className='floor4-btn'>FLOOR 4</button></li>
          <li><button className='floor6-btn'>FLOOR 6</button></li>
        </ol>
      </nav>
    </header>
  )

}

export default Header
