import React, { useRef, useEffect, useState } from "react";
import { ROUTER } from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const Header = () => {

  const history = useHistory();

  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 300 ) {
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <div className={`active ${show && 'hidden'}`}>
      <Navbar className="header navbar" expand="lg">
            <div className="header-content">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav><Link className="nav-link" to="/">HOME</Link></Nav>
                  <Nav><Link className="nav-link" to="/about">ABOUT</Link></Nav>
                  <NavDropdown title="DESIGNS" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link className="nav-link" to="/aguri">AGURI</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link" to="/alio">Alio</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link" to="/">Cake-blog</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link" to="/">Fashion-brand</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav><Link className="nav-link" to="/contact">CONTACT</Link></Nav>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
    </div>
  )
}

export default Header;