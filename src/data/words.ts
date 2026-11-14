import { WordItem } from '../types/game';

/**
 * 초등학교 1학년 낱말 데이터 사전
 * 새로운 낱말을 추가할 때는 이 배열에 객체를 추가하고 WordIllustration에 그림을 연결하면 됩니다.
 */
export const WORDS_DICTIONARY: WordItem[] = [
  // Stage 1: 과일 (3쌍)
  { id: 'apple', word: '사과', theme: '과일', hint: '빨갛고 아삭한 과일', accentColor: '#EF4444' },
  { id: 'banana', word: '바나나', theme: '과일', hint: '노랗고 길쭉한 과일', accentColor: '#EAB308' },
  { id: 'grape', word: '포도', theme: '과일', hint: '보라색 알갱이가 주렁주렁', accentColor: '#8B5CF6' },

  // Stage 2: 반려동물 (3쌍)
  { id: 'puppy', word: '강아지', theme: '반려동물', hint: '멍멍 짖는 귀여운 친구', accentColor: '#D97706' },
  { id: 'cat', word: '고양이', theme: '반려동물', hint: '야옹 우는 부드러운 친구', accentColor: '#F97316' },
  { id: 'rabbit', word: '토끼', theme: '반려동물', hint: '귀가 길고 깡충깡충', accentColor: '#EC4899' },

  // Stage 3: 학교 (3쌍)
  { id: 'school', word: '학교', theme: '학교', hint: '친구들과 공부하는 곳', accentColor: '#0284C7' },
  { id: 'pencil', word: '연필', theme: '학교', hint: '글씨를 쓱쓱 쓰는 도구', accentColor: '#F59E0B' },
  { id: 'book', word: '책', theme: '학교', hint: '재미있는 이야기가 담긴 것', accentColor: '#10B981' },

  // Stage 4: 탈것 (4쌍)
  { id: 'car', word: '자동차', theme: '탈것', hint: '네 바퀴로 부릉부릉', accentColor: '#EF4444' },
  { id: 'bus', word: '버스', theme: '탈것', hint: '많은 사람이 함께 타는 차', accentColor: '#3B82F6' },
  { id: 'train', word: '기차', theme: '탈것', hint: '칙칙폭폭 철길을 달려요', accentColor: '#10B981' },
  { id: 'airplane', word: '비행기', theme: '탈것', hint: '구름 위 하늘을 날아요', accentColor: '#0EA5E9' },

  // Stage 5: 동물원 (4쌍)
  { id: 'lion', word: '사자', theme: '동물원', hint: '멋진 갈기를 가진 동물의 왕', accentColor: '#D97706' },
  { id: 'elephant', word: '코끼리', theme: '동물원', hint: '코가 아주 긴 큰 동물', accentColor: '#64748B' },
  { id: 'giraffe', word: '기린', theme: '동물원', hint: '목이 아주 긴 점박이 동물', accentColor: '#F59E0B' },
  { id: 'monkey', word: '원숭이', theme: '동물원', hint: '나무를 잘 타는 장난꾸러기', accentColor: '#B45309' },

  // Stage 6: 간식 (4쌍)
  { id: 'milk', word: '우유', theme: '간식', hint: '하얗고 고소한 건강 음료', accentColor: '#38BDF8' },
  { id: 'bread', word: '빵', theme: '간식', hint: '폭신폭신 고소한 맛', accentColor: '#D97706' },
  { id: 'strawberry', word: '딸기', theme: '간식', hint: '새콤달콤 빨간 열매', accentColor: '#F43F5E' },
  { id: 'watermelon', word: '수박', theme: '간식', hint: '겉은 초록 속은 빨간 여름 과일', accentColor: '#16A34A' },

  // Stage 7: 자연 (6쌍)
  { id: 'sun', word: '해', theme: '자연', hint: '낮에 하늘을 밝게 비춰요', accentColor: '#F59E0B' },
  { id: 'moon', word: '달', theme: '자연', hint: '밤하늘에 환하게 떠요', accentColor: '#EAB308' },
  { id: 'star', word: '별', theme: '자연', hint: '밤하늘에서 반짝반짝', accentColor: '#FBBF24' },
  { id: 'cloud', word: '구름', theme: '자연', hint: '하늘에 둥실둥실 떠다녀요', accentColor: '#0EA5E9' },
  { id: 'tree', word: '나무', theme: '자연', hint: '초록 잎이 무성하게 자라요', accentColor: '#16A34A' },
  { id: 'flower', word: '꽃', theme: '자연', hint: '예쁘게 피어나 향기가 나요', accentColor: '#EC4899' },

  // Stage 8: 동네 (6쌍)
  { id: 'house', word: '집', theme: '동네', hint: '우리 가족이 함께 쉬는 곳', accentColor: '#F97316' },
  { id: 'park', word: '공원', theme: '동네', hint: '놀이터와 나무가 있는 곳', accentColor: '#22C55E' },
  { id: 'hospital', word: '병원', theme: '동네', hint: '아플 때 의사 선생님을 만나요', accentColor: '#EF4444' },
  { id: 'police', word: '경찰서', theme: '동네', hint: '우리 동네를 안전하게 지켜요', accentColor: '#2563EB' },
  { id: 'library', word: '도서관', theme: '동네', hint: '조용히 책을 읽고 빌리는 곳', accentColor: '#8B5CF6' },
  { id: 'market', word: '시장', theme: '동네', hint: '신선한 채소와 물건을 사요', accentColor: '#EA580C' },

  // Stage 9: 옷과 물건 (6쌍)
  { id: 'hat', word: '모자', theme: '옷과물건', hint: '햇빛을 가리려 머리에 써요', accentColor: '#F59E0B' },
  { id: 'shoes', word: '신발', theme: '옷과물건', hint: '밖에 나갈 때 발에 신어요', accentColor: '#3B82F6' },
  { id: 'bag', word: '가방', theme: '옷과물건', hint: '책과 필통을 넣어 메고 가요', accentColor: '#EC4899' },
  { id: 'glasses', word: '안경', theme: '옷과물건', hint: '더 잘 보이게 눈에 써요', accentColor: '#475569' },
  { id: 'socks', word: '양말', theme: '옷과물건', hint: '발을 따뜻하게 감싸줘요', accentColor: '#10B981' },
  { id: 'umbrella', word: '우산', theme: '옷과물건', hint: '비 오는 날 머리 위로 펼쳐요', accentColor: '#6366F1' },

  // Stage 10: 바다 (8쌍)
  { id: 'whale', word: '고래', theme: '바다', hint: '바다에서 가장 큰 포유류', accentColor: '#0284C7' },
  { id: 'octopus', word: '문어', theme: '바다', hint: '다리가 여덟 개인 친구', accentColor: '#F43F5E' },
  { id: 'turtle', word: '거북이', theme: '바다', hint: '단단한 등딱지를 지고 헤엄쳐요', accentColor: '#16A34A' },
  { id: 'crab', word: '게', theme: '바다', hint: '집게발로 옆으로 걸어요', accentColor: '#EF4444' },
  { id: 'fish', word: '물고기', theme: '바다', hint: '지느러미로 헤엄쳐요', accentColor: '#F59E0B' },
  { id: 'shark', word: '상어', theme: '바다', hint: '등지느러미가 뾰족해요', accentColor: '#475569' },
  { id: 'starfish', word: '불가사리', theme: '바다', hint: '별 모양의 바다 친구', accentColor: '#EC4899' },
  { id: 'shrimp', word: '새우', theme: '바다', hint: '허리가 굽고 수염이 길어요', accentColor: '#F97316' },

  // Stage 11: 몸과 마음 (8쌍)
  { id: 'eye', word: '눈', theme: '몸과마음', hint: '예쁜 세상을 바라봐요', accentColor: '#0284C7' },
  { id: 'nose', word: '코', theme: '몸과마음', hint: '향긋한 냄새를 맡아요', accentColor: '#F59E0B' },
  { id: 'mouth', word: '입', theme: '몸과마음', hint: '맛있는 음식과 고운 말을 해요', accentColor: '#F43F5E' },
  { id: 'ear', word: '귀', theme: '몸과마음', hint: '음악과 친구 목소리를 들어요', accentColor: '#F97316' },
  { id: 'hand', word: '손', theme: '몸과마음', hint: '반갑게 흔들고 그림을 그려요', accentColor: '#EAB308' },
  { id: 'foot', word: '발', theme: '몸과마음', hint: '씩씩하게 걷고 달려요', accentColor: '#10B981' },
  { id: 'head', word: '머리', theme: '몸과마음', hint: '생각하고 모자를 쓰는 곳', accentColor: '#6366F1' },
  { id: 'smile', word: '웃음', theme: '몸과마음', hint: '행복할 때 하하호호 웃어요', accentColor: '#EC4899' },

  // Stage 12: 종합축제 (8쌍)
  { id: 'rainbow', word: '무지개', theme: '종합축제', hint: '비 온 뒤 하늘의 일곱 색깔', accentColor: '#EC4899' },
  { id: 'butterfly', word: '나비', theme: '종합축제', hint: '꽃밭 위를 팔랑팔랑 날아요', accentColor: '#8B5CF6' },
  { id: 'frog', word: '개구리', theme: '종합축제', hint: '개굴개굴 연못에서 폴짝', accentColor: '#16A34A' },
  { id: 'piano', word: '피아노', theme: '종합축제', hint: '건반을 누르면 도레미파솔', accentColor: '#1E293B' },
  { id: 'soccer', word: '축구공', theme: '종합축제', hint: '운동장에서 뻥 차고 놀아요', accentColor: '#0284C7' },
  { id: 'bicycle', word: '자전거', theme: '종합축제', hint: '두 바퀴로 페달을 밟아요', accentColor: '#EF4444' },
  { id: 'clock', word: '시계', theme: '종합축제', hint: '똑딱똑딱 시간을 알려줘요', accentColor: '#F59E0B' },
  { id: 'letter', word: '편지', theme: '종합축제', hint: '고마운 마음을 적어 보내요', accentColor: '#F43F5E' },
];

export const WORDS_MAP: Record<string, WordItem> = Object.fromEntries(
  WORDS_DICTIONARY.map((item) => [item.id, item])
);
