import React from 'react'
import Layout from '../components/layout'
import { Row, Col, Container } from 'react-bootstrap'
import Ldmi from '../assets/events/logos/ldmi.svg'
import Akademy from '../assets/events/logos/akademy.svg'
import Extraordy from '../assets/events/logos/extraordy.svg'
import Tgif from '../assets/events/logos/tgif.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Mercatino = () => (
  <Layout>
    <main className="page" id="page-eventi">
      <div id="hero">
        <h2 class="title">
          I nostri <span>eventi</span>
        </h2>
      </div>

      <section id="eventi">
        <div className="ldmi">
          <Container>
            <Row>
              <Col md={4} sm={3} className="d-none d-md-block d-xl-block">
                <Ldmi/>
              </Col>
              <Col md={8} sm={9}>
                <div class="text">
                  <h2>Linux Day Milano 2019</h2>
                  <p>
                    <FontAwesomeIcon icon="calendar" /> Sabato 26 Ottobre 2019
                    <br />
                    <FontAwesomeIcon icon="clock" /> Ore 9:30
                    <br />
                    <FontAwesomeIcon icon="globe" /> linuxdaymilano.org
                    <br />
                    <FontAwesomeIcon icon="map-marked-alt" /> Università Milano
                    Bicocca
                    <br />
                    <FontAwesomeIcon icon="chevron-right" /> Edificio U7
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="akademy">
          <Container>
            <Row>
              <Col md={4} sm={3} className="d-none d-md-block d-xl-block">
                <Akademy />
              </Col>
              <Col md={8} sm={9}>
                <div class="text">
                  <h2>Linux Day Milano 2019</h2>
                  <p>
                    <FontAwesomeIcon icon="calendar" /> Dal 7 al 13 Settembre
                    2019
                    <br />
                    <FontAwesomeIcon icon="map-marked-alt" /> Università Milano
                    Bicocca
                    <br />
                    <FontAwesomeIcon icon="globe" /> akademy.kde.org
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="rhel">
          <Container>
            <Row>
              <Col md={4} sm={3} className="d-none d-md-block d-xl-block">
                <Extraordy />
              </Col>
              <Col md={8} sm={9}>
                <div class="text">
                  <h2>Corso Red Hat® System Administrator</h2>
                  <p>
                    <FontAwesomeIcon icon="calendar" /> 3, 10, 17 e 24 Maggio
                    2019
                    <br />
                    <FontAwesomeIcon icon="map-marked-alt" /> Università Milano
                    Bicocca
                    <br />
                    <FontAwesomeIcon icon="chevron-right" /> Edificio U24
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="tgif">
          <Container>
            <Row>
              <Col md={4} sm={3} className="d-none d-md-block d-xl-block">
                <Tgif />
              </Col>
              <Col md={8} sm={9}>
                <div class="text">
                  <h2>Thank God It's Friday</h2>
                  <p>
                    <FontAwesomeIcon icon="map-marked-alt" /> Università Milano
                    Bicocca
                    <br />
                    <FontAwesomeIcon icon="chevron-right" /> Edificio U24
                    <br />
                    <FontAwesomeIcon
                      style={{width: '1.125em'}}
                      icon={['fab', 'facebook-f']}
                    />{' '}
                    fb.me/unixmib
                    <br />
                    <FontAwesomeIcon
                      style={{width: '1.125em'}}
                      icon={['fab', 'telegram-plane']}
                    />{' '}
                    t.me/unixmibinfo
                    <br />
                    <FontAwesomeIcon
                      style={{width: '1.125em'}}
                      icon={['fab', 'github-alt']}
                    />{' '}
                    github.com/unixmib
                    <br />
                    <FontAwesomeIcon icon="map-marked-alt" /> Università Milano
                    Bicocca
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* <div id="picture4" class="img eh20" />
      <div id="picture1" class="img eh20" />
      <div id="picture2" class="img eh20" />
      <div id="picture3" class="img eh20" /> */}
      <div className="events-footer">
        E molto altro ancora prossimamente. Rimani aggiornato su{' '}
        <a href="https://fb.me/unixmib"><b>Facebook</b></a> e su{' '}
        <a href="https://t.me/unixmibinfo"><b>Telegram</b></a> per non perderti nulla!
      </div>
    </main>
  </Layout>
)

export default Mercatino
