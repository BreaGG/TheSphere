import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Feed from './pages/feed/feed';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Mainpage from './pages/mainpage/mainpage';
import PostDetails from './components/postDetails/PostDetails';
import UserDetails from './components/userProfile/UserDetails';
import Contact from './pages/contact/contact';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/main" element={<Mainpage />} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/posts/:id" element={<PostDetails />} />
            <Route exact path="/users/:id" element={<UserDetails />} /> 
            <Route exact path="/contact" element={<Contact />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App
