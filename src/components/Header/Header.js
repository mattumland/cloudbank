import React from 'react';
import "./Header.scss";

const Header = () => {
  //prop: rollFunction
  return (
    <header>
      <h1 className='desktop-title'>WELCOME TO CLOUDBANK</h1>
      <h1 className='mobile-title'>CLOUDBANK</h1>
      <nav className='nav-bar'>
        <ol>
          <li><button data='roll' className='roll-btn'>ROLL</button></li>
          <li><button data='saved' className='saved-btn'>SAVED</button></li>
          <li><button data='bell' className='bell-btn'>THE BELL</button></li>
          <li><button data='floor1' className='floor1-btn'>FLOOR 1</button></li>
          <li><button data='floor2'className='floor2-btn'>FLOOR 2</button></li>
          <li><button data='floor3.1'className='floor3.1-btn'>FLOOR 3.1</button></li>
          <li><button data='floor3.2' className='floor3.2-btn'>FLOOR 3.2</button></li>
          <li><button data='floor3.3'className='floor3.3-btn'>FLOOR 3.3</button></li>
          <li><button data='floor3.4'className='floor3.4-btn'>FLOOR 3.4</button></li>
          <li><button data='floor3.5'className='floor3.5-btn'>FLOOR 3.5</button></li>
          <li><button data='floor3.6'className='floor3.6-btn'>FLOOR 3.6</button></li>
          <li><button data='floor3.7'className='floor3.7-btn'>FLOOR 3.7</button></li>
          <li><button data='floor4'className='floor4-btn'>FLOOR 4</button></li>
          <li><button data='floor6'className='floor6-btn'>FLOOR 6</button></li>
        </ol>
      </nav>
    </header>
  )

}

export default Header
