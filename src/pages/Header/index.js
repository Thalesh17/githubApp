import React from 'react';
import Filter from '../Filter';
import './styles.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="container">
      <img width={51} src={logo}/>
      <div className="content">
        <Filter />
      </div>
    </div>
  )
}

export default Header;
