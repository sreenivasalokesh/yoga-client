import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { client } from './apollo-client'
import { ApolloProvider } from '@apollo/client'

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
