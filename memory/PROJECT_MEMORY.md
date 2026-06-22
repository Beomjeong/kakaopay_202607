# 프로젝트 메모리 — 카카오페이 × 피카PC방 7월 프로모션

> 작업 환경이 바뀌어도 이 파일을 읽으면 컨텍스트를 이어받을 수 있도록 기록합니다.
> 커밋/푸시 시 반드시 이 폴더(memory/)를 포함할 것.

---

## 기본 정보

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 카카오페이 × 피카PC방 7월 프로모션 랜딩페이지 |
| GitHub 저장소 | https://github.com/Beomjeong/kakaopay_202607 |
| 베이스 소스 | https://github.com/Beomjeong/kakaopay_202606 (6월 캠페인, master 브랜치 클론) |
| 담당자 | yeti0524@mediaweb.co.kr |
| 작업 시작일 | 2026-06-22 |

---

## 기술 스택

- HTML / CSS / Vanilla JS (빌드 도구 없음, 순수 정적 파일)
- 로컬 서버: `npm run dev` → `serve .` (포트 3000)
- 폰트: Adobe Fonts (Typekit, kitId: `jjw7yow`) + Google Fonts (Asta Sans, Noto Sans KR)
- 카카오 JS SDK 2.7.4 (카카오톡 공유)

---

## 파일 구조

```
kakaopay_202607/
├── index.html         # 메인 페이지
├── style.css          # 전체 스타일
├── script.js          # 인터랙션 (패럴렉스 등)
├── assets/            # 이미지/SVG/아이콘 리소스
├── package.json
├── package-lock.json
├── .gitignore
└── memory/
    └── PROJECT_MEMORY.md  ← 이 파일
```

---

## 6월 → 7월 변경 필요 사항 (작업 예정)

- [ ] `index.html` — OG 태그 URL, 이벤트 기간(06 → 07), 텍스트 내용 수정
- [ ] `assets/` — 7월용 디자인 시안 교체 (head_title_pc.svg, head_title_mo.svg 등)
- [ ] OG 이미지(Thumbnail_800x400.jpg, Thumbnail_1200x630.jpg) 교체
- [ ] 유의사항 문구 업데이트 (필요 시)

---

## 주요 규칙 / 주의사항

- OG 이미지 경로는 반드시 **절대경로** (상대경로 입력 시 SNS 공유 시 이미지 깨짐)
- 배포 전 `og:url` 값을 실제 배포 URL로 교체할 것
- `head_title_pc.svg` / `head_title_mo.svg` — PC(769px+) / 모바일(768px 이하) 분기
- 패럴렉스 코인 이미지: `data-speed` 속성으로 속도 조절 (낮을수록 가까운 층)

---

## 작업 로그

### 2026-06-22
- kakaopay_202606 master 브랜치를 클론해 kakaopay_202607 저장소로 remote 변경
- memory/ 폴더 및 PROJECT_MEMORY.md 최초 작성
