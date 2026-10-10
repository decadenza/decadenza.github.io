/**
 * Main entry point of the frontend application.
 * 
 * It wraps the {@link App} component with necessary providers and routing.
 * 
 * @module main
*/

import './App.css'
import { GENERAL } from './constants'
import { Suspense, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from "react-router-dom"
import Loading from './components/loading/Loading'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    {/* Set the application title using the special rendering behaviour of React.*/}
    <title>{GENERAL.APP_NAME}</title>
    <Suspense fallback={<Loading />}>
      <StrictMode>
        {/* NOTE: Providers wrap the application here, in the relevant order. */}
        <App />
      </StrictMode>
    </Suspense>
  </HashRouter>
)
