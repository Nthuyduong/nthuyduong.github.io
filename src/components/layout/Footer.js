import React from "react";
import { ROUTER } from "../../utils/constants";
import { Link, useHistory, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  const history = useHistory();

  return (
    <div className="footer">
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-8">
            <p>Get in touch for opportunities or just say hi!</p>
            <p className="mail-info"><a href="#">Nthduong198@gmail.com</a></p>
            <p>Follow on <a href="https://www.behance.net/thydngnguyn31">Behance</a></p>
          </div>
          <div className="col-4">
          I'm a UX/UI designer here to help create intuitive and visually appealing digital interfaces for the best possible user experience.<a className="read-more" href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;