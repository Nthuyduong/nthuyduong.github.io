import React, { useRef, useEffect, useState } from "react";
import {ROUTER} from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {

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

  //hide and show navbar if the current pathname includes any of the values in the withouSidebarRoutes array
  // const withouSidebarRoutes = [ROUTER.CONTACT, ROUTER.ALIO, ROUTER.CAKE, ROUTER.AGURI, ROUTER.FASHION];
  //
  // const { pathname } = useLocation();
  // if (withouSidebarRoutes.some((item) => pathname.includes(item)))
  //   return null;

  return (
    <div className={`active ${show && 'hidden'}`}>
      {/*{withouSidebarRoutes.some((item) => pathname.includes(item)) ? null : (*/}
      <Navbar className="header navbar" expand="lg">
            <div className="header-content">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav><Link className="nav-link" to="/">HOME</Link></Nav>
                  <Nav><Link to={ROUTER.ABOUT} className="nav-link">ABOUT</Link></Nav>
                  <NavDropdown title="DESIGNS" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to={ROUTER.ALIO} className="nav-link">Alio</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={ROUTER.AGURI} className="nav-link">AGURI</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={ROUTER.CAKE} className="nav-link">Cake-blog</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={ROUTER.FASHION} className="nav-link">Fashion-brand</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav><Link to={ROUTER.CONTACT} className="nav-link">CONTACT</Link></Nav>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
          {/*)}*/}
    </div>
  )
}

export default Header;