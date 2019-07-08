import React from 'react'
import Layout from '../components/layout'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndexPage = () => (
  <Layout>
    <main id="page-home">
      <div class="center" id="hero">
        {/* <h1 class="title">unix<span>MiB</span></h1> */}
        <Logo class="eh10" alt="unixMiB logo (a penguin)" />
        <h2 class="subtitle normal-text ">
          Gruppo Utenti <span class="tinted">Linux</span>
        </h2>
        <h2 class="subtitle normal-text">
          Università Milano <span class="tinted">Bicocca</span>
        </h2>
      </div>

      <section id="chiSiamo" class="center">
        {
          // eslint-disable-next-line
          <a class="anchor" aria-hidden="true" id="chi-siamo" />
        }
        <h2>Chi Siamo</h2>
        <FontAwesomeIcon class="faicon" icon="users" />
        <div class="desc">
          <span class="hl">unixMiB</span> nasce nell'Ottobre 2015 per opera di
          alcuni studenti della <span class="h2">Bicocca</span> appassionati di{' '}
          <span class="h2">Open Source</span> e di <span class="hl">Linux</span>
          .
        </div>
      </section>

      <div class="img eh15" id="foto1"></div>

      <section id="cosaFacciamo" class="center">
        {
          // eslint-disable-next-line
          <a class="anchor" aria-hidden="true" id="obiettivi" />
        }
        <h2>I nostri obiettivi</h2>
        <div class="row">
          <div class="col">
            <FontAwesomeIcon class="faicon" icon="flag" />
            <h3 class="title">Eventi</h3>
            <p class="desc">
              Organizziamo eventi per diffondere la filosofia dell'open source e
              del software libero.
              <br /> Hai un idea da proporre? Condividila con noi!
            </p>
          </div>
          <div class="col">
            <FontAwesomeIcon class="faicon" icon="wrench" />
            <h3 class="title">Assistenza</h3>
            <p class="desc">
              Difficoltà nell'installare Linux o problemi con qualche
              applicazione?
              <br /> Nessun problema, offriamo supporto tecnico gratuito agli
              studenti dell'università Bicocca per tutti gli strumenti open
              source.
            </p>
          </div>
        </div>
      </section>

      <div class="img eh15" id="foto2"></div>

      <section id="comeContattarci" class="center">
        {
          // eslint-disable-next-line
          <a class="anchor" aria-hidden="true" id="contattaci" />
        }
        <h2>Come contattarci</h2>
        <div class="row">
          <div class="col">
            <a href="https://telegram.me/unixmib/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon class="faicon" icon={['fab', 'telegram']} />
              <b>Gruppo Telegram</b>
            </a>
          </div>
          <div class="col">
            <a href="https://telegram.me/unixmibinfo/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon class="faicon" icon="bullhorn" />
              <b>Canale Telegram</b>
            </a>
          </div>
          <div class="col">
            <a href="/mercatino/">
              <FontAwesomeIcon class="faicon" icon="shopping-bag" />
              <b>Mercatino</b>
            </a>
          </div>
          <div class="col">
            <a href="https://www.facebook.com/unixmib/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon
                class="faicon"
                icon={['fab', 'facebook-square']}
              />
              <b>Pagina Facebook</b>
            </a>
          </div>
          <div class="col">
            <a href="https://github.com/unixmib/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon class="faicon" icon={['fab', 'github']} />
              <b>Github</b>
            </a>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
