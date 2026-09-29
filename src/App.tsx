/**
 * Main application component.
 * 
 * @module App
*/
import UserLayout from './layouts/mainLayout/MainLayout'
import { Navigate, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          {/* Residually, any other path gets redirected to the home page. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
