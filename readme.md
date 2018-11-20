# NEXT.js

# 질문
- create-react-app 은 eject 등을 통해 웹팩같은걸 설정하는데, nextjs도 설정 을 바꿀 수 있는가?
    - eject는 없는것 같다.  

# 프레임워크와 라이브러리의 차이
- 프레임워크 : 내 코드를 프레임 워크에서 불러서 사용한다. 
- 라이브러리 : 내 코드에서 라이브러리를 불러서 사용한다. 

# 코드
- github.com/GrotesQ/CodeLab-Next-JS

# React
## React 구성요소/특징
- JSX
- Virtual DOM 
    - draw call 최적화 : 화면을 다시그릴는 걸 최소화 한다. (`draw call 알아보기`)
- 뷰 컴포넌트 라이브러리 
    - 리액트는 프레임 워크가 아니라 라이브러리 임을 강조
    - 부분적으로 뷰 컴포넌트를 구성해, 일부만 리엑트로 만들 수 있다. 
    - 예: 페이스북
- SPA로 확장
    - 예: 인스타그램, 인스타그램 앱(리액트 네이티브)
- 검색엔진 최적화 (필요하다!) -> 그래서 Server side Rendering 이 필요하다.
    
## Server side Rendering
- 서버에서 미리 DOM을 렌더링
    - 방법 1 : 메타태그만 렌더링
    - 방법 2 : 컨텐츠 전체를 렌더링

## 메타태그 렌더링 (라우트 url에 따라 동적으로 렌더링 한다는 것.)
- head내의 title, description등의 meta 정보만 서버에서 렌더링
- Open Graph 메타 등으로 출력하여 소셜 미디어 공유에 대응
- 웹사이트 주요 페이지들을 검색 봇에 노출 가능
- 사용자가 컨텐츠를 올리지 않은 정적인 사이트에서는 이것도 괜찮다.
    - 유동적으로 변하는 컨텐츠 전체를 meta description 에 그릴 수 없으니까

## 컨텐츠 렌더링
- 서버 내에서  node.js 엔진을 연동해 JSX 내용을 DOM으로 출력
- 백엔드 엔진이 node가 아니라면(예: php), 엔진 두개 써야 하니까 서버 리소스가 많이 사용된다.

# NEXT.js
- `React`, `Routing`, `Sever Side Rendering` 이 포함된 프레임 워크
- [공식페이지](https://github.com/zeit/next.js/)
- [배우기](https://nextjs.org/learn)


