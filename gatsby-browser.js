/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'bootstrap/scss/bootstrap.scss'
import './src/styles/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faFlag, faWrench, faBullhorn, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faUsers, faFlag, faWrench, faBullhorn, faShoppingBag)