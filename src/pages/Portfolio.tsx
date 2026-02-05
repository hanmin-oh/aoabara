import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../styles/portfolio.css'

type Category = 'all' | 'personal' | 'event' | 'protocol' | 'facility' | 'driver' | 'valet'

interface PortfolioItem {
    id: number
    category: Category
    title: string
    image: string
}

// 포트폴리오 데이터 (실제 이미지와 제목으로 나중에 대체)
const portfolioData: PortfolioItem[] = [
    // 신변경호
    { id: 1, category: 'personal', title: 'VIP 인사 경호 서비스', image: '/securities/left1.png' },
    { id: 2, category: 'personal', title: '기업 임원 신변 보호', image: '/securities/left2.png' },
    { id: 3, category: 'personal', title: '해외 인사 방한 경호', image: '/securities/right1.png' },
    
    // 행사경호
    { id: 4, category: 'event', title: '대규모 컨퍼런스 보안', image: '/securities/right2.png' },
    { id: 5, category: 'event', title: '기업 행사 경호 서비스', image: '/securities/left1.png' },
    { id: 6, category: 'event', title: '공연장 보안 관리', image: '/securities/left2.png' },
    
    // 의전경호
    { id: 7, category: 'protocol', title: '정부 인사 의전 경호', image: '/securities/right1.png' },
    { id: 8, category: 'protocol', title: '외교 행사 의전 서비스', image: '/securities/right2.png' },
    
    // 시설 보안경비
    { id: 9, category: 'facility', title: '기업 본사 보안 관리', image: '/securities/left1.png' },
    { id: 10, category: 'facility', title: '빌딩 통합 보안 시스템', image: '/securities/left2.png' },
    
    // 의전 드라이버
    { id: 11, category: 'driver', title: 'VIP 의전 운행 서비스', image: '/securities/right1.png' },
    { id: 12, category: 'driver', title: '공항 픽업/드롭 서비스', image: '/securities/right2.png' },
    
    // 발렛서비스
    { id: 13, category: 'valet', title: '프리미엄 발렛 서비스', image: '/securities/left1.png' },
    { id: 14, category: 'valet', title: '행사장 발렛 운영', image: '/securities/left2.png' },
]

const categories = [
    { id: 'all', name: '전체' },
    { id: 'personal', name: '신변경호' },
    { id: 'event', name: '행사경호' },
    { id: 'protocol', name: '의전경호' },
    { id: 'facility', name: '시설 보안경비' },
    { id: 'driver', name: '의전 드라이버' },
    { id: 'valet', name: '발렛서비스' },
] as const

export default function Portfolio() {
    const [searchParams] = useSearchParams()
    const [selectedCategory, setSelectedCategory] = useState<Category>('all')

    useEffect(() => {
        const category = searchParams.get('category') as Category
        if (category && categories.find(cat => cat.id === category)) {
            setSelectedCategory(category)
        }
    }, [searchParams])

    const filteredItems = selectedCategory === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === selectedCategory)

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="portfolio-hero-content">
                    <p className="portfolio-hero-label">Our Work</p>
                    <h1 className="portfolio-hero-title">PORTFOLIO</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="portfolio-main">
                <div className="portfolio-container">
                    {/* Category Filter */}
                    <div className="portfolio-categories">
                        <h2 className="portfolio-section-title">포트폴리오 카테고리</h2>
                        <div className="category-buttons">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat.id as Category)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="portfolio-grid">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src={item.image} alt={item.title} />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-number">{item.id}</div>
                                    </div>
                                </div>
                                <div className="portfolio-info">
                                    <h3 className="portfolio-title">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="portfolio-empty">
                            <p>해당 카테고리의 포트폴리오가 준비 중입니다.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
