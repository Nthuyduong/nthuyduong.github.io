import React, { useRef, useEffect, useState } from "react";
import {ROUTER} from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {

  // //CREATE TAB BAR FOR EXAMPLE
  // const tabs = [
  //   "Profile",
  //   "Other",
  // ]
  //
  // const [currentTab, setCurrentTab] = useState(tabs[0]);
  //
  // const activeTab = () => {
  //   if (CurrentTab === "Profile"){
  //     return <Profile/>;
  //   }
  //   if(CurrentTab === "Other")
  //   {
  //     return <Other/>;
  //   }
  //   return '';
  // }


  //Hover NavDropdown
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const history = useHistory();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Clear any previous timeout
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a slight delay before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 40);
  };
  const handleDropdownClick = () => {
    // Navigate to ROUTER.DESIGNS when the dropdown is clicked
    history.push(ROUTER.DESIGNS);
  };
  // const handleItemClick = () => {
  //   setIsOpen(false); // Hide the dropdown when an item is clicked
  // };

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
      {/*{withouSidebarRoutes.some((item) => pathname.includes(item)) ? null : (*/}
      <Navbar className="header navbar" expand="lg">
            <div className="header-content">
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav>
                    <Link className="nav-link" to="/">
                      HOME</Link>
                  </Nav>
                  <Nav>
                    <Link to={ROUTER.ABOUT} className="nav-link">
                      ABOUT
                    </Link>
                  </Nav>
                    <NavDropdown
                        title={<span>DESIGNS</span>}
                        id="basic-nav-dropdown"
                        show={isOpen} // Control the show/hide state of the dropdown
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleDropdownClick}
                    >
                      <NavDropdown.Item>
                        <Link to={ROUTER.ALIO} className="nav-link">Alio</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={ROUTER.AGURI} className="nav-link">AGURI</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={ROUTER.FASHION} className="nav-link">Fashion brand</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={ROUTER.CAKE} className="nav-link">Cake blog</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  <Nav><Link to={ROUTER.CONTACT} className="nav-link">CONTACT</Link></Nav>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>

    </div>
  )
}

export default Header;