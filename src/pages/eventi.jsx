import React from 'react'
import Layout from '../components/layout'
import { Row } from 'react-bootstrap'
import Ldmi from '../assets/ldmi.svg'
import Akademy from '../assets/akademy.svg'
import Extraordy from '../assets/extraordy.svg'
import Tgif from '../assets/tgif.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Mercatino = () => (
  <Layout>
    <main id="page-eventi">
      <div id="hero">
        <h2 class="title">I nostri eventi</h2>
      </div>
      <section id="ldmi">
        <Row>
          <div class="image">
            <Ldmi />
          </div>
          <div class="text front">
            <h2>Linux Day Milano 2019</h2>
            <FontAwesomeIcon icon="calendar" /> Sabato 26 Ottobre 2019
            <br />
            <FontAwesomeIcon icon="clock" /> Ore 9:30
            <br />
            <FontAwesomeIcon icon="globe" /> linuxdaymilano.org
            <br />
            <FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca
            <br />
            <FontAwesomeIcon icon="chevron-right" /> Edificio U7
          </div>
        </Row>
      </section>
      <section id="akademy">
        <Row>
          <div class="image">
            <Akademy />
          </div>
          <div class="text front">
            <h2>Akademy</h2>
            <FontAwesomeIcon icon="calendar" /> Dal 7 al 13 Settembre 2019
            <br />
            <FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca
            <br />
            <FontAwesomeIcon icon="globe" /> akademy.kde.org
          </div>
        </Row>
      </section>
      <section id="rhel">
        <Row>
          <div class="image">
            <Extraordy />
          </div>
          <div class="text front">
            <h2>Corso Red Hat® System Administrator</h2>
            <FontAwesomeIcon icon="calendar" /> 3, 10, 17 e 24 Maggio 2019
            <br />
            <FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca
            <br />
            <FontAwesomeIcon icon="chevron-right" /> Edificio U24
          </div>
        </Row>
      </section>
      <section id="tgif">
        <Row>
          <div class="image">
            <Tgif />
          </div>
          <div class="text front">
            <h2>Thank got it's friday</h2>
            <FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca
            <br />
            <FontAwesomeIcon icon="chevron-right" /> Edificio U24
            <br />
            <FontAwesomeIcon
              class="faicon"
              icon={['fab', 'facebook-square']}
            />{' '}
            fb.me/unixmib
            <br />
            <FontAwesomeIcon class="faicon" icon={['fab', 'telegram']} />{' '}
            t.me/unixmibinfo
            <br />
            <FontAwesomeIcon icon="map-marked-alt" /> Università Milano Bicocca
          </div>
        </Row>
      </section>
      <footer>
        E molto altro ancora prossimamente. Rimani aggiornato su{' '}
        <a href="fb.me/unixmib">Facebook</a> e su{' '}
        <a href="t.me/unixmibinfo">Telegram</a> per non perderti nulla!
      </footer>
    </main>
  </Layout>
)

export default Mercatino
