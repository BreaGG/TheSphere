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
import PostForm from './pages/PostForm/PostForm';
import FeedDesing from './pages/feed/feedDesing';
import FeedDev from './pages/feed/feedDev';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import FAQ from './components/faq/faq';
import CodeOfConduct from './components/codeOfConduct/codeOfConduct';
import './App.css';
import { UserProvider } from './contexts/UserContext';
import { useState } from 'react';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <UserProvider>
            <BrowserRouter>
                <Navbar setSearchTerm={setSearchTerm} />
                <Routes>
                    {/* <Route exact path="/" element={<Home />} /> */}
                    <Route exact path="/" element={<Feed searchTerm={searchTerm} />} />
                    <Route exact path="/feedDesign" element={<FeedDesing searchTerm={searchTerm} />} />
                    <Route exact path="/feedDev" element={<FeedDev searchTerm={searchTerm} />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/posts/:id" element={<PostDetails />} />
                    <Route exact path="/users/:id" element={<UserDetails />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route path="/edit-profile/:id" element={<EditProfile />} />
                    <Route path="/create-post" element={<PostForm />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/code-of-conduct" element={<CodeOfConduct />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
