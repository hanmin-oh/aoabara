import { useEffect, useState, useRef } from 'react'
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

function CrossFade({ images, interval = 3800 }: CrossFadeProps) {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const t = setInterval(() => {
            setIdx((v) => (v + 1) % images.length)
        }, interval)
        return () => clearInterval(t)
    }, [images.length, interval])

    return (
        <div className="aogHero">
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    className={`aogHeroImg ${i === idx ? 'on' : ''}`}
                />
            ))}
            <div className="aogHeroShade" />
        </div>
    )
}

const SECTION_COUNT = 4

export default function AogMain() {
    const [showContact, setShowContact] = useState(false)
    const [currentSection, setCurrentSection] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const isScrolling = useRef(false)

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
            
            if (isScrolling.current) return
            
            const delta = e.deltaY
            // 민감도 조절: 작은 스크롤 무시
            if (Math.abs(delta) < 10) return

            if (delta > 0 && currentSection < SECTION_COUNT - 1) {
                // 스크롤 다운
                isScrolling.current = true
                setCurrentSection(prev => prev + 1)
                setTimeout(() => { isScrolling.current = false }, 800) // 애니메이션 시간만큼 딜레이
            } else if (delta < 0 && currentSection > 0) {
                // 스크롤 업
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
        <div className="aogScrollWrapper" ref={containerRef}>
            <div 
                className="aogScrollContainer"
                style={{
                    transform: `translate3d(0, -${currentSection * 100}vh, 0)`,
                    height: `${SECTION_COUNT * 100}vh`,
                }}
            >
                {/* Section 1: 메인 히어로 - 미니멀 */}
                <section className="aogFullSection aogHeroSection">
                    <CrossFade images={IMAGES} interval={3800} />
                    <div className="heroContent">
                        <div className="heroLogoBox">
                            <img src="/logo/aog.png" alt="AOG" className="heroLogoImg" />
                        </div>
                        <h1 className="heroMainTitle">
                            A.O.G<br/>COMPANY
                        </h1>
                        <p className="heroSubtitle">Professional Security & Protection</p>
                        <div className="heroPermit">서울지방경찰청 허가 제 4915호</div>
                        <div className="scrollHint">SCROLL DOWN</div>
                    </div>
                </section>

                {/* Section 2: 서비스 그리드 */}
                <section className="aogFullSection aogServicesGrid">
                    <div className="gridContainer">
                        <div className="gridHeader">
                            <h2 className="gridTitle">Our Services</h2>
                            <p className="gridSubtitle">전문 경호 서비스</p>
                        </div>
                        
                        <div className="servicesBoxGrid">
                            <div className="serviceBox box1">
                                <div className="serviceBoxNumber">01</div>
                                <h3 className="serviceBoxTitle">신변 경호</h3>
                                <p className="serviceBoxDesc">VIP 및 주요 인사 신변 보호</p>
                                <div className="serviceBoxLine"></div>
                            </div>
                            <div className="serviceBox box2">
                                <div className="serviceBoxNumber">02</div>
                                <h3 className="serviceBoxTitle">행사 경호</h3>
                                <p className="serviceBoxDesc">각종 행사 및 이벤트 보안</p>
                                <div className="serviceBoxLine"></div>
                            </div>
                            <div className="serviceBox box3">
                                <div className="serviceBoxNumber">03</div>
                                <h3 className="serviceBoxTitle">시설 경비</h3>
                                <p className="serviceBoxDesc">건물 및 시설 보안 관리</p>
                                <div className="serviceBoxLine"></div>
                            </div>
                            <div className="serviceBox box4">
                                <div className="serviceBoxNumber">04</div>
                                <h3 className="serviceBoxTitle">의전 서비스</h3>
                                <p className="serviceBoxDesc">의전 드라이버 및 발렛</p>
                                <div className="serviceBoxLine"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: 통계 - 기하학적 */}
                <section className="aogFullSection aogStatsSection">
                    <div className="statsContainer">
                        <div className="statsHeader">
                            <h2 className="statsTitle">Since 2009</h2>
                            <div className="statsDivider"></div>
                        </div>
                        <div className="statsBoxes">
                            <div className="statBox">
                                <div className="statBoxInner">
                                    <div className="statValue">15+</div>
                                    <div className="statName">YEARS</div>
                                    <div className="statDesc">전문 경력</div>
                                </div>
                            </div>
                            <div className="statBox">
                                <div className="statBoxInner">
                                    <div className="statValue">500+</div>
                                    <div className="statName">CLIENTS</div>
                                    <div className="statDesc">고객사</div>
                                </div>
                            </div>
                            <div className="statBox">
                                <div className="statBoxInner">
                                    <div className="statValue">50+</div>
                                    <div className="statName">TEAM</div>
                                    <div className="statDesc">전문 인력</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Contact CTA */}
                <section className="aogFullSection aogContactSection">
                    <div className="contactContainer">
                        <h2 className="contactTitle">Contact Us</h2>
                        <p className="contactSubtitle">
                            전문 경호 서비스 상담이 필요하신가요?<br/>
                            언제든 문의해 주세요.
                        </p>
                        <button
                            type="button"
                            className="contactButton"
                            onClick={() => setShowContact(true)}
                        >
                            <span>문의하기</span>
                        </button>
                        <div className="contactInfo">
                            <div className="contactLine"></div>
                            <p className="contactText">Professional Security & Protection Since 2009</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* 섹션 인디케이터 */}
            <div className="sectionIndicator">
                {Array.from({ length: SECTION_COUNT }).map((_, i) => (
                    <button
                        key={i}
                        className={`indicator ${i === currentSection ? 'active' : ''}`}
                        onClick={() => setCurrentSection(i)}
                        aria-label={`Go to section ${i + 1}`}
                    />
                ))}
            </div>

            {showContact && (
                <div className="contactModalBackdrop" role="dialog" aria-modal="true">
                    <div className="contactModal">
                        <div className="contactModalHeader">
                            <h2>Contact A.O.G</h2>
                            <button
                                type="button"
                                className="contactModalClose"
                                onClick={() => setShowContact(false)}
                                aria-label="닫기"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="contactModalText">
                            여기에는 카카오톡 오픈채팅 QR, 연락처, 주소 등을 간단하게 넣을 예정입니다.
                        </p>

                        <div className="contactModalBody">
                            {/* TODO: KakaoTalk 오픈채팅 QR 이미지 / 전화번호 / 주소 배치 */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
