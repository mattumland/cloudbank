import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1 className='desktop-title'>WELCOME TO CLOUDBANK</h1>
      <h1 className='mobile-title'>CLOUDBANK</h1>
      <nav className='nav-bar'>
        <ol>
          <NavLink
            to='/saved'
            data-cy='savedTab'
            className='btn'
            activeClassName='active-btn'>
            SAVED
          </NavLink>

          <NavLink
            to='/saved'
            data-cy='savedTab'
            className='mobile-btn'
            activeClassName='active-btn'>
            ✶
          </NavLink>

          <NavLink
            to='/theBell'
            className='btn'
            activeClassName='active-btn'>
            THE BELL
          </NavLink>

          <NavLink
            to='/theBell'
            className='mobile-btn'
            activeClassName='active-btn'>
            B
          </NavLink>

          <NavLink
            to='/floor1'
            data-cy='floor1'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 1
          </NavLink>

          <NavLink
            to='/floor1'
            data-cy='floor1'
            className='mobile-btn'
            activeClassName='active-btn'>
            1
          </NavLink>

          <NavLink
            to='/floor2'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 2
          </NavLink>

          <NavLink
            to='/floor2'
            className='mobile-btn'
            activeClassName='active-btn'>
            2
          </NavLink>


          <NavLink
            to='/floor3.1'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 3.1
          </NavLink>

          <NavLink
            to='/floor3.1'
            className='mobile-btn'
            activeClassName='active-btn'>
            3.1
          </NavLink>

          <NavLink
            to='/floor3.2'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 3.2
          </NavLink>

          <NavLink
            to='/floor3.2'
            className='mobile-btn'
            activeClassName='active-btn'>
            3.2
          </NavLink>


          <NavLink
            to='/floor3.3'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 3.3
          </NavLink>

          <NavLink
            to='/floor3.3'
            className='mobile-btn'
            activeClassName='active-btn'>
            3.3
          </NavLink>

          <NavLink
            to='/floor3.4'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 3.4
          </NavLink>

          <NavLink
            to='/floor3.4'
            className='mobile-btn'
            activeClassName='active-btn'>
            3.4
          </NavLink>

          <NavLink
            to='/floor3.5'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 3.5
          </NavLink>

          <NavLink
            to='/floor3.5'
            className='mobile-btn'
            activeClassName='active-btn'>
            3.5
          </NavLink>

          <NavLink
            to='/floor3.6'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 3.6
          </NavLink>

          <NavLink
            to='/floor3.6'
            className='mobile-btn'
            activeClassName='active-btn'>
            3.6
          </NavLink>

          <NavLink
            to='/floor3.7'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 3.7
          </NavLink>

          <NavLink
            to='/floor3.7'
            className='mobile-btn'
            activeClassName='active-btn'>
            3.7
          </NavLink>

          <NavLink
            to='/floor4'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 4
          </NavLink>

          <NavLink
            to='/floor4'
            className='mobile-btn'
            activeClassName='active-btn'>
            4
          </NavLink>


          <NavLink
            to='/floor6'
            className='btn'
            activeClassName='active-btn'>
            FLOOR 6
          </NavLink>

          <NavLink
            to='/floor6'
            className='mobile-btn'
            activeClassName='active-btn'>
            6
          </NavLink>
        </ol>
      </nav>
    </header>
  )

}

export default Header

// <button data='saved' className='saved-btn'>SAVED</button>


// <li><button data='floor2'className='btn'>FLOOR 2</button></li>
// <li><button data='floor3.1'className='btn'>FLOOR 3.1</button></li>
// <li><button data='floor3.2' className='btn'>FLOOR 3.2</button></li>
// <li><button data='floor3.3'className='btn'>FLOOR 3.3</button></li>
// <li><button data='floor3.4'className='btn'>FLOOR 3.4</button></li>
// <li><button data='floor3.5'className='btn'>FLOOR 3.5</button></li>
// <li><button data='floor3.6'className='btn'>FLOOR 3.6</button></li>
// <li><button data='floor3.7'className='btn'>FLOOR 3.7</button></li>
// <li><button data='floor4'className='btn'>FLOOR 4</button></li>
// <li><button data='floor6'className='btn'>FLOOR 6</button></li>
