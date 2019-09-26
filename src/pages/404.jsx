import React from 'react'
import Layout from '../components/layout'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotFoundPage = () => (
  <Layout>
    <main id="page-404">
      <div class="bg" />
      <div class="text">
        <h1>Pagina non trovata</h1>
        <p>La pagina che stai cercando non esiste.</p>
        <Button variant="success" href="/">
          <FontAwesomeIcon icon="home" /> Homepage
        </Button>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
