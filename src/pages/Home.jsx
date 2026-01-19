import { useEffect, useState } from 'react'
import '../styles/home.css'

const LEFT = ['/securities/left1.png', '/securities/left2.png']
const RIGHT = ['/securities/right1.png', '/securities/right2.png']

function CrossFade({ images, interval = 3500 }) {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const t = setInterval(() => {
            setIdx((v) => (v + 1) % images.length)
        }, interval)
        return () => clearInterval(t)
    }, [images.length, interval])

    return (
        <div className="xfade">
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    className={`xfadeImg ${i === idx ? 'on' : ''}`}
                />
            ))}
            <div className="xfadeShade" />
        </div>
    )
}

export default function Home() {
    const goTeam = () => window.open('https://teambara.com', '_blank', 'noopener,noreferrer')

    return (
        <div className="content home">
            <section className="top homeHero2">
                <div className="heroHalf">
                    <CrossFade images={LEFT} interval={3500} />
                </div>

                <div className="heroHalf">
                    <CrossFade images={RIGHT} interval={4200} />
                </div>

                {/* 오버레이 텍스트 */}
                <div className="heroOverlay">


                </div>
            </section>

            <div className="middle homeBottom">
                <aside className="left homeLeft">
                    <h2>A.O.G Company</h2>
                    <p>
                        AOG(Ammor of God) Company는 고객의 안전과 신뢰를 최우선으로 하는 전문 경호회사입니다.
                        숙련된 인력과 체계적인 시스템을 바탕으로 신변, 행사, 의전 경호, 시설 보안경비,
                        의전드라이버, 발렛서비스등 다양한 분야에서 전문적이고 믿음직한 서비스를 제공하며
                        고객의 안전을 철저하게 보호합니다.

                    </p>
                    {/*<div className="heroTitle">A.O.G &amp; BARA COMPANY</div>*/}
                    {/*<div className="heroSub">고객을 먼저 이해하겠습니다.</div>*/}
                    {/*<div className="heroSub">클라이언트에게 귀 기울이고 이해하겠습니다.</div>*/}
                    <div className="heroBadge">*서울지방경찰청 허가 제 4915호*</div>
                </aside>

                <main className="right homeRight">
                    <h2>TeamBARA</h2>
                    <p>별도 도메인으로 이동합니다.</p>
                    <button type="button" className="cta" onClick={goTeam}>
                        Go to TeamBARA →
                    </button>
                </main>
            </div>
        </div>
    )
}
