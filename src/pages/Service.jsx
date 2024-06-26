import React from 'react'
import Logo from '../components/Logo'
import { useNavigate } from 'react-router-dom'

const Service = () => {

    const navigate = useNavigate()

    return (
        <div className='service-page'>

            <div className='navpanel'>
                <div className="container nav-container">
                    <div onClick={e => navigate('/')} style={{ cursor: 'pointer' }}>
                        <Logo />
                    </div>
                </div>

                <div className="mobile-nav">
                    <div onClick={e => navigate('/')} style={{ cursor: 'pointer' }}>
                        <Logo />
                    </div>
                </div>
            </div>

            <p className="text-center fs-2 title">Прайс-лист</p>

            <div className="mt-2 container">
                <div className="price">
                    <p className="title">Первичная процедура:</p>
                    <br />
                    <p>
                        Перманентный макияж бровей  - 10 000₽ <br />
                        Перманентный макияж губ - 10 000₽ <br />
                        Межресничка/ стрелка с растушёвкой - 8 000₽ / 11 000₽
                    </p>
                    <br />
                    <p>
                        Перекрытие старого татуажа(брови) - 11 000₽ <br />
                        Перекрытие старого татуажа ( губы) - 11 000₽ <br />
                        Перекрытие старого татуажа век ( стрелка ) - 11 000₽ <br />
                        Удаление старого татуажа ремувером ( брови ) - 3000₽ <br />
                    </p>
                    <br />
                    <p className="title">Вторичная процедура( коррекция):</p>
                    <br />
                    <p>
                        Коррекция перманентного макияжа бровей  - 6 000₽ <br />
                        Коррекция перманентного макияжа губ - 6 000₽ <br />
                        Коррекция Межреснички/ стрелки с растушёвкой - 5 000₽ / 7 000₽ <br />
                        <br />
                        Коррекция перекрытия (брови ) - 7 000₽ <br />
                        Коррекция перекрытия(губы) - 7 000₽  <br />
                        Коррекция перекрытия (стрелка с растушёвкой) - 7 000₽ <br />
                    </p>
                    <br />
                    <p className="title">Refresh ( обновление спустя год ):</p>
                    <br />
                    <p>
                        Refresh бровей - 8 000₽ <br />
                        Refresh губ - 8 000₽ <br />
                        Refresh межресничка / стрелка с растушёвкой - 6 000₽ / 9 000₽
                    </p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Service