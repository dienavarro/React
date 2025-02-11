import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CarWidget/CartWidget';
import { NavLink } from 'react-router';

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand no-active">Compra Click</NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/category/beauty" className="nav-link">Beauty</NavLink>
            <NavLink to="/category/fragrances" className="nav-link">Fragrances</NavLink>
            <NavLink to="/category/furniture" className="nav-link">Furniture</NavLink>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
  