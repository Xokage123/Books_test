//node_module
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
// components
import { App } from './App'
// styles
import './styles/css/normalize.css'
// import styles from './styles/scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const rootEl = document.getElementById('root')
render( 
  <StrictMode >
    <App / >
  </StrictMode>,
    rootEl
)