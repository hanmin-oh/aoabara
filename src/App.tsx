import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import AogMain from './pages/AogMain'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

import Home from './pages/Home'

import './styles/layout.css'
import './styles/page.css'

export default function App() {
    const location = useLocation()
    const navigate = useNavigate()
    const [showTeamAog, setShowTeamAog] = useState(false)

    const handleEnterTeamAog = () => {
        setShowTeamAog(true)
        navigate('/')
    }

    if (!showTeamAog) {
        return <Home onEnterTeamAog={handleEnterTeamAog} />
    }

    const isAogMain = location.pathname === '/'

    return (
        <div className="layout">
            {!isAogMain && <Header onGoMain={() => setShowTeamAog(false)} />}

            <div className="pageFrame">
                <div key={location.pathname} className="pageAnim">
                    <Routes location={location}>
                        <Route path="/" element={<AogMain onGoMain={() => setShowTeamAog(false)} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>

            {!isAogMain && <Footer />}
        </div>
    )
}
