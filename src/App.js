import './App.css';
import Header from './components/Header';
import InsightScreen from './components/InsightScreen';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route path='/InsightScreen' element={<InsightScreen/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
