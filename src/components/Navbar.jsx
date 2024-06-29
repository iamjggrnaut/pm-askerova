import React from 'react'
import Logo from './Logo'

const Navbar = () => {

    return (
        <div className='navpanel'>
            <div className="container nav-container">
                {/* <a href="#about-block">О нас</a> */}
                <a href="#study">Обучение</a>
                <a href="/service">Услуги</a>
                <Logo />
                <a href="#gallery">Галерея</a>
                <a href="#contact-block">Контакты</a>
            </div>

            <div className="mobile-nav">
                <Logo />
                <a href="/service">Услуги</a>
                <a href="#about-block">О нас</a>
                <a href="#study">Обучение</a>
                <a href="#gallery">Галерея</a>
                <a href="#contact-block">Контакты</a>
            </div>
        </div>
    )
}

export default Navbar