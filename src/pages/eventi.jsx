import React from 'react'
import Layout from '../components/layout'
import { Row, Col, Container, Badge } from 'react-bootstrap'
import Ldmi from '../assets/events/logos/ldmi.svg'
import Akademy from '../assets/events/logos/akademy.svg'
import Extraordy from '../assets/events/logos/extraordy.svg'
import Tgif from '../assets/events/logos/tgif.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SEO from '../components/seo'

const events = [
  {
    logo: Ldmi,
    new: true,
    name: 'Linux Day Milano 2019',
    date: 'Sabato 26 Ottobre 2019',
    time: 'Ore 9:30',
    location: 'Università Milano Bicocca',
    building: 'Edificio U7',
    website: 'linuxdaymilano.org',
  },
  {
    logo: Akademy,
    name: 'Akademy',
    date: 'Dal 7 al 13 Settembre 2019',
    location: 'Università Milano Bicocca',
    building: 'Edifici U1, U2, U3 e U4',
    website: 'akademy.kde.org/',
  },
  {
    logo: Extraordy,
    name: 'Corso Red Hat® System Administrator',
    date: '3, 10, 17 e 24 Maggio 2019',
    location: 'Università Milano Bicocca',
    building: 'Edificio U24',
    website: 'extraordy.com',
  },
  {
    logo: Tgif,
    name: "Thank God It's Friday",
    date: 'Di venerdì',
    location: 'Università Milano Bicocca',
    repository: 'github.com/unixMiB/events',
  },
]

const Eventi = () => (
  <Layout>
    <SEO title="Eventi" />
    <main className="page" id="page-eventi">
      <div id="hero">
        <h2 className="title">
          I nostri <span>eventi</span>
        </h2>
      </div>

      <section id="eventi">
        <Container>
          {events.map(event => {
            return (
              <>
                <Row className="justify-content-center align-items-center d-flex">
                  <Col
                    xl={5}
                    md={4}
                    sm={0}
                    className="d-none text-right d-md-block d-xl-block"
                  >
                    <div style={{ marginLeft: 'auto' }}>
                      <event.logo
                        class="logo-backgroud rounded"
                        style={{ maxWidth: '15rem', maxHeigth: '10rem' }}
                      />
                    </div>
                  </Col>
                  <Col xl={7} md={8} sm={12} className="align-middle">
                    <div className="text">
                      <h2>
                        {event.name}{' '}
                        {event.new != null && event ? (
                          <Badge className="" variant="success">
                            New
                          </Badge>
                        ) : (
                          ''
                        )}
                      </h2>
                      <p>
                        {event.date != null ? (
                          <>
                            <FontAwesomeIcon icon="calendar" /> {event.date}
                            <br />
                          </>
                        ) : (
                          ''
                        )}
                        {event.time != null ? (
                          <>
                            <FontAwesomeIcon icon="clock" /> {event.time}
                            <br />
                          </>
                        ) : (
                          ''
                        )}
                        {event.location != null ? (
                          <>
                            <FontAwesomeIcon icon="map-marked-alt" />{' '}
                            {event.location}
                            <br />
                          </>
                        ) : (
                          ''
                        )}
                        {event.building != null ? (
                          <>
                            <FontAwesomeIcon icon="chevron-right" />{' '}
                            {event.building}
                            <br />
                          </>
                        ) : (
                          ''
                        )}
                        {event.repository != null ? (
                          <>
                            <FontAwesomeIcon icon={['fab', 'github-alt']} />{' '}
                            <a target="_blank" rel="noopener noreferrer" href={'https://' + event.repository}>
                              {event.repository}
                            </a>
                            <br />
                          </>
                        ) : (
                          ''
                        )}
                        {event.website != null ? (
                          <>
                            <FontAwesomeIcon icon="globe" />{' '}
                            <a target="_blank" rel="noopener noreferrer" href={'https://' + event.website}>{event.website}</a>
                          </>
                        ) : (
                          ''
                        )}
                      </p>
                    </div>
                  </Col>
                </Row>
                <hr />
              </>
            )
          })}
        </Container>
      </section>
      <div className="events-footer">
        E molto altro ancora prossimamente. Rimani aggiornato su{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://fb.me/unixmib">
          <b>Facebook</b>
        </a>{' '}
        e su{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://t.me/unixmibinfo">
          <b>Telegram</b>
        </a>{' '}
        per non perderti nulla!
      </div>
    </main>
  </Layout>
)

export default Eventi
