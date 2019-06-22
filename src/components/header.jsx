import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CombinationMark from '../assets/combination_mark.svg'

const Header = ({ siteData }) => (
  <header>
    <Navbar
      collapseOnSelect
      expand="lg"
      variant={siteData.navbarVariant}
      style={{
        margin: '0 auto',
        backgroundColor: siteData.theme,
        marginBottom: '3rem'
      }}
    >
      <Container style={{ maxWidth: 1000 }}>
        <Navbar.Brand href="/"><CombinationMark /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#chi-siamo">Chi siamo</Nav.Link>
            <Nav.Link href="#obiettivi">I nostri obiettivi</Nav.Link>
            <Nav.Link href="#contattaci">Come contattarci</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
