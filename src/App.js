import './App.css';

function App() {
  return (
    <div>
      <h1>리액트 APP</h1>
      <p>리액트 처음 시작합니다.</p>
      <Hello></Hello>
    </div>
    
  );
}

// Hello 함수(컴포넌트) => JSX 태그
function Hello() {
  return  (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App;
