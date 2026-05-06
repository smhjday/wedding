/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "서문효준",
    nameEn: "Groom",
    father: "서문춘호",
    mother: "유성은",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "정세미",
    nameEn: "Bride",
    father: "정해문",
    mother: "이나수",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-14",
    time: "15:00",
    venue: "JnJ아트컨벤션",
    hall: "제이포레홀 6층",
    address: "경기 평택시 비전5로 20-46",
    tel: "0507-1441-5300",
    "자가용 이용시",
"네비게이션 : JnJ아트컨벤션 입력",
"주소 검색 : 평택시 비전5로 20-46 또는 평택시 비전동 1101-1번지 입력",
"네비게이션에 안나오는 경우 "비전사거리" 검색",
"경부고속도로 이용시",
"경부고속도로 안성IC 출구 → 평택 방향 좌회전 → 비전지하차도 고가 위 우회전 → 비전 사거리 직진 → gn산부인과 우회전 → JnJ아트컨벤션",
"차량 이용시 웨딩홀 주변의 교통 혼잡이 예상되오니 대중교통 이용을 부탁드립니다.",
"대중교통 이용시",
"1호선 평택역 1번 출구",
"마을 10번 버스 : CGV평택소사벌점 하차 (35분 소요)",
"1361번 / 1372번 버스 : 지엔산부인과 하차 (30분 소요)",
"평택대학교",
"1000번 버스 : 배다리생태공원 서문 정류장 하차 (10분 소요)",
"지제역 SRT 1번 출구",
"1000번 / 1155번 버스 : 배다리생태공원 서문 정류장 하차 (35분소요)",
"시외버스 이용시",
"평택역 도보(3분) 이동 후 셔틀버스 이용",
    mapLinks: {
      kakao: "https://kko.to/ukC3-Dt-j2",
      naver: "https://naver.me/FxFtMUKh"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "서문효준", bank: "국민은행", number: "816102-00-040126" },
      { role: "아버지", name: "서문춘호", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "유성은", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "정세미", bank: "국민은행", number: "623502-01-435015" },
      { role: "아버지", name: "정해문", bank: "하나은행", number: "473-910007-93505" },
      { role: "어머니", name: "이나수", bank: "농협은행", number: "207017-51-029525" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "효준 ♥ 세미 결혼합니다",
    description: "2026년 11월 14일, 소중한 분들을 초대합니다."
  }
};
