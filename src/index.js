//const element = document.createElement('h1')

//element.innerText = 'Hello React'

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1> hello React </h1>
const container = document.getElementById('root')

ReactDOM.render(element, container)

