
import './App.css';

function App() {
  const name = "Tom";
  const naver  = {
    name : '네이버',
    url : 'https://www.naver.com'
  }
  return (
    <div className="App">
     <h1 style={{
       color : 'red',
       backgroundColor : 'green'
     }} >
        welcome
        <h1>히히</h1>
        </h1>
        <a href={naver.url}>{naver.name}</a>
        
    </div>
  );
}

export default App;
