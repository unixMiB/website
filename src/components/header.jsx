import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CombinationMark from '../assets/combination_mark.svg'

const Header = ({ siteData }) => (
  <header>
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      variant={siteData.navbarVariant}
      style={{
        backgroundColor: siteData.theme,
      }}
    >
      <Container>
        <Navbar.Brand style={{ paddingTop: 0, paddingBottom: 0 }} href="/">
          <CombinationMark />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link className="link" href="/#chi-siamo">
              Chi siamo
            </Nav.Link>
            <Nav.Link className="link" href="/#obiettivi">
              Obiettivi
            </Nav.Link>
            <Nav.Link className="link" href="/eventi">
              Eventi
            </Nav.Link>
            <Nav.Link className="link" href="/mercatino">
              Mercatino
            </Nav.Link>
            <Nav.Link className="link" href="/#contattaci">
              Contattaci
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
