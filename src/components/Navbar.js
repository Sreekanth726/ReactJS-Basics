import React from 'react'
import PropTypes from 'prop-types'
export default function NavgationBar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        {/* <nav className={`navbar bg-${props.mode} border-bottom border-bottom-${props.mode}`} data-bs-theme="dark"> */}
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            {/* <img src="./bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/> */}
            {props.title}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.firstPage}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">{props.secondPage}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.thirdPage}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            <div className={`form-check form-switch mx-4 text-${props.mode==='dark'?'light':'dark'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>
    )
}

NavgationBar.propTypes={
    title: PropTypes.string,
    firstPage: PropTypes.string,
    secondPage: PropTypes.string,
    thirdPage: PropTypes.string,
    
}
NavgationBar.defaultProps={
    title: "App Name",
    firstPage: "firstPage",
    secondPage: "secondPage",
    thirdPage: "thirdPage",
}