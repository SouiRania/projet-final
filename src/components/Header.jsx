import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';




function Header() {
  return (
   
    <div className="raniaheader">
     
      <Navbar expand="lg" className="bg-body-tertiary">
      
        <Container>
        
          <Navbar.Brand href="/"><strong><span style={{fontFamily:"cursive", color: "#c07016",fontSize:"30px"}}>El RAYHANE</span> Cuisine</strong> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                  <NavLink to="/"> Accueil</NavLink>
                  
              <NavDropdown title="Recettes" id="basic-nav-dropdown">

                
                <NavLink to={"Gateaux"}>Gâteaux</NavLink>
                <NavDropdown.Divider />
                <NavLink to={"Macarons"}>Macarons</NavLink>
                <NavDropdown.Divider />
                <NavLink to={"Hlou"}>Hlou Arbi</NavLink>
                
              </NavDropdown>

              <NavLink to={"Materiels"}>Matériels</NavLink>

              <NavLink to={"Contact"}>Contactez Nous</NavLink>

            </Nav>
          </Navbar.Collapse>
          
        </Container>
      
      </Navbar>
      
      </div>
     
  )
}

export default Header


