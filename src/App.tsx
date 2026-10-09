/**
 * Main application component.
 * 
 * @module App
*/
import UserLayout from './layouts/mainLayout/MainLayout'
import { Navigate, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Services from './pages/services/Services'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />

          {/* Residually, any other path gets redirected to the home page. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
