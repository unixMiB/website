import React from 'react'
import Layout from '../components/layout'
import { Jumbotron, Button, Container } from 'react-bootstrap'

const Mercatino = () => (
  <Layout>
    <main id="page-mercatino">
      <div id="hero">
        <Container id="jumbotron-container">
          <Jumbotron id="jumbotron">
            <h1>Mercatino usato unixMiB</h1>
            <p>
              Il mercatino dell'usato di unixMiB ti permette di creare
              inserzioni per vendere quello che non usi più. Dai una seconda
              vita ai tuoi oggetti, gratuitamente.
            </p>
            <hr />
            <p>
              Per utilizzare il mercatino avrai bisogno di utilizzare{' '}
              <a href="https://telegram.org/">Telegram</a>.
            </p>
            <p>
              <div class="center">
                <Button
                  className="button"
                  variant="primary"
                  href="https://t.me/unixmib_mercatino_bot"
                >
                  Apri la chat
                </Button>
                <Button
                  className="button"
                  variant="secondary"
                  href="https://t.me/s/unixmib_mercatino"
                >
                  Guarda le inserzioni
                </Button>
              </div>
            </p>
          </Jumbotron>
        </Container>
      </div>
    </main>
  </Layout>
)

export default Mercatino
