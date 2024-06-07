import { useEffect, useState } from 'react';
import './App.css';
import Conetent from './component/Conetent';
import Gnb from './component/Gnb';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabState,setTabState] = useState('normal');

  useEffect(()=>{
    //console.log를 통하여 data를 확인할 수 있습니다.
    console.log(data)
  },[data])

  useEffect(() => {
    //fetch를 이용하여 Lorem Picsum데이터를 불러옵니다.
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => {
        //data state에 불러온 데이터값을 저장함, loading을 false로 바꿔줍니다.
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        //데이터를 불러오지 못했을 때 콘솔창에 에러메세지를 표시합니다.
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {/* loading이 true일 때만 화면에 loading page를 랜더링 합니다. */}
      {loading &&  <div className="loading">Loading...</div>}
      <Gnb tabState={tabState} setTabState={setTabState} />
      <Conetent tabState={tabState} data={data} />
    </div>
  );
}

export default App;
