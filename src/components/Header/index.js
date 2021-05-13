import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Header">
        <Link to="/home">dog</Link>
        ---
        <Link to="/cat">cat</Link>
      </div>
    );
  }
}

export default Header;
