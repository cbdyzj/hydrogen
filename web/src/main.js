import { render } from 'react-dom'
import { createElement } from 'react'

import App from './App'

import './styles/utilities.less'

render(createElement(App), document.querySelector('#app'))
