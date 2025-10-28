import { NavLink, BusinessArea, Product, Solution } from './types';

export const NAV_LINKS: NavLink[] = [
  {
    name: '제품소개',
    href: '#products',
    pageId: 'products',
    children: [
      { name: '청소로봇', href: '#cleaning-robots' },
      { name: '물류로봇', href: 'logistics-robots' },
      { name: '서빙로봇', href: '#serving-robots' },
      { name: '특수목적로봇', href: '#special-robots' },
    ],
  },
  {
    name: '솔루션',
    href: '#solutions',
    pageId: 'solutions',
    children: [
      { name: '솔루션', href: '#solution-main' },
      { name: '서비스 시스템', href: '#service-system' },
    ],
  },
  {
    name: '체험신청',
    href: '#demo',
    pageId: 'demo',
  },
  {
    name: '제품문의',
    href: '#inquiry',
    pageId: 'inquiry',
    children: [
      { name: '빠른 상담', href: '#quick-consult' },
      { name: '제품문의', href: '#product-inquiry' },
    ],
  },
  {
    name: '고객지원',
    href: '#support',
    pageId: 'support',
    children: [
      { name: 'A/S 신청', href: '#as-request' },
      { name: '파트너쉽', href: '#partnership' },
      { name: '자료실', href: '#resources' },
      { name: '자주 묻는 질문', href: '#faq' },
    ],
  },
];

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: 1,
    title: '로봇 자동화',
    description: '산업용 로봇을 활용하여 생산 공정을 자동화하고 효율성을 극대화합니다.',
    imageUrl: 'https://picsum.photos/seed/robotics/600/400',
  },
  {
    id: 2,
    title: '2차전지',
    description: '2차전지 제조 공정을 위한 정밀하고 안정적인 자동화 솔루션을 제공합니다.',
    imageUrl: 'https://picsum.photos/seed/battery/600/400',
  },
  {
    id: 3,
    title: '스마트 물류',
    description: '최첨단 기술을 접목한 스마트 물류 시스템으로 물류 혁신을 선도합니다.',
    imageUrl: 'https://picsum.photos/seed/logistics/600/400',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: '',
    category: '청소로봇',
    title: 'LIBERTY CC1',
    descriptionPoints: ['쓸기, 닦기, 건조 동시 수행', '좁은 공간에 최적화된 디자인', '자동 스테이션으로 유지보수 최소화'],
    imageUrl: 'https://i.postimg.cc/rsK7Y2jz/LIBERTY-CC1.png',
    longDescription: 'LIBERTY CC1은 상업 공간 및 사무실의 좁은 통로와 복잡한 환경에 최적화된 컴팩트 바닥 청소 로봇입니다. 쓸기, 닦기, 건조 기능을 동시에 수행하여 항상 쾌적한 바닥 상태를 유지하며, 자동 스테이션을 통해 급수, 오수 배출, 충전까지 자동으로 처리하여 관리의 편의성을 극대화했습니다.',
    specs: { '기능': '진공, 물걸레, 건조', '청소 효율': '최대 700㎡/h', '운행 시간': '최대 4시간', '스테이션': '자동 급/배수, 충전' },
  },
  {
    id: 2,
    name: '',
    category: '청소로봇',
    title: 'LIBERTY MT1',
    descriptionPoints: ['강력한 세척 및 흡입 성능', '대용량 물탱크 장착', '다양한 브러시 옵션 제공'],
    imageUrl: 'https://i.postimg.cc/Kv9D8gmp/LIBERTY-MT1.png',
    longDescription: 'LIBERTY MT1은 공장, 물류창고, 쇼핑몰 등 넓은 공간을 위한 산업용 대면적 클리닝 로봇입니다. 강력한 브러시 압력과 흡입력으로 어떤 오염도 효과적으로 제거하며, 대용량 물탱크를 장착하여 넓은 면적을 중단 없이 청소할 수 있습니다.',
    specs: { '청소 폭': '800mm', '물탱크 용량': '정수 70L, 오수 75L', '적용 분야': '공장, 창고, 대형마트', '주요 기능': '강력 세척, 자율주행' },
  },
  {
    id: 9, 
    name: '',
    category: '청소로봇',
    title: 'LIBERTY SH1',
    descriptionPoints: ['직립형 스마트 바닥 세척기', '찌든 때 청소 전문가'],
    imageUrl: 'https://i.ibb.co/Lhb85L7/LIBERTY-SH1.png',
    longDescription: 'LIBERTY SH1은 직립형 디자인으로 좁은 공간에서도 뛰어난 기동성을 자랑하는 스마트 바닥 세척 로봇입니다. 강력한 브러시와 흡입력으로 찌든 때를 효과적으로 제거하며, 편리한 조작으로 누구나 쉽게 사용할 수 있습니다.',
    specs: { '기능': '세척, 흡입', '청소 효율': '최대 300㎡/h', '배터리': '교체형 리튬 이온', '특징': '직립형 디자인' },
  },
  {
    id: 3, 
    name: '',
    category: '물류로봇',
    title: 'LIBERTY T300',
    descriptionPoints: ['산업용 배송 로봇'],
    imageUrl: 'https://i.ibb.co/30Lh5jY/LIBERTY-T300-WHITE.jpg',
    longDescription: 'LIBERTY T300은 산업 현장 및 물류 환경에서 대용량의 물품을 효율적으로 배송하는 데 특화된 자율 이동 로봇(AMR)입니다. 강력한 내구성과 고정밀 내비게이션으로 안전하고 정확한 배송을 보장합니다.',
    specs: { '페이로드': '300kg', '주행 속도': '최대 2.0m/s', '위치정밀도': '±10mm' },
  },
  {
    id: 5,
    name: '준비중입니다!',
    category: '서빙로봇',
    title: '준비중입니다!',
    descriptionPoints: ['준비중입니다.'],
    imageUrl: null,
    longDescription: '준비중입니다.',
    specs: {},
  },
  {
    id: 6,
    name: '준비중입니다!',
    category: '서빙로봇',
    title: '준비중입니다!',
    descriptionPoints: ['준비중입니다.'],
    imageUrl: null,
    longDescription: '준비중입니다.',
    specs: {},
  },
  {
    id: 7,
    name: '준비중입니다!',
    category: '서빙로봇',
    title: '준비중입니다!',
    descriptionPoints: ['준비중입니다.'],
    imageUrl: null,
    longDescription: '준비중입니다.',
    specs: {},
  },
  {
    id: 8,
    name: '준비중입니다!',
    category: '특수목적로봇',
    title: '준비중입니다!',
    descriptionPoints: ['준비중입니다.'],
    imageUrl: null,
    longDescription: '준비중입니다.',
    specs: {},
  },
];


