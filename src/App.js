
import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyFage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="*" element={<EmptyFage/>} />
        </Routes>

      </div>

    </BrowserRouter>



  );
}

export default App;
