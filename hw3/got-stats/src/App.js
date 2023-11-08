import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Houses from './pages/Houses/Houses';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/houses' element={<Houses />}></Route>
      </Routes>
    </>
  );
}

export default App;
