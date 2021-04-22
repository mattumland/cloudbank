import React from 'react';
import "./Header.scss";

const Header = () => {

  return (
    <header>
      <h1 className='title-bar'>WELCOME TO CLOUDBANK</h1>
      <nav className='nav-bar'>
        <ol>
          <li><button>ROLL</button></li>
          <li><button>THE BELL</button></li>
          <li><button>FLOOR 1</button></li>
          <li><button>FLOOR 2</button></li>
          <li><button>FLOOR 3.1</button></li>
          <li><button>FLOOR 3.2</button></li>
          <li><button>FLOOR 3.3</button></li>
          <li><button>FLOOR 3.4</button></li>
          <li><button>FLOOR 3.5</button></li>
          <li><button>FLOOR 3.6</button></li>
          <li><button>FLOOR 3.7</button></li>
          <li><button>FLOOR 4</button></li>
          <li><button>FLOOR 6</button></li>
          <li><button>SAVED</button></li>
        </ol>
      </nav>
    </header>
  )

}

export default Header
