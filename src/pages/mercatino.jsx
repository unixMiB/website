import React from 'react'
import Layout from '../components/layout'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Seo from '../components/seo'

const Mercatino = () => (
  <Layout>
    <Seo title='Mercatino' />
    <main className='page' id='page-mercatino'>
      <div id='hero'>
        <h2 className='title'>
          Il nostro <span>mercatino</span>
        </h2>
      </div>

      <section id='cosa' className='center'>
        <Container>
          <Row>
            <Col>
              <h2>Cos'è il mercatino</h2>
              <FontAwesomeIcon className='faicon' icon='question' />
              <div className='desc'>
                <p>
                  Il mercatino dell'usato di unixMiB ti permette di creare
                  inserzioni per vendere quello che non usi più. Dai una seconda
                  vita ai tuoi oggetti, gratuitamente.
                </p>
              </div>
            </Col>
          </Row>
          <Button
            className='button'
            variant='success'
            href='https://t.me/unixmib_mercatino_bot'>
            Inizia a vendere
          </Button>
        </Container>
      </section>

      <section id='partecipa'>
        <Container>
          <h2>Come partecipare</h2>
          <Row>
            <Col md={6} className='pb-4'>
              <FontAwesomeIcon className='faicon' icon='check' />
              <h3 className='title'>Cosa posso vendere</h3>
              <div className='desc'>
                <p>
                  Nel mercatino sono ammesse tutte le inserzioni pertinenti al
                  mondo della tecnologia
                </p>
              </div>
              <Button
                className='button align-text-bottom'
                variant='secondary'
                href='https://t.me/s/unixmib_mercatino'>
                Guarda le inserzioni
              </Button>
            </Col>
            <Col md={6} className='pb-4'>
              <FontAwesomeIcon className='faicon' icon='compass' />
              <h3 className='title'>Cosa mi serve</h3>
              <div className='desc'>
                <p>
                  Per utilizzare il mercatino avrai bisogno di utilizzare{' '}
                  <a href='https://telegram.org/'>Telegram</a>, un programma
                  gratuito di messaggistica.
                </p>
              </div>
              <Button
                className='button align-text-bottom'
                variant='secondary'
                href='https://telegram.org/apps'>
                Scarica ora
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)

export default Mercatino