export const SOLUTIONS: Solution[] = [
  {
    name: '호텔',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    description: [
      '업무 강도 감소: 직원의 피로도 감소, 이직률 감소, 서비스 품질 향상',
      '운영 효율성 향상: 24시간 청소·소독 자동화, 고객 응대 최적화',
      '비용 절감: 인력 수요 감소, 운영비 절감, 에너지 효율 최적화',
    ],
  },
  {
    name: '음식업',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    description: [
      '서빙 자동화: 홀 인력 효율성 증대 및 고객 대기 시간 단축',
      '주방 협업: 조리 동선 최적화 및 주방 내 업무 부담 경감',
      '매장 관리: 피크 타임에도 안정적인 서비스 품질 유지',
    ],
  },
  {
    name: '마트',
    imageUrl: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2148&auto=format&fit=crop',
    description: [
      '재고 관리 자동화: 실시간 재고 파악 및 자동 발주로 결품 방지',
      '고객 안내: 상품 위치 안내 및 프로모션 정보 제공',
      '매장 청결 유지: 넓은 매장 바닥을 24시간 자율 청소',
    ],
  },
  {
    name: '제조물류',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb120d5ae?q=80&w=2070&auto=format&fit=crop',
    description: [
      '생산성 향상: 반복적인 부품 이송 및 조립 공정 자동화',
      '안전성 확보: 위험하고 무거운 자재 운반으로 산업 재해 예방',
      '물류 효율화: AGV/AMR을 통한 창고 내 자재 이동 최적화',
    ],
  },
  {
    name: '건강의료',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1974&auto=format&fit=crop',
    description: [
      '의료진 업무 경감: 검체, 약품, 의료 비품 등 병원 내 물품 이송',
      '감염 관리: 비대면 방역 로봇으로 24시간 감염원 제거',
      '환자 편의 증진: 식사 배달, 환자 안내 등 대면 서비스 최소화',
    ],
  },
  {
    name: '주택빌딩',
    imageUrl: 'https://images.unsplash.com/photo-1584738766473-61c08373da33?q=80&w=2070&auto=format&fit=crop',
    description: [
      '보안 강화: 자율 순찰 로봇을 통한 24시간 빌딩 보안 모니터링',
      '청결 관리: 로비, 복도 등 공용 공간의 상시 청결 유지',
      '입주민 편의: 택배 및 음식 배달, 시설 안내 서비스 제공',
    ],
  },
  {
    name: '교육',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
    description: [
      '교육 환경 개선: 도서관 도서 운반 및 정리, 기자재 이동',
      '코딩 교육: 학생들을 위한 실습용 로봇 플랫폼 제공',
      '안전한 캠퍼스: 방역 로봇을 통한 교내 감염병 예방',
    ],
  },
  {
    name: '엔터테인먼트',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop',
    description: [
      '고객 경험 향상: 이벤트 안내, 음료 서빙 등 차별화된 서비스',
      '시설 관리: 공연장, 경기장 등 대규모 시설의 효율적인 청소',
      '이벤트 활용: 방문객을 맞이하고 안내하는 로봇으로 이목 집중',
    ],
  },
  {
    name: '교통서비스',
    imageUrl: 'https://images.unsplash.com/photo-1570125904222-c241a83455e8?q=80&w=2070&auto=format&fit=crop',
    description: [
      '공항/역사 편의: 수하물 운반, 탑승 안내, 정보 제공 서비스',
      '시설 청결: 넓고 유동인구가 많은 대합실 및 터미널 청소',
      '교통 약자 지원: 이동 보조 및 안내를 통한 편의성 증대',
    ],
  },
  {
    name: '공공서비스',
    imageUrl: 'https://images.unsplash.com/photo-1590650435994-325b3a316b08?q=80&w=2070&auto=format&fit=crop',
    description: [
      '민원 안내 자동화: 방문객 안내 및 서류 발급 보조',
      '스마트 도서관: 도서 대출/반납 자동화 및 서가 정리',
      '청사 관리: 방역 및 청소 로봇을 통한 쾌적한 환경 조성',
    ],
  },
];