import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from './context/Context'
import './styles/global.scss'
import './i18n'
import App from './App'

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('app')
)
