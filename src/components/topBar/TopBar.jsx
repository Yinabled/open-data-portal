import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

class TopBar extends React.Component {
    render() {
	return(
	  <nav className="navbar static-top navbar-light navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand navbar-caption text-black display-1" href="/"><img src={logo} alt="logo" style={{height: '5.1rem'}} />   SODP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/data-list">Data Catalog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Blog <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/submit">Submit</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Affiliated Sites
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://stanforddaily.com/" target="_blank">The Stanford Daily</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="https://thestanforddaily.github.io/94305/" target="_blank">Data Visualizations Site</a>
          <a className="dropdown-item" href="#">Jobs Board</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
    	)
    }
}

export default TopBar;
