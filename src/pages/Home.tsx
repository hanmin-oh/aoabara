import { useEffect, useState } from 'react'
import '../styles/home.css'

const INTRO_TOP_LEFT = ['/securities/left1.png', '/securities/left2.png']
const INTRO_TOP_RIGHT = ['/securities/right1.png', '/securities/right2.png']

interface CrossFadeProps {
    images: string[]
    interval?: number
}

function CrossFade({ images, interval = 3500 }: CrossFadeProps) {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setIdx(v => (v + 1) % images.length), interval)
        return () => clearInterval(t)
    }, [images.length, interval])

    return (
        <div className="xfade">
            {images.map((src, i) => (
                <img key={src} src={src} alt="" className={`xfadeImg ${i === idx ? 'on' : ''}`} />
            ))}
            <div className="xfadeShade" />
        </div>
    )
}

interface HomeProps {
    onEnterTeamAog: () => void
}

export default function Home({ onEnterTeamAog }: HomeProps) {
    const goTeamBara = () =>
        window.open('https://teambara.com', '_blank', 'noopener,noreferrer')

    return (
        <div className="introLayout">
            <section className="introTop introHero2 introTopWithCard">
                <div className="introHeroHalf">
                    <CrossFade images={INTRO_TOP_LEFT} interval={3600} />
                </div>
                <div className="introHeroHalf">
                    <CrossFade images={INTRO_TOP_RIGHT} interval={4200} />
                </div>

                <div className="introHeroOverlay">
                    <div className="heroTitle">A.O.G &amp; BARA COMPANY</div>
                    <div className="heroSub">고객을 먼저 이해하겠습니다.</div>
                    <div className="heroBadge">*서울지방경찰청 허가 제 4915호*</div>
                </div>

                <div className="introInfoCard aogCard">
                    <h2>A.O.G Company</h2>
                    <p>
                        AOG(Armor of God) Company는 고객의 안전과 신뢰를 최우선으로 하는 전문 경호회사입니다.
                        숙련된 인력과 체계적인 시스템을 바탕으로 신변, 행사, 의전 경호, 시설 보안경비,
                        의전드라이버, 발렛서비스 등 다양한 분야에서 믿음직한 서비스를 제공합니다.
                    </p>
                </div>
            </section>

            <div className="introMiddle">
                <button className="introLeft" type="button" onClick={onEnterTeamAog}>
                    TEAM AOG
                </button>

                <div className="introRight">
                    <div className="introRightInner">
                        <div className="introRightTitle">TEAM BARA</div>
                        <button className="cta" type="button" onClick={goTeamBara}>
                            Go to TeamBARA →
                        </button>
                    </div>
                </div>
            </div>

            <footer className="introFooter">© {new Date().getFullYear()} AOG COMPANY</footer>
        </div>
    )
}
