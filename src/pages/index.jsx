import React from 'react'
import Layout from '../components/layout'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Col, Row } from 'react-bootstrap'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO/>
    <main className="page" id="page-home">
      <div id="hero">
        <Container>
          <Logo alt="unixMiB logo (a penguin)" />
          <h2 className="subtitle normal-text ">
            Gruppo Utenti <span className="tinted">Linux</span>
          </h2>
          <h2 className="subtitle normal-text">
            Università Milano <span className="tinted">Bicocca</span>
          </h2>
        </Container>
      </div>

      <section id="chiSiamo">
        {
          // eslint-disable-next-line
          <a className="anchor" aria-hidden="true" id="chi-siamo" />
        }
        <Container>
          <h2>Chi Siamo</h2>
          <FontAwesomeIcon className="faicon" icon="users" />
          <div className="desc">
            unix<span className="h2">MiB</span> nasce nell'Ottobre 2015 per
            opera di alcuni studenti della <span className="h2">Bicocca</span>{' '}
            appassionati di <span className="h2">Open Source</span> e di{' '}
            <span className="h2">Linux</span>.
          </div>
        </Container>
      </section>

      <div className="img eh15" id="foto1" />

      <section id="cosaFacciamo">
        {
          // eslint-disable-next-line
          <a className="anchor" aria-hidden="true" id="obiettivi" />
        }
        <Container>
          <h2>I nostri obiettivi</h2>
          <Row>
            <Col md={6} className="pb-4">
              <FontAwesomeIcon className="faicon" icon="flag" />
              <h3 className="title">Eventi</h3>
              <p className="desc">
                Organizziamo eventi per diffondere la filosofia dell'open source
                e del software libero.
                <br /> Hai un idea da proporre? Condividila con noi!
              </p>
            </Col>
            <Col md={6} className="pb-4">
              <FontAwesomeIcon className="faicon" icon="wrench" />
              <h3 className="title">Assistenza</h3>
              <p className="desc">
                Difficoltà nell'installare Linux o problemi con qualche
                applicazione?
                <br /> Nessun problema, offriamo supporto tecnico gratuito agli
                studenti dell'università Bicocca per tutti gli strumenti open
                source.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="img eh15" id="foto2" />

      <section id="comeContattarci">
        {
          // eslint-disable-next-line
          <a className="anchor" aria-hidden="true" id="contattaci" />
        }
        <h2>Come contattarci</h2>
        <Container>
          <Row>
            <Col md>
              <a
                href="https://telegram.me/unixmib/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="faicon"
                  icon={['fab', 'telegram-plane']}
                />
                <b>Telegram</b>
              </a>
            </Col>

            <Col md>
              <a
                href="https://telegram.me/unixmibinfo/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="faicon" icon="bullhorn" />
                <b>Canale</b>
              </a>
            </Col>

            <Col md>
              <a href="/mercatino/">
                <FontAwesomeIcon className="faicon" icon="shopping-basket" />
                <b>Mercatino</b>
              </a>
            </Col>

            <Col md>
              <a
                href="https://www.facebook.com/unixmib/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="faicon"
                  icon={['fab', 'facebook-f']}
                />
                <b>Facebook</b>
              </a>
            </Col>

            <Col md>
              <a
                href="https://github.com/unixmib/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="faicon"
                  icon={['fab', 'github-alt']}
                />
                <b>Github</b>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)

export default IndexPage
