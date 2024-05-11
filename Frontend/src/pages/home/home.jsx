import './home.css'
import logo from '../../assets/img/Logo.svg'

function Home() {
    return (
        <section className='Home'>
            <div>
                <div className='top'>
                    <div className='list'>
                        <p>ART</p>
                        <p>CODE</p>
                        <p>INNOVATION</p>
                        <p>DESING</p>
                    </div>
                    <img src={logo} alt="" />
                    <h2>WHERE CREATIVITY COLLIDES</h2>
                </div>
                <div className='bottom'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Venenatis sit mi vel quis enim vitae sagittis libero. Neque neque nam diam sapien ut vulputate sit. Et ipsum feugiat volutpat adipiscing. Enim vitae dolor malesuada augue.
                        Lorem ipsum dolor sit amet consectetur. Venenatis sit mi vel quis enim vitae sagittis libero. Neque neque nam diam sapien ut vulputate sit. Et ipsum feugiat volutpat adipiscing. Enim vitae dolor malesuada augue.
                    </p>
                    <a className='joinButton' href="">JOIN NOW!</a>
                    <a className='text-a' href="">ALREDY HAVE AN ACCOUNT? LOG IN!</a>
                </div>
            </div>
        </section>
    )
}

export default Home
