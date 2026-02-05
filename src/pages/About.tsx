import '../styles/about.css'

export default function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <p className="about-hero-label">Who We Are?</p>
                    <h1 className="about-hero-title">ABOUT A.O.G</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="about-main">
                <div className="about-container">
                    {/* Philosophy Section 1 */}
                    <div className="about-section">
                        <div className="about-number">No.1</div>
                        <h2 className="about-section-title">
                            "Professional Security, Trusted Protection"
                        </h2>
                        <div className="about-content">
                            <p className="about-text-ko">
                                고객의 안전과 신뢰를 최우선으로 생각합니다.<br/>
                                전문적인 경호 서비스로 고객의 소중한 순간을 안전하게 지킵니다.
                            </p>
                            <p className="about-text-en">
                                We prioritize the safety and trust of our clients above all else.<br/>
                                Professional security services protect every precious moment.
                            </p>
                        </div>
                    </div>

                    {/* Philosophy Section 2 */}
                    <div className="about-section">
                        <div className="about-number">No.2</div>
                        <h2 className="about-section-title">
                            "Experience Meets Excellence"
                        </h2>
                        <div className="about-content">
                            <p className="about-text-ko">
                                15년 이상의 경험과 전문성<br/>
                                숙련된 인력과 체계적인 시스템을 바탕으로 
                                신변, 행사, 의전 경호, 시설 보안경비, 의전 드라이버, 발렛 서비스 등 
                                다양한 분야에서 최상의 서비스를 제공합니다.
                            </p>
                            <p className="about-text-en">
                                Over 15 years of experience and expertise.<br/>
                                We provide the best services in various fields including personal security, 
                                event security, protocol security, facility management, chauffeur services, 
                                and valet parking with skilled personnel and systematic operations.
                            </p>
                        </div>
                    </div>

                    {/* Philosophy Section 3 */}
                    <div className="about-section">
                        <div className="about-number">No.3</div>
                        <h2 className="about-section-title">
                            "Systematic & Reliable Service"
                        </h2>
                        <div className="about-content">
                            <p className="about-text-ko">
                                체계적인 시스템과 신뢰할 수 있는 서비스<br/>
                                사전 위험 분석부터 현장 대응까지, 철저한 준비와 체계적인 운영으로
                                예상치 못한 상황에도 즉각적으로 대응합니다.
                                고객의 안전을 위한 완벽한 솔루션을 제공합니다.
                            </p>
                            <p className="about-text-en">
                                Systematic operations and reliable service.<br/>
                                From pre-risk analysis to on-site response, we respond immediately to 
                                unexpected situations with thorough preparation and systematic operations.
                                We provide the perfect solution for your safety.
                            </p>
                        </div>
                    </div>

                    {/* Philosophy Section 4 */}
                    <div className="about-section">
                        <div className="about-number">No.4</div>
                        <h2 className="about-section-title">
                            "Building Long-term Trust"
                        </h2>
                        <div className="about-content">
                            <p className="about-text-ko">
                                신뢰 기반의 장기적 관계 구축<br/>
                                한 번의 서비스로 끝나지 않습니다.
                                500개 이상의 고객사와 함께하며 쌓아온 신뢰와 경험을 바탕으로
                                고객과 함께 성장하는 파트너가 되겠습니다.
                            </p>
                            <p className="about-text-en">
                                Building trust-based long-term relationships.<br/>
                                It doesn't end with one service.
                                Based on the trust and experience built with over 500 clients,
                                we will become a partner that grows together with our customers.
                            </p>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="about-services">
                        <h3 className="about-services-title">Our Services</h3>
                        <div className="about-services-grid">
                            <div className="about-service-item">
                                <div className="service-icon">01</div>
                                <h4>신변 경호</h4>
                                <p>VIP 및 주요 인사 신변 보호</p>
                            </div>
                            <div className="about-service-item">
                                <div className="service-icon">02</div>
                                <h4>행사 경호</h4>
                                <p>각종 행사 및 이벤트 보안</p>
                            </div>
                            <div className="about-service-item">
                                <div className="service-icon">03</div>
                                <h4>의전 경호</h4>
                                <p>공식 일정 수행 및 동선 관리</p>
                            </div>
                            <div className="about-service-item">
                                <div className="service-icon">04</div>
                                <h4>시설 보안경비</h4>
                                <p>건물 및 시설 보안 관리</p>
                            </div>
                            <div className="about-service-item">
                                <div className="service-icon">05</div>
                                <h4>의전 드라이버</h4>
                                <p>안전 운행 및 이동 지원</p>
                            </div>
                            <div className="about-service-item">
                                <div className="service-icon">06</div>
                                <h4>발렛 서비스</h4>
                                <p>행사 및 시설 차량 관리</p>
                            </div>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="about-info">
                        <div className="about-info-item">
                            <div className="info-label">업력</div>
                            <div className="info-value">2009년 설립</div>
                        </div>
                        <div className="about-info-item">
                            <div className="info-label">경력</div>
                            <div className="info-value">15년+ 전문 경력</div>
                        </div>
                        <div className="about-info-item">
                            <div className="info-label">인력</div>
                            <div className="info-value">50+ 전문 인력</div>
                        </div>
                    </div>

                    {/* Bottom Message */}
                    <div className="about-bottom">
                        <p>
                            A.O.G(Armor of God) Company는<br/>
                            고객의 안전과 신뢰를 최우선으로 하는 전문 경호회사입니다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
