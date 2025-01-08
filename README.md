# 📚 Book Rating Frontend (Next.js)

**Book Rating**은 사용자가 책에 대한 리뷰와 별점을 작성하고 조회할 수 있는 웹 애플리케이션입니다.  
이 저장소는 **Next.js** 기반의 프론트엔드 프로젝트로, 사용자가 편리하게 책을 평가하고, 리뷰를 남길 수 있는 기능을 제공합니다.

---

## 📦 프로젝트 아키텍처: FSD (Feature-Sliced Design)

이 프로젝트는 **Feature-Sliced Design (FSD)** 아키텍처를 도입하여, 기능 중심으로 코드를 분리하고 유지보수성을 강화했습니다.

### 📁 폴더 구조

```plaintext
src
┣ app                  # 글로벌 설정 및 레이아웃 관리
┃ ┣ layouts            # 페이지 레이아웃 구성
┃ ┣ providers          # 전역 상태 및 React Query Provider 설정
┃ ┗ styles             # 전역 CSS 및 스타일 정의
┣ entities             # 핵심 도메인 모델 (auth, book, review 등)
┃ ┣ auth               # 인증 관련 로직
┃ ┣ book               # 책 정보 및 API
┃ ┗ review             # 리뷰 관리 및 API
┣ features             # 구체적인 기능 단위의 UI, 로직 (e.g., 리뷰 작성, 삭제)
┣ pages                # Next.js 페이지 라우트 및 UI 구성
┣ shared               # 공통 컴포넌트, 훅, 유틸리티
┃ ┣ api                # 공통 API 클라이언트 및 요청 관리
┃ ┣ ui                 # 버튼, 모달, 입력 필드 등 재사용 가능한 컴포넌트
┃ ┗ hooks              # 재사용 가능한 React 훅
┗ widgets              # 레이아웃과 헤더, 푸터 등 UI 위젯
```

## 🚀 주요 기능

- 나의 리스트에 책 추가 및 상태 관리: 사용자가 자신의 리스트에 책을 추가하고, 책의 읽기 상태(읽기 전, 읽는 중, 중단 등)를 관리할 수 있습니다.
- 개인 메모 작성: 리스트에 추가한 책에 대해 나만의 메모를 작성할 수 있으며, 해당 메모는 본인만 접근 가능합니다.
- 별점 및 한줄평 공유: 사용자가 책에 별점을 부여하고, 한줄평을 작성하여 다른 사용자들과 책 후기를 공유할 수 있습니다.

## 🛠️ 기술 스택

- 프론트엔드 프레임워크: Next.js 13+
- 상태 관리 및 데이터 패칭: React Query
- UI 라이브러리: TailwindCSS, Shadcn UI
- 데이터 관리: TypeScript, Axios
- 테스트: Jest, React Testing Library (RTL)
- 코드 품질: ESLint, Prettier

## 🔧 설치 및 실행 방법

```bash
# 저장소 클론
git clone https://github.com/username/book-rating-frontend.git
cd book-rating-frontend

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드 및 배포
npm run build
npm start
```

## ✅ 테스트 실행

```bash
# 테스트 실행
npm run test

# 커버리지 리포트 포함 테스트 실행
npm run test:coverage
```

## 📈 프로젝트 개선 사항 (To-Do List)

- 다중 언어 지원 (i18n)
- E2E 테스트 (Cypress 도입 고려)
