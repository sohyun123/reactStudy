### reactStudy
## React js

# Install and Start  

1. Install Node.js (가능하면 최신버전으로) -> npm을 설치하는 의미
2. (mac에서는) npm -v 으로 버전 확인(설치 확인)
3. $ (sudo) npm install -g create-react-app  
    //g는 global로 프로그램 어디에서도 접근가능하게 설치하는 의미  
    //npm은 프로그램을 설치하는 프로그램, npx는 create-react-app을 한 번만 임시적으로 설치하고 지우는 용도(항상 최신 상태로 유지 가능)
4. (mac에서는) create-react-app -V 으로 버전 확인(설치 확인)
5. Working directory 만들기 (directory name은 react를 제외한 이름으로! ex. react-app)
6. (1)  $ cd working directory  
        $ create-react-app .  
   또는  
   (2)  $ create-react-app 프로젝트이름  
        $ cd 프로젝트 이름  
        $ npm start  
        
7. 사용 명령어: yarn start 또는 npm start  
             yarn build 또는 npm run build  
             yarn test 또는 npm run test  
             yarn eject 또는 npm run eject  
             

<img width="529" alt="스크린샷 2021-03-20 오전 11 38 14" src="https://user-images.githubusercontent.com/29995265/111856830-c33f9a80-8970-11eb-9f63-5520f534a196.png">

8. ctrl C 로 서버 종료

# 배포
npm run build하면 build라는 폴더 안에 파일 생성. 이 안의 index.html에는 불필요한 용량을 차지하는 것들이 지워진 채로 저장돼 있음  
  
  
# React 구조  

- node modules
- public
    - index.html: '''<div id="root"></div>''' 안에 component를 넣음
- src
    - 이 안에 있는 파일이 index.html에 들어갈 component들
    - index.js: 진입파일,
                '''<React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root')'''  
                // 여기의 root랑 index.html의 root랑 매핑  
                // '''<App />'''은 react 통해 만든 사용자 정의 component. 실제 구현은 import App from '''./App;'''에서!  
    - App.js: 실제로 구현되는 부분
    - index.css: 
- package-lock.json
- package.json
- README.md


***


참고 자료
1. [생활코딩 React](https://opentutorials.org/module/4058/24666)
2. [누구나 할 수 있는 React js](https://velopert.com/3621)
3. [리액트 기초 배우기](https://dev-pengun.tistory.com/entry/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88-%EB%B0%B0%EC%9A%B0%EA%B8%B0-1-Hello-React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%EA%B3%BC-%EB%B9%8C%EB%93%9C?category=913270)
4. [기초부터 배우는 react js](https://medium.com/wasd/%EA%B8%B0%EC%B4%88%EB%B6%80%ED%84%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-react-js-2-f0e8d4a55740)
