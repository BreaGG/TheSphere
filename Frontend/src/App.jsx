import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Feed from './pages/feed/feed';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Mainpage from './pages/mainpage/mainpage';
import PostDetails from './components/postDetails/PostDetails';
import UserDetails from './components/userProfile/UserDetails';
import Contact from './pages/contact/contact';
import EditProfile from './components/editProfile/EditProfile';
import './App.css';
import { UserProvider } from './contexts/UserContext';

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/feed" element={<Feed />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/posts/:id" element={<PostDetails />} />
                    <Route exact path="/users/:id" element={<UserDetails />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route path="/edit-profile/:id" element={<EditProfile />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
