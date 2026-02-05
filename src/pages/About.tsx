import { useMemo, useState } from 'react'
import '../styles/about.css'

interface AboutItem {
    key: string
    title: string
    desc: string
    bg: string
}

export default function About() {
    const items = useMemo<AboutItem[]>(
        () => [
            {
                key: 'personal',
                title: '신변 경호',
                desc: 'VIP/개인 맞춤 동선·위험요소 사전 점검 및 현장 대응 중심',
                bg: '/securities/left1.png',
            },
            {
                key: 'event',
                title: '행사 경호',
                desc: '출입 통제, 관중/동선 관리, 돌발 상황 대응 및 안전 운영',
                bg: '/securities/left2.png',
            },
            {
                key: 'protocol',
                title: '의전 경호',
                desc: '공식 일정 수행 지원, 이동/대기/접견 동선 통합 관리',
                bg: '/securities/right1.png',
            },
            {
                key: 'facility',
                title: '시설 보안경비',
                desc: '출입관리, 순찰, 모니터링 기반 사고 예방 및 보안 유지',
                bg: '/securities/right2.png',
            },
            {
                key: 'driver',
                title: '의전 드라이버',
                desc: '안전 운행·경로/시간 관리·상황 대응 기반 이동 지원',
                bg: '/securities/left1.png',
            },
            {
                key: 'valet',
                title: '발렛 서비스',
                desc: '행사/시설 운영 품격 강화, 동선 중심 차량 관리 지원',
                bg: '/securities/right2.png',
            },
        ],
        []
    )

    const [active, setActive] = useState<AboutItem>(items[0])

    return (
        <div className="aboutV2" style={{ '--aboutBg': `url(${active.bg})` } as React.CSSProperties}>
            <div className="aboutV2Bg" />

            <section className="aboutV2Top">
                <div className="aboutV2Title">
                    <h1>About A.O.G</h1>
                    <p>
                        AOG(Armor of God) Company는 고객의 안전과 신뢰를 최우선으로 하는 전문 경호회사입니다.
                        숙련된 인력과 체계적인 시스템을 바탕으로 신변, 행사, 의전 경호, 시설 보안경비,
                        의전드라이버, 발렛서비스등 다양한 분야에서 전문적이고 믿음직한 서비스를 제공하며
                        고객의 안전을 철저하게 보호합니다.
                    </p>
                </div>

                <div className="aboutV2Grid">
                    {items.map((it) => (
                        <button
                            key={it.key}
                            type="button"
                            className={`aboutV2Card ${active.key === it.key ? 'active' : ''}`}
                            onClick={() => setActive(it)}
                        >
                            <div className="aboutV2CardTitle">{it.title}</div>
                            <div className="aboutV2CardHint">선택</div>
                        </button>
                    ))}
                </div>
            </section>

            <section className="aboutV2Mid">
                <div className="aboutV2Panel">
                    <div className="aboutV2PanelHead">
                        <div className="aboutV2PanelTitle">{active.title}</div>
                        <div className="aboutV2Badge">AOG SERVICE</div>
                    </div>

                    <p className="aboutV2PanelDesc">{active.desc}</p>

                    <div className="aboutV2SmallNote">
                        ※ 상세 내용/사례/사진은 추후 확장
                    </div>
                </div>
            </section>

            <div className="aboutV2BottomSpace" />
        </div>
    )
}
