import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CombinationMarkLight from '../assets/combination_mark.svg'
import CombinationMarkDark from '../assets/combination_mark_dark.svg'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = ({ siteData }) => (
  <header>
    <ThemeToggler>
      {({ theme }) => (
        <Navbar
          id="navbar"
          collapseOnSelect
          expand="md"
          variant={theme === 'dark' ? 'dark' : 'light'}
          style={{
            backgroundColor: siteData.theme,
          }}
        >
          <Container>
            <Navbar.Brand style={{ paddingTop: 0, paddingBottom: 0 }} href="/">
              {theme === 'dark' ? (
                <CombinationMarkDark />
              ) : (
                <CombinationMarkLight />
              )}
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
      )}
    </ThemeToggler>
  </header>
)

export default Header
