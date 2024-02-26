import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Header() {
  return (
    <div className="raniaheader">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#Accueil">El RAYHANE cuisine</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "greenyellow"
                        : "Black",
                    })}
                  >
                    Home
                  </NavLink>
                  
              <NavDropdown title="Recettes" id="basic-nav-dropdown">
                <NavLink to={"Gateaux"}>Gâteaux</NavLink><br />
                <NavLink to={"Macarons"}>Macarons</NavLink>
                <NavLink to={"Hlou Arbi"}>Hlou Arbi</NavLink>
                <NavLink to={"Les gateaux orientaux"}>Les gâteaux orientaux</NavLink>
              </NavDropdown>

              <NavLink to={"About"}>About</NavLink>

              <NavLink to={"Contact"}>Contact</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  )
}

export default Header


// <div
//         style={{
//           display: "flex",
//           background: "black",
//           padding: "5px 0 5px 5px",
//           fontSize: "20px",
//         }}
//       >
//         <div style={{ margin: "10px" }}>
//           <NavLink
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive
//                 ? "greenyellow"
//                 : "white",
//             })}
//           >
//             Home
//           </NavLink>
//         </div>
//         <div style={{ margin: "10px" }}>
//           <NavLink
//             to="/about"
//             style={({ isActive }) => ({
//               color: isActive
//                 ? "greenyellow"
//                 : "white",
//             })}
//           >
//             About
//           </NavLink>
//         </div>
//         <div style={{ margin: "10px" }}>
//           <NavLink
//             to="/contact"
//             style={({ isActive }) => ({
//               color: isActive
//                 ? "greenyellow"
//                 : "white",
//             })}
//           >
//             Contact
//           </NavLink>
//         </div>
//       </div>
