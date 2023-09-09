import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/nav'
import Sidebar from './components/sidebar/sidebar'
import { Home } from './pages/home'
import NotFound from './pages/404'
import Components from './pages/components'
import { componentsData } from './components'


function App() {
  const location = useLocation()
  const showSidebar = !(location.pathname === "/" || location.pathname === "/components")

  return (
    <>
      <Nav />
      <main className="container" style={{ display: !showSidebar ? "flex" : "grid" }}>
        {showSidebar && <Sidebar />}
        <ComponentRoutes />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          {/* Add 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App;


const ComponentRoutes = () => {
  return (
    <Routes>
      {
        componentsData.map((link, index) => {
          return (
            <Route key={index} path={link.path} element={<link.component />} />
          )
        })
      }
    </Routes>
  )
}
