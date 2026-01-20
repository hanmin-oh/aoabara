import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const IMAGES = [
    '/securities/left1.png',
    '/securities/left2.png',
    '/securities/right1.png',
    '/securities/right2.png',
]

function CrossFade({ images, interval = 3800 }) {
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

export default function AogMain() {
    return (
        <div className="aogMain">
            {/* 배경: 전환되는 사진이 화면 꽉 채움 */}
            <CrossFade images={IMAGES} interval={3800} />

            {/* 오버레이 콘텐츠 */}
            <div className="aogOverlay">
                <div className="aogBrandRow">
                    <img className="aogLogo" src="/logo/aog.png" alt="AOG Company" />
                    <div className="aogBrandText">
                        <div className="aogBrandTitle">A.O.G COMPANY</div>
                        <div className="aogBrandSub">Professional Security &amp; Protection</div>
                        <div className="aogPermit">*서울지방경찰청 허가 제 4915호*</div>
                    </div>
                </div>

                <div className="aogCard">
                    <h2>A.O.G Company</h2>
                    <p>
                        AOG(Armor of God) Company는 고객의 안전과 신뢰를 최우선으로 하는 전문 경호회사입니다.
                        숙련된 인력과 체계적인 시스템을 바탕으로 신변, 행사, 의전 경호, 시설 보안경비,
                        의전드라이버, 발렛서비스등 다양한 분야에서 전문적이고 믿음직한 서비스를 제공하며
                        고객의 안전을 철저하게 보호합니다.
                    </p>

                    <div className="aogDivider" />

                    <h2>A.O.G (Armor of God) Company</h2>
                    <p>
                        AOG (Armor of God) Company is a professional security company prioritizing customer safety and trust.
                        With experienced personnel and a systematic approach, we provide reliable and specialized services
                        across various areas, including personal and event security, facility protection, protocol drivers,
                        and valet services, ensuring thorough protection of our clients’ safety.
                    </p>

                    <div className="aogActions">
                        <Link className="aogBtn" to="/contact">Contact</Link>
                        <Link className="aogBtn ghost" to="/services">Services</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
