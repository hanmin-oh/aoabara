import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import AogMain from './pages/AogMain'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

import Home from './pages/Home'

import './styles/layout.css'
import './styles/page.css'

export default function App() {
    const location = useLocation()
    const [showTeamAog, setShowTeamAog] = useState(false)

    if (!showTeamAog) {
        return <Home onEnterTeamAog={() => setShowTeamAog(true)} />
    }

    return (
        <div className="layout">
            <Header onGoMain={() => setShowTeamAog(false)} />

            <div className="pageFrame">
                <div key={location.pathname} className="pageAnim">
                    <Routes location={location}>
                        <Route path="/" element={<AogMain />} />
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
