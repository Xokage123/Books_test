//node_module
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
// components
import { App } from './App'
// styles
import './styles/css/normalize.css'
import './styles/scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@material-tailwind/react/tailwind.css";

const rootEl = document.getElementById('root')
render( <StrictMode >
    <App / >
    </StrictMode>,
    rootEl
)