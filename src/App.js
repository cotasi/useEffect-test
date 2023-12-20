import { useEffect, useState } from 'react';

function App() {
  const[yo,youpdate] = useState(0);
  const yolist=['월','화','수','목','금','토','일'];

  const updateyo = ()=>{
    let count;
    count = yo + 1;
    count %= 7;
    youpdate(count);
  }
  return (
    <div className="App">
      <button onClick={()=>{ updateyo(); }}>클릭하면 아래 요일이 하나씩 수정되게 해주세요.</button>
      <p>{yolist[yo]}요일</p>
    </div>
  );
}

export default App;
