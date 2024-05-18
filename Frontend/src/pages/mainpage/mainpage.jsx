import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from '../feed/feed';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function Mainpage() {

    return (
        <section>
            <Navbar/>
            hola
            <Routes>
                <Route exact path="/feed" element={<Feed />} />
            </Routes>
            <Footer/>
        </section>
    )
}

export default Mainpage
