import React from 'react'
import Layout from '../components/layout'
import { Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotFoundPage = () => (
  <Layout>
    <main class="page" id="page-404">
      <div id="hero">
        <h2 class="title">
          Pagina non <span>trovata</span>
        </h2>
      </div>

      <section>
        <Container>
          <div class="center">
            <h2>La pagina che stai cercando non esiste</h2>
            <br />
            <FontAwesomeIcon class="faicon" icon="sad-tear" />
            <br />
            <Button variant="success" href="/">
              <FontAwesomeIcon icon="home" /> Homepage
            </Button>
          </div>
        </Container>
      </section>
    </main>
  </Layout>
)

export default NotFoundPage
