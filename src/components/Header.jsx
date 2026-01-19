import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="menu">
            {/* 로고 + 회사명 */}
            <NavLink to="/" className="brand">
                <img
                    src="/logo/aog.png"
                    alt="AOG Company Logo"
                    className="brandLogo"
                />
                <span className="brandText">AOG COMPANY</span>
            </NavLink>

            <nav className="nav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Our Services</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </header>
    )
}
