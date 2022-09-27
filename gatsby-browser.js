/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'bootstrap/scss/bootstrap.scss'
import './src/styles/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUsers,
  faFlag,
  faWrench,
  faBullhorn,
  faShoppingBag,
  faShoppingBasket,
  faQuestion,
  faCompass,
  faCalendar,
  faClock,
  faMapMarkedAlt,
  faGlobe,
  faCheck,
  faSadTear,
  faEnvelope,
  faChevronRight,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(
  fab,
  faCheck,
  faUsers,
  faFlag,
  faWrench,
  faBullhorn,
  faShoppingBag,
  faShoppingBasket,
  faCalendar,
  faClock,
  faSadTear,
  faCompass,
  faMapMarkedAlt,
  faGlobe,
  faQuestion,
  faEnvelope,
  faChevronRight,
  faHome
)

export const onServiceWorkerUpdateReady = () => {
  // Change me to a react toast

  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};