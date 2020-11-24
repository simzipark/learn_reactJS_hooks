import './App.css'
import UseInput from "./component/UseInput"
import UseTab from "./component/UseTab"
import UseBtn from "./component/UseBtn"
import UseTitle from './component/UseTitle'
import UseClick from './component/UseClick'
import UseConfirm from './component/UseConfirm'
import UsePreventLeave from './component/UsePreventLeave'
import UseBeforeLeave from './component/UseBeforeLeave'
import UseFadeIn from './component/UseFadeIn'
import UseNetwork from './component/UseNetwork'
import UseScroll from './component/UseScroll'
import UseFullScreen from './component/UseFullScreen'
import UseNotification from './component/UseNotification'
import UseAxios from './component/UseAxios'
import useTitle from '@nooks/use-title' //npm install @nooks/use-title --save 로 dependency 추가

function App() {
  useTitle("🌈REACT HOOKS🔥");
  const { loading, error, data, refetch } = UseAxios({ url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating" });
  // console.log(`Loading : ${loading} \nError : ${error} \nData : ${JSON.stringify(data)}`);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Learn React Hooks💜</h1>
        <h4>🍊 useState : 입력한대로 표기하기</h4>
        <UseInput />
        <h4>🍊 useState : 클릭한 탭으로 List 내 값 표기</h4>
        <UseTab />
        <h4>🍊 useEffect : component가 Update 된다면?</h4>
        <UseBtn />
        <h4>🍊 useEffect : 5초 뒤 브라우저 Title Update</h4>
        <UseTitle />
        <h4>🍊 useEffect : 3초 뒤 Input Focus + Click 시 console.log 출력</h4>
        <UseClick />
        <h4>🍊 custom hook : 확인창 클릭 액션</h4>
        <UseConfirm />
        <h4>🍊 custom hook : 브라우저 종료 시</h4>
        <UsePreventLeave />
        <h4>🍊 custom hook : 창에서 벗어날 시</h4>
        <UseBeforeLeave />
        <h4>🍊 custom hook : 사라짐 효과</h4>
        <UseFadeIn />
        <h4>🍊 custom hook : on/offline</h4>
        <UseNetwork />
        <h4>🍊 custom hook : 스크롤 이동</h4>
        <UseScroll />
        <h4>🍊 custom hook : 창 최대/최소</h4>
        <UseFullScreen />
        <h4>🍊 custom hook : 브라우저 알람</h4>
        <UseNotification />
        <h4>🍊 custom hook : Axios</h4>
        <p>LOADING : {loading && "Loading...💤"}</p>
        {/* <p>LOADING : {loading ? "Loading...💤" : "Done!"}</p> */}
        <p>DATA : {data && data.status}</p>
        <button onClick={refetch}>Fetch</button>
      </header>
    </div >
  );
}

export default App;
