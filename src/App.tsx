import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/nav'
import Sidebar from './components/sidebar/sidebar'
import { Home } from './pages/home'
import NotFound from './pages/404'
import Components from './pages/components'
import AvatarDoc from './documentation/avatar-doc'
import AlertDoc from './documentation/alert-doc'
import BadgeDoc from './documentation/badge-doc'
import ButtonDoc from './documentation/button-doc'
import CardDoc from './documentation/card-doc'


function App() {
  const location = useLocation()
  const showSidebar = !(location.pathname === "/" || location.pathname === "/components")

  return (
    <>
      <Nav />
      <main className="container" style={{ display: !showSidebar ? "flex" : "grid" }}>
        {showSidebar && <Sidebar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/avatar" element={<AvatarDoc />} />
          <Route path="/alert" element={<AlertDoc />} />
          <Route path="/badge" element={<BadgeDoc />} />
          <Route path="/button" element={<ButtonDoc />} />
          <Route path="/card" element={<CardDoc />} />
          {/* Add 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
