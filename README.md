# 온라인 청첩장 DIY

## 목표

- 직접 사용할 온라인 청첩장 개발
- RTL/Vitest/StoryBook '테스트 코드' 작성, 'CI/CD' 파이프라인 구축 경험하기
- 웹분석 툴 연동으로 50명 + @ 방문객의 Web Vitals 성능 측정 및 개선
- TODO 체크리스트 올클리어 이후 의미 있는 포폴로 활용하기

## TODO

- #### UI/UX 마크업
  - Swiper Slides 기반 이미지 슬라이더 적용
  - 예식장 위치 지도 적용
    - 카카오맵, 티맵, 네이버지도 '아이콘' 클릭시 자동 어플 실행 적용

- #### 테스트 코드 작성
  - RTL, Vitest 테스트 코드 작성
  - Storybook UI 테스트 코드 작성

- #### CI/CD 파이프라인 구축
  - husky 기반 로컬 테스트 적용 (서버 비용 절감)
  - Github Actions 기반 CI 자동 테스트 적용 (dev -> master 병합 시점에만 테스트 적용)
  - Vercel 기반 CD 자동 배포 적용

- #### Web Vitals 코어 웹성능 측정
  - PostHog 웹분석 툴 연동 이후 실제 유저 환경 관측
    - 로딩 성능 측정: Largest Contentful Paint (LCP) 측정 및 개선
    - 상호작용 측정: Interaction to Next Page (INP) 측정 및 개선
    - 시각적 안정석 측정: Cumulative Layout Shift (CLS) 측정 및 개선
    - 사용자 활동 범위 측정: PostHog 기반 HeatMap 관측
  - 부하 테스트 경험해보기 (희망사항)
