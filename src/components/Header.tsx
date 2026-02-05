import { NavLink } from 'react-router-dom'

interface HeaderProps {
    onGoMain: () => void
}

export default function Header({ onGoMain }: HeaderProps) {
    return (
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

            <nav className="nav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </header>
    )
}
