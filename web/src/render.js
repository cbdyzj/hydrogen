import { render } from 'react-dom'
import { createElement } from 'react'

import App from './App.jsx'

import './styles/utilities.css'

render(createElement(App), document.querySelector('#app'))
