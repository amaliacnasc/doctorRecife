import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'; // Corrigido

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/stethoscope.png';
import './navbar.css';

function NavbarD() {
  return (
    <Navbar collapseOnSelect expand="lg" className="background">
      <Container>
        <Navbar.Brand href="#home" className='text-uppercase cor-logo'>
          <img className='logo' src={logo} alt='estetoscopio' /> DoctorRecife
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='cor-links' href="#features">Home</Nav.Link>
            <Nav.Link className='cor-links' href="#pricing">Sobre</Nav.Link>
            <Nav.Link className='cor-links' href="#pricing">Especialidades</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='cor-links' href="#deets">Contato</Nav.Link>
            <Button className=' btn-success'><i class="bi bi-person-circle"></i>  Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarD;
