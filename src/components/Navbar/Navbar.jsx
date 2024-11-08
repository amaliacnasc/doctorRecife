import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll'; // Importando o Link do react-scroll

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/stethoscope.png';
import './navbar.css';

function NavbarD() {
  return (
    <Navbar collapseOnSelect expand="lg" className="background">
      <Container>
        <Navbar.Brand href="#home" className="text-uppercase cor-logo">
          <img className="logo" src={logo} alt="estetoscopio" /> DoctorRecife
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Usando Link do react-scroll para navegação suave */}
            <Link to="home" smooth={true} duration={500}>
              <Nav.Link className="cor-links">Home</Nav.Link>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <Nav.Link className="cor-links">Sobre</Nav.Link>
            </Link>
            <Link to="especialidades" smooth={true} duration={500}>
              <Nav.Link className="cor-links">Especialidades</Nav.Link>
            </Link>
            <Link to="especialidades" smooth={true} duration={500}>
              <Nav.Link className="cor-links">Feedback</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link to="contato" smooth={true} duration={500}>
              <Nav.Link className="cor-links">Contato</Nav.Link>
            </Link>
            <Button className="btn-success">
              <i className="bi bi-person-circle"></i> Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarD;
