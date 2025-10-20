# 🍷 WHYNE
### WHYNE은 사용자가 다양한 와인 리뷰를 확인하고, 구매 여부를 쉽게 판단할 수 있는 와인 리뷰 플랫폼입니다.

<img width="1800" height="600" alt="image" src="https://github.com/user-attachments/assets/cd2abace-5bfc-4243-ad41-b7944bbd4f45" />

<br>


## 🎯 목표
> #### 주어진 요구사항을 충족하는 것을 넘어, 경쟁력 있는 특별한 UI / UX를 도입하고 사용자에게 최적의 와인 선택 경험을 제공하는 것

<br>

## 👥 팀 소개 

<span align="right">
  
  🔗 [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki)

</span>

<div align="center">
  
|팀장 |팀원 |팀원 |팀원 |
|:---:|:---:|:---:|:---:|
| <div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px; background: white;"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Dove.png" width="80" height="80" alt="🕊️"/><br><b><a href="https://github.com/junye0l">김준열</a></b><br><img src="https://img.shields.io/badge/ISTJ-50C878?style=for-the-badge&logoColor=white" alt="ISTJ"/><br><code>FE</code></div> | <div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px; background: white;"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bat.png" width="80" height="80" alt="🦇"/><br><b><a href="https://github.com/wlrnjs">서지권</a></b><br><img src="https://img.shields.io/badge/INTJ-5C0091?style=for-the-badge&logoColor=white" alt="INTJ"/><br><code>FE</code></div> | <div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px; background: white;"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Baby%20Chick.png" width="80" height="80" alt="🐣"/><br><b><a href="https://github.com/suuuuya">이연수</a></b><br><img src="https://img.shields.io/badge/INFP-9B59B6?style=for-the-badge&logoColor=white" alt="INFP"/><br><code>FE</code></div> | <div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px; background: white;"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Black%20Cat.png" width="80" height="80" alt="🐈‍⬛"/><br><b><a href="https://github.com/Imhwitae">황휘태</a></b><br><img src="https://img.shields.io/badge/ISTJ-E74C3C?style=for-the-badge&logoColor=white" alt="ISTJ"/><br><code>FE</code></div> |

</div>

<br>

## ⏰ Core Time

<span align="right">
  
  🔗 [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki)

</span>

> 원활한 소통을 위해 매일 진행하며, 의미 없는 시간이 되지 않도록 **노션 문서화**로 기록합니다.

#### 🗓️ 시간표
  
| 요일 | 시간 |
|:---:|:---:|
| 월요일 | **15:00** |
| 화요일 ~ 일요일 | **13:30** |

<br>

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
- [배포 바로가기](https://google.com/)
- [스토리북 바로가기](https://68d3998e0b054d1207706cbb-tzevsxkvcq.chromatic.com/?path=/docs/my-profile-accountitem--docs)
- [Wiki 바로가기](https://github.com/Team-3-2/Wine/wiki)
