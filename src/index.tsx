import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as ReduxProvider } from 'react-redux'
import { makeStore } from './state'
import { PartyContextProvider } from './contexts/PartyContext'

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()
const engine: Styletron = new Styletron()
const store = makeStore()

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <PartyContextProvider>
          <App />
        </PartyContextProvider>
      </StyletronProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
