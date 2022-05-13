import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <ul>
        <li>
          <Link to='/'>Task1</Link>
        </li>
        <li>
          <Link to='/task2'>Task2</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
