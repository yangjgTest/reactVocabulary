
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import style from './App.module.css'

function App() {
  return (
    <div className="App">
      <Hello/>  
      <div className={style.box}>App</div>
    </div>

  
  );
}

export default App;
