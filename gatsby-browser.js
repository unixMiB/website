/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'bootstrap/scss/bootstrap.scss'
import './src/styles/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faFlag, faWrench, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faGithub, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
library.add(faUsers, faFlag, faWrench, faBullhorn, faTelegram, faGithub, faFacebookSquare)