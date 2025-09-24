# Wine
(프로젝트 설명)

## 목표
- 목표: 프로젝트 완성

## 팀원 정보 및 역할
- 준열: 팀 리딩, 랜딩 페이지, 와인 상세 페이지
- 휘태: 로그인, 회원가입, 리뷰 남기기/와인 등록하기 모달
- 연수: 마이페이지(내가 등록한 와인), notion 문서화
- 지권: 마이페이지(내가 쓴 후기)
- 정훈: 와인 목록 페이지

> [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki)

## Core Time
- 데일리 스크럼  
  - 월요일: 오후 3시  
  - 화요일 일요일: 오후 1시 30분 (20~30분 진행)
- 집중 코딩 (모각코)  
  - 9:00 ~ 18:00 (zep 활용)
 
> [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki)

## Branch 전략
- `main` → 배포
- `develop` → 통합 브랜치
- `feature/*`, `design/*`, `chore/*` → 작업 브랜치 → PR → develop → main

> [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki/%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%BB%A8%EB%B2%A4%EC%85%98)

## 기술 스택
- Next.js, React, TypeScript
- Tailwind CSS
- Storybook
- husky + lint-staged
- Vercel (배포)

> [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki/%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)

## 깃허브 액션
- Vercel 배포  
- Chromatic으로 Storybook 배포 (develop 기준)  

> [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki/%EA%B9%83%ED%97%88%EB%B8%8C-%EC%95%A1%EC%85%98)

## 프로젝트 관리
- README: 프로젝트 개요 / 기술 스택 / 실행 방법
- Wiki: 세부 규칙, 가이드 문서, 브랜치 룰
- Notion: 회의록, 멘토링 피드백, 참고 자료
- GitHub Project: 일정 / TODO 관리

> [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B4%80%EB%A6%AC)

## 실행 방법
```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 스토리북 실행
npm run storybook

# 환경 변수 설정 (.env 예시)
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## 폴더 구조

```bash
src
 ┣ api          # 서버와 통신하는 API 함수 모음
 ┣ app          # Next.js App Router 관련 페이지/라우트 파일
 ┣ assets       # 이미지, 폰트, 아이콘 등 정적 리소스
 ┣ components   # 재사용 가능한 UI 컴포넌트
 ┣ context      # React Context 관련 전역 상태 관리
 ┣ hooks        # 커스텀 훅 모음
 ┣ providers    # 전역 Provider 설정 (예: ThemeProvider, QueryClientProvider 등)
 ┣ types        # 전역 타입 정의 (TypeScript 인터페이스, 타입)
 ┗ utils        # 공통 유틸리티 함수
```
> [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki/%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)

## 바로가기
- [배포 바로가기](https://wine-phi-olive.vercel.app/)
- [스토리북 바로가기](https://68d3998e0b054d1207706cbb-rwcjoqmeoa.chromatic.com/)
- [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki)
