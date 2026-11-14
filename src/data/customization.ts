import { AccessoryItem, CharacterOption, MissionDefinition } from '../types/game';

export const CHARACTERS: CharacterOption[] = [
  {
    id: 'tori',
    name: '다람쥐 토리',
    species: '다람쥐',
    description: '도토리를 좋아하고 호기심이 가득한 낱말 숲의 안내자예요.',
    unlockStageId: 0,
  },
  {
    id: 'bori',
    name: '아기곰 보리',
    species: '곰',
    description: '책 읽는 것을 좋아하는 포근하고 다정한 친구예요.',
    unlockStageId: 3,
  },
  {
    id: 'luna',
    name: '달토끼 루나',
    species: '토끼',
    description: '반짝이는 별빛 아래에서 낱말을 모으는 재빠른 친구예요.',
    unlockStageId: 7,
  },
];

export const ACCESSORIES: AccessoryItem[] = [
  // 모자 (Hats)
  {
    id: 'hat_cap',
    name: '빨간 야구모자',
    slot: 'hat',
    costStars: 2,
    description: '쓰기만 해도 기운이 솟는 씩씩한 빨간 모자!',
    color: '#EF4444',
  },
  {
    id: 'hat_chick',
    name: '삐약이 모자',
    slot: 'hat',
    costStars: 3,
    description: '폭신폭신 노란 병아리가 머리 위에 쏙!',
    color: '#FBBF24',
  },
  {
    id: 'hat_explorer',
    name: '숲속 탐험가 모자',
    slot: 'hat',
    costStars: 4,
    description: '새로운 낱말을 찾아 떠나는 멋진 탐험가 모자.',
    color: '#16A34A',
  },
  {
    id: 'hat_crown',
    name: '반짝임 황금 왕관',
    slot: 'hat',
    costStars: 5,
    description: '낱말 박사에게만 어울리는 빛나는 왕관!',
    color: '#F59E0B',
  },
  {
    id: 'hat_wizard',
    name: '별빛 마법사 모자',
    slot: 'hat',
    costStars: 6,
    description: '별과 달 무늬가 수놓아진 신비로운 고깔모자.',
    color: '#6366F1',
  },

  // 얼굴/안경 (Face)
  {
    id: 'face_blush',
    name: '하트 볼터치',
    slot: 'face',
    costStars: 2,
    description: '볼이 발그레! 사랑스러운 하트 반짝이.',
    color: '#FB7185',
  },
  {
    id: 'face_round_glasses',
    name: '똑똑이 동그란 안경',
    slot: 'face',
    costStars: 3,
    description: '글자가 또렷하게 잘 보이는 똑똑이 안경.',
    color: '#0EA5E9',
  },
  {
    id: 'face_star_sunglasses',
    name: '별모양 선글라스',
    slot: 'face',
    costStars: 4,
    description: '햇빛 쨍쨍한 날 멋쟁이가 되는 별 선글라스!',
    color: '#EC4899',
  },

  // 목/소품 (Neck)
  {
    id: 'neck_bowtie',
    name: '하늘색 나비넥타이',
    slot: 'neck',
    costStars: 2,
    description: '단정하고 귀여운 하늘색 리본 나비넥타이.',
    color: '#38BDF8',
  },
  {
    id: 'neck_clover',
    name: '행운 네잎클로버 핀',
    slot: 'neck',
    costStars: 3,
    description: '좋은 짝꿍을 척척 찾게 도와주는 행운의 핀.',
    color: '#22C55E',
  },
  {
    id: 'neck_medal',
    name: '낱말 왕 금메달',
    slot: 'neck',
    costStars: 4,
    description: '열심히 공부한 우리에게 주는 번쩍번쩍 금메달!',
    color: '#EAB308',
  },
  {
    id: 'neck_cape',
    name: '용감한 빨간 망토',
    slot: 'neck',
    costStars: 5,
    description: '바람에 휘날리는 멋진 슈퍼 낱말 히어로 망토!',
    color: '#DC2626',
  },
];

export const MISSIONS: MissionDefinition[] = [
  {
    id: 'mission_speed_clear',
    title: '번개 손가락',
    description: '제한 시간 안에 스테이지를 1번 클리어하기',
    rewardStars: 2,
    category: 'time',
  },
  {
    id: 'mission_combo_5',
    title: '연속 5콤보 천재',
    description: '틀리지 않고 연속으로 5개 정답 맞히기',
    rewardStars: 3,
    category: 'combo',
  },
  {
    id: 'mission_fruit_master',
    title: '달콤한 과일 박사',
    description: '과일 주제(1단계) 낱말 모두 맞히기',
    rewardStars: 1,
    category: 'theme',
  },
  {
    id: 'mission_animal_master',
    title: '동물 친구 수호자',
    description: '동물 주제(2단계, 5단계) 모두 클리어하기',
    rewardStars: 3,
    category: 'theme',
  },
  {
    id: 'mission_vehicle_master',
    title: '부릉부릉 운전사',
    description: '탈것 주제(4단계) 낱말 모두 맞히기',
    rewardStars: 2,
    category: 'theme',
  },
  {
    id: 'mission_all_clear',
    title: '한글 낱말 숲 마스터',
    description: '12단계 왕중왕 낱말 축제까지 모두 클리어하기',
    rewardStars: 5,
    category: 'theme',
  },
];
