import './App.css'
import UseInput from "./component/UseInput"
import UseTab from "./component/UseTab"
import UseBtn from "./component/UseBtn"
import UseTitle from './component/UseTitle'
import UseClick from './component/UseClick'
import UseConfirm from './component/UseConfirm'
import UsePreventLeave from './component/UsePreventLeave'

function App() {
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
      </header>
    </div >
  );
}

export default App;
