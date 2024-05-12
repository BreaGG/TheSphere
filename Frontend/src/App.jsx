import Home from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from './pages/feed/feed';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/feed" element={<Feed />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
