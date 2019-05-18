import '../css/Nav.css'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
(
    <div>
      <i className="fa fa-zsearch-dollar"></i>
        <Navbar bg="dark" variant="dark" fixed="top" >
          <Navbar.Brand >Bolsa De Valores</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="../corretoras">Corretoras</Nav.Link>
              <Nav.Link href="../acao">Ações</Nav.Link>
              <Nav.Link href="../transacao">Transações</Nav.Link>
            </Nav>
          </Navbar.Collapse>
    </Navbar>;
    </div>
)