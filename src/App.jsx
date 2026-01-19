import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './styles/layout.css'
import './styles/page.css'

export default function App() {
    const location = useLocation()

    return (
        <div className="layout">
            <Header />

            <div className="pageFrame">
                <div key={location.pathname} className="pageAnim">
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>

            <Footer />
        </div>
    )
}
