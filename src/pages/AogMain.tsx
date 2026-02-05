import { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/aog.css'

const IMAGES = [
    '/securities/left1.png',
    '/securities/left2.png',
    '/securities/right1.png',
    '/securities/right2.png',
]

interface CrossFadeProps {
    images: string[]
    interval?: number
}

function CrossFade({ images, interval = 4000 }: CrossFadeProps) {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const t = setInterval(() => {
            setIdx((v) => (v + 1) % images.length)
        }, interval)
        return () => clearInterval(t)
    }, [images.length, interval])

    return (
        <div className="hero-bg">
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    className={`hero-img ${i === idx ? 'active' : ''}`}
                />
            ))}
            <div className="hero-overlay" />
        </div>
    )
}

const SECTION_COUNT = 4

interface AogMainProps {
    onGoMain: () => void
}

export default function AogMain({ onGoMain }: AogMainProps) {
    const navigate = useNavigate()
    const [showContact, setShowContact] = useState(false)
    const [currentSection, setCurrentSection] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const isScrolling = useRef(false)

    const handleServiceClick = (category: string) => {
        navigate(`/portfolio?category=${category}`)
    }

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
            
            if (isScrolling.current) return
            
            const delta = e.deltaY
            if (Math.abs(delta) < 10) return

            if (delta > 0 && currentSection < SECTION_COUNT - 1) {
                isScrolling.current = true
                setCurrentSection(prev => prev + 1)
                setTimeout(() => { isScrolling.current = false }, 800)
            } else if (delta < 0 && currentSection > 0) {
                isScrolling.current = true
                setCurrentSection(prev => prev - 1)
                setTimeout(() => { isScrolling.current = false }, 800)
            }
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false })
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel)
            }
        }
    }, [currentSection])

    return (
        <div className="aog-wrapper" ref={containerRef}>
            {/* Header - Only visible on first section */}
            <header className={`aog-header ${currentSection === 0 ? 'visible' : 'hidden'}`}>
                <div
                    className="aog-brand"
                    role="button"
                    onClick={onGoMain}
                    style={{ cursor: 'pointer' }}
                >
                    <img src="/logo/aog.png" alt="AOG" className="aog-brand-logo" />
                    <span className="aog-brand-text">Team A.O.G</span>
                </div>

                <nav className="aog-nav">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </nav>
            </header>

            <div 
                className="aog-container"
                style={{
                    transform: `translateY(-${currentSection * 100}vh)`,
                }}
            >
                {/* Section 1: Hero */}
                <section className="section section-hero">
                    <CrossFade images={IMAGES} />
                    <div className="section-content">
                        <div className="hero-logo">
                            <img src="/logo/aog.png" alt="AOG" />
                        </div>
                        <h1 className="hero-title">
                            A.O.G<br/>COMPANY
                        </h1>
                        <p className="hero-subtitle">Professional Security & Protection</p>
                        <p className="hero-permit">서울지방경찰청 허가 제 4915호</p>
                    </div>
                    <div className="scroll-hint">SCROLL DOWN</div>
                </section>

                {/* Section 2: Services */}
                <section className="section section-services">
                    <div className="section-content">
                        <div 
                            className="section-header" 
                            onClick={() => navigate('/portfolio')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h2>PORTFOLIO</h2>
                            <p>전문 경호 서비스</p>
                        </div>
                        
                        <div className="services-grid">
                            <div className="service-card" onClick={() => handleServiceClick('personal')}>
                                <div className="service-number">01</div>
                                <h3>신변 경호</h3>
                                <p>VIP 및 주요 인사 신변 보호</p>
                            </div>
                            <div className="service-card" onClick={() => handleServiceClick('event')}>
                                <div className="service-number">02</div>
                                <h3>행사 경호</h3>
                                <p>각종 행사 및 이벤트 보안</p>
                            </div>
                            <div className="service-card" onClick={() => handleServiceClick('protocol')}>
                                <div className="service-number">03</div>
                                <h3>의전 경호</h3>
                                <p>공식 일정 수행 및 동선 관리</p>
                            </div>
                            <div className="service-card" onClick={() => handleServiceClick('facility')}>
                                <div className="service-number">04</div>
                                <h3>시설 보안경비</h3>
                                <p>건물 및 시설 보안 관리</p>
                            </div>
                            <div className="service-card" onClick={() => handleServiceClick('driver')}>
                                <div className="service-number">05</div>
                                <h3>의전 드라이버</h3>
                                <p>안전 운행 및 이동 지원</p>
                            </div>
                            <div className="service-card" onClick={() => handleServiceClick('valet')}>
                                <div className="service-number">06</div>
                                <h3>발렛 서비스</h3>
                                <p>행사 및 시설 차량 관리</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Stats */}
                <section className="section section-stats">
                    <div className="section-content">
                        <div className="section-header">
                            <h2>Since 2009</h2>
                        </div>
                        
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-value">15+</div>
                                <div className="stat-label">YEARS</div>
                                <div className="stat-desc">전문 경력</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">500+</div>
                                <div className="stat-label">CLIENTS</div>
                                <div className="stat-desc">고객사</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">50+</div>
                                <div className="stat-label">TEAM</div>
                                <div className="stat-desc">전문 인력</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Contact */}
                <section className="section section-contact">
                    <div className="section-content">
                        <h2>Contact Us</h2>
                        <p className="contact-text">
                            전문 경호 서비스 상담이 필요하신가요?<br/>
                            언제든 문의해 주세요.
                        </p>
                        <button
                            className="contact-button"
                            onClick={() => setShowContact(true)}
                        >
                            문의하기
                        </button>
                        <p className="contact-footer">
                            Professional Security & Protection Since 2009
                        </p>
                    </div>
                </section>
            </div>

            {/* Section Indicators */}
            <div className={`section-indicators ${currentSection === 1 ? 'dark' : ''}`}>
                {Array.from({ length: SECTION_COUNT }).map((_, i) => (
                    <button
                        key={i}
                        className={`indicator ${i === currentSection ? 'active' : ''}`}
                        onClick={() => setCurrentSection(i)}
                        aria-label={`Go to section ${i + 1}`}
                    />
                ))}
            </div>

            {/* Contact Modal */}
            {showContact && (
                <div className="modal-backdrop" onClick={() => setShowContact(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Contact A.O.G</h2>
                            <button
                                className="modal-close"
                                onClick={() => setShowContact(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>여기에 카카오톡 오픈채팅 QR, 연락처, 주소 등을 배치합니다.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
