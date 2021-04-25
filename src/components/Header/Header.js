import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  //prop: rollFunction
  return (
    <header>
      <h1 className='desktop-title'>WELCOME TO CLOUDBANK</h1>
      <h1 className='mobile-title'>CLOUDBANK</h1>
      <nav className='nav-bar'>
        <ol>
          <li><button data='roll' className='btn'>ROLL</button></li>
          <li>
            <NavLink
              to='/saved'
              data-cy='savedTab'
              className='btn'
              activeClassName='active-btn'>
              SAVED
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/theBell'
              className='btn'
              activeClassName='active-btn'>
              THE BELL
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/floor1'
              data-cy='floor1'
              className='btn'
              activeClassName='active-btn'>
              FLOOR 1
            </NavLink>
          </li>
          <li><button data='floor2'className='btn'>FLOOR 2</button></li>
          <li><button data='floor3.1'className='btn'>FLOOR 3.1</button></li>
          <li><button data='floor3.2' className='btn'>FLOOR 3.2</button></li>
          <li><button data='floor3.3'className='btn'>FLOOR 3.3</button></li>
          <li><button data='floor3.4'className='btn'>FLOOR 3.4</button></li>
          <li><button data='floor3.5'className='btn'>FLOOR 3.5</button></li>
          <li><button data='floor3.6'className='btn'>FLOOR 3.6</button></li>
          <li><button data='floor3.7'className='btn'>FLOOR 3.7</button></li>
          <li><button data='floor4'className='btn'>FLOOR 4</button></li>
          <li><button data='floor6'className='btn'>FLOOR 6</button></li>
        </ol>
      </nav>
    </header>
  )

}

export default Header

// <button data='saved' className='saved-btn'>SAVED</button>
