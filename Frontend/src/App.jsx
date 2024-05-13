import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Feed from './pages/feed/feed';
import Login from './pages/login/login';
import Register from './pages/register/register';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
