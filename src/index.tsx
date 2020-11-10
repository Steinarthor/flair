import React from 'react'
import ReactDOM from 'react-dom'
import client from "./client"
import {ApolloProvider} from '@apollo/client'
import { Provider } from './context/Context'
import './styles/global.scss'
import './i18n'
import App from './App'

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById('app')
)
