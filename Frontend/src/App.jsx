import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Feed from './pages/feed/feed';
import Login from './pages/login/login';
import Register from './pages/register/register';
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
import AdminDashboard from './components/adminDashboard/AdminDashboard';
import ProtectedRoute from './config/ProtectedRoute';
import AdminButton from './components/AdminButton/AdminButton';
import './App.css';
import { UserProvider } from './contexts/UserContext';
import MobileVersion from './pages/mobileVersion/mobileVersion';
import useIsMobile from './hooks/useIsMobile';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const isMobile = useIsMobile();
    const [accessible, setAccessible] = useState(false);

    const toggleAccessibility = () => {
        const root = document.documentElement;
        if (!accessible) {
            root.style.setProperty('--naranja', '#000000');
            root.style.setProperty('--blanco', '#FFFFFF');
            root.style.setProperty('--negro', '#000000');
            root.style.setProperty('--fondo', '#FFFFFF');
            root.style.setProperty('--gris', '#000000');
            root.style.setProperty('--saturation', '100%');
        } else {
            root.style.setProperty('--naranja', '#FF503F');
            root.style.setProperty('--blanco', '#FFFFFF');
            root.style.setProperty('--negro', '#1E1E1E');
            root.style.setProperty('--fondo', '#E5E3E1');
            root.style.setProperty('--gris', '#B6B6B6');
            root.style.setProperty('--saturation', '0%');
        }
        setAccessible(!accessible);
    };

    return (
        <UserProvider>
            <BrowserRouter>
                {!isMobile && <AdminButton />}
                {!isMobile && <Navbar setSearchTerm={setSearchTerm} />}
                <Routes>
                    {isMobile ? (
                        <Route path="*" element={<MobileVersion />} />
                    ) : (
                        <>
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
                            <Route
                                path="/admin-dashboard"
                                element={
                                    <ProtectedRoute adminOnly={true}>
                                        <AdminDashboard />
                                    </ProtectedRoute>
                                }
                            />
                        </>
                    )}
                </Routes>
                {!isMobile && <Footer />}
                <button className="accessibility-button" onClick={toggleAccessibility}>High Contrast</button>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
