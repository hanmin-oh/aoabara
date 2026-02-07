import { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface HeaderProps {
    onGoMain: () => void
}

export default function Header({ onGoMain }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="menu">
                <div
                    className="brand"
                    role="button"
                    onClick={onGoMain}
                    style={{ cursor: 'pointer' }}
                >
                    <img src="/logo/aog.png" alt="AOG Company Logo" className="brandLogo" />
                    <span className="brandText">Team A.O.G</span>
                </div>

                <nav className="nav desktop-nav">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </nav>

                <button 
                    className="hamburger-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="메뉴"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)} />
                <nav className="mobile-nav">
                    <button 
                        className="close-btn"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ✕
                    </button>
                    <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
                    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
                </nav>
            </div>
        </>
    )
}
