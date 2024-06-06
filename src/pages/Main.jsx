import React, { useState } from 'react'
import GoldSvg from '../components/GoldSvg'
// import base from '../assets/base.png'
// import mc from '../assets/mc.png'
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

import i1 from '../assets/gallery/1.JPG'
import i2 from '../assets/gallery/2.JPG'
import i3 from '../assets/gallery/3.JPG'
import i4 from '../assets/gallery/4.JPG'
import i5 from '../assets/gallery/5.JPG'
import i6 from '../assets/gallery/6.JPG'
import i7 from '../assets/gallery/7.JPG'
import i8 from '../assets/gallery/8.JPG'
import i9 from '../assets/gallery/9.JPG'
import i10 from '../assets/gallery/10.JPG'
import i11 from '../assets/gallery/11.JPG'

import mc from '../assets/mc.JPG'
import base from '../assets/base.JPG'

import igicon from '../assets/igicon.png'
import { FaPhoneAlt, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";


const Main = () => {

    const [showBase, setShowBase] = useState(false)
    const [showMc, setShowMc] = useState(false)

    return (
        <div className='main-page'>

            {/* HERO BLOCK */}
            <div className="hero-block">
                <div className="container hero-container">
                    <h1>
                        Искусство красоты: <br />
                        Обучение перманентному макияжу <br />
                        с Мастером Кямалей Аскеровой<br />
                    </h1>
                    <p style={{ fontWeight: '300' }}>
                        Откройте двери в мир безупречной красоты! <br />
                        Присоединяйтесь к нашему курсу по перманентному макияжу <br />
                        и освойте искусство создания идеального облика. <br />
                        Начните свой путь к профессиональному успеху прямо сейчас –<br />
                        регистрируйтесь сегодня и станьте мастером совершенства! <br />
                    </p>
                    <div>
                        <a href='#prospects' style={{ textDecoration: 'none', color: 'black' }} className='prime-btn'>
                            Подробнее
                        </a>
                    </div>
                </div>
            </div>

            {/* ABOUT BLOCK */}
            <div id='about-block'>
                <div className="container about-container">
                    <h2 className='title text-center'>Студия перманентного макияжа "PM askerova"</h2>
                    <div className='about-description'>
                        <p>
                            Добро пожаловать в <span style={{ color: '#FFB444', fontWeight: '600' }}>"PM askerova"</span> – студию перманентного <br />
                            макияжа под руководством талантливого мастера <br />
                            Кямали Аскеровой. Наша сутдия предлагает всестороннее <br />
                            обучение, сочетающее в себе передовые техники и <br />
                            практический опыт, что делает нас уникальными в сфере <br />
                            бьюти-индустрии. <br />
                        </p>
                    </div>
                    <h2 className="title">Почему выбирают "PM askerova"?</h2>
                </div>
            </div>

            <div id="prospects">
                <div className="container prospect-container">
                    <div className="prospect-item">
                        <div className="d-flex gap-2 align-items-center">
                            <GoldSvg />
                            <span className='prospect-title'>Экспертный руководитель: </span>
                        </div>
                        <p>Кямаля Аскерова – признанный специалист в области перманентного макияжа с многолетним опытом.</p>
                    </div>

                    <div className="prospect-item">
                        <div className="d-flex gap-2 align-items-center">
                            <GoldSvg />
                            <span className='prospect-title'>Индивидуальный подход: </span>
                        </div>
                        <p>Небольшие группы и персональное внимание к каждому ученику.</p>
                    </div>
                    <div className="prospect-item">
                        <div className="d-flex gap-2 align-items-center">
                            <GoldSvg />
                            <span className='prospect-title'>Современное оборудование: </span>
                        </div>
                        <p>Использование новейших технологий и материалов, соответствующих мировым стандартам.</p>
                    </div>
                    <div className="prospect-item">
                        <div className="d-flex gap-2 align-items-center">
                            <GoldSvg />
                            <span className='prospect-title'>Поддержка после обучения: </span>
                        </div>
                        <p>Консультации и помощь в трудоустройстве для выпускников.</p>
                    </div>
                </div>
            </div>

            <div id="study">
                <div className="container study-container">
                    <h2 className="title text-end">Что мы предлагаем?</h2> <br /><br />
                    <div className="row course-row pt-5">
                        <div className="col">
                            <img src={base} alt="" />
                        </div>
                        <div className="col course-description">
                            <div>
                                <h3 className='fw-bold mb-2'>Базовый курс</h3>
                                <p>
                                    Наш Базовый курс предназначен для тех, кто хочет освоить профессию с нуля. Курс охватывает все аспекты перманентного макияжа, начиная с основ анатомии и гигиены, заканчивая практическими занятиями по всем техникам. Вы научитесь создавать идеальные брови, губы и стрелки, используя современные методы и оборудование. Под чутким руководством Кямали Аскеровой вы сможете приобрести все необходимые знания и навыки для успешной карьеры в сфере перманентного макияжа.
                                </p>
                            </div>
                            <div>
                                <button className="prime-btn" onClick={() => { setShowBase(true); setShowMc(false) }}>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row course-row pt-5">
                        <div className="col course-description">
                            <div>
                                <h3 className='fw-bold mb-2'>Повышение квалификации</h3>
                                <p>
                                    Для профессионалов, стремящихся повысить свой уровень мастерства, мы предлагаем специализированные мастер-классы. Эти занятия фокусируются на углубленном изучении и совершенствовании отдельных техник, таких как микроблейдинг, пудровые брови, акварельные губы и другие современные тенденции. Каждый мастер-класс – это возможность перенять уникальный опыт Кямали Аскеровой, узнать о последних новинках и тенденциях в индустрии, а также задать вопросы и получить персональные рекомендации.
                                </p>
                            </div>
                            <div>
                                <button className="prime-btn" onClick={() => { setShowBase(false); setShowMc(true) }}>
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <img src={mc} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="gallery">
                <div className="gallery-container">
                    <h3 className="title text-center pt-5 pb-5">
                        Работы наших студентов
                    </h3>
                    <Carousel fade>
                        <Carousel.Item>
                            <img src={i1} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i2} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i3} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i4} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i4} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i5} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i6} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i7} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i8} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i9} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i10} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={i11} alt="" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div id="contact-block">
                <div className="container contact-container pt-5 pb-5">
                    <h3 className="title mt-5">За более детальной информацией свяжитесь с нами</h3>
                    <div className="row pt-5">
                        <div className="col">
                            <div className="d-flex gap-2 mb-3 align-items-center contact-line">
                                <FaPhoneAlt style={{ fontSize: '20px' }} />
                                <span>Тел.: +7 916 620 7384</span>
                                <span></span>
                            </div>
                            <div className="d-flex gap-2 mb-3 align-items-center contact-line">
                                <FaWhatsapp style={{ fontSize: '20px' }} />
                                <span>What'sApp: +7 916 620 7384</span>
                                <span></span>
                            </div>
                            <div className="d-flex gap-2 mb-3 align-items-center contact-line">
                                <FaTelegramPlane style={{ fontSize: '20px' }} />
                                <span>Telegram: <a target='_blank' style={{ textDecoration: 'none', color: '#FFB444' }} href="https://t.me/Kama_AR90">Кямаля Аскерова</a></span>
                                <span></span>
                            </div>

                            <div className="d-flex gap-2 pt-3 mb-3 align-items-center contact-line">
                                {/* <span>Адрес: </span> */}
                            </div>

                            <div className="pt-3 mb-3 contact-line">
                                <span className='title'>Мы в соцсетях</span>
                                <div className="d-flex gap-3">
                                    <a href="https://www.instagram.com/kyamalya_askerova" className='mt-3'>
                                        <img src={igicon} style={{ width: '48px' }} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="bottom-block">
            </div>

            <Modal show={showBase} onHide={() => setShowBase(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="fw-semibold">Базовый курс</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fw-bold">Брови, губы , межресничка</h5>
                    <ul>
                        <li>Обучение 5 дней ( 2 дня мощной теоретической части, 3 дня практической части ) </li>
                        <li>3  показательной модели  от преподавателя </li>
                        <li>Отработка на 5 моделях </li>
                        <li>Стартовый набор в подарок  </li>
                    </ul>
                    <h6 className="fw-bold">Бонусы</h6>
                    <ul>
                        <li>Секреты успешного фото и видео контента , красивые ракурсы , обработка фотографий , коллажи,  работа с инстаграмом </li>
                        <li>Гайд по привлечению клиентов </li>
                        <li>Сьемка процесса обучения на проф , камеру для ваших социальных сетей </li>
                        <li>Чат с бессрочной поддержкой с преподавателем </li>
                        <li>Дополнительный день обучения через месяц после курса , на котором мы разберем все ваши ошибки во время самостоятельной работы </li>
                        <li>Курс по удаления ремувером в подарок </li>
                    </ul>
                    <br />
                    <p>
                        <span className='fw-bold'>Преимущества обучения у нас:</span><br />
                        Опытные преподаватели с многолетним стажем в индустрии красоты.
                        Индивидуальный подход к каждому ученику.
                        Практические занятия на профессиональном оборудовании.
                        Выпускной сертификат, подтверждающий квалификацию.
                    </p>
                    <br />
                    <p className="fw-bold">Стоимость: 120.000 руб.</p>
                    <p>Возможна рассрочка</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex justify-content-center">
                        <a href='#contact-block' onClick={() => setShowBase(false)} style={{ textDecoration: 'none' }} className="prime-btn">
                            Записаться
                        </a>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={showMc} onHide={() => { setShowMc(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="fw-semibold">Повышение квалификации</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fw-bold">БРОВИ , ГУБЫ</h5>
                    <ul>
                        <li>Теоретическая водная часть </li>
                        <li>Разбор оборудования / игл </li>
                        <li>Колористика/ Разбор Пигментов </li>
                        <li>Разбор техники/ штрихов </li>
                        <li>Демонстративная модель по губам и бровям </li>
                        <li>Отработка на латексе </li>
                    </ul>
                    <br />
                    <p>
                        <span className='fw-bold'>Преимущества обучения у нас:</span><br />
                        Опытные преподаватели с многолетним стажем в индустрии красоты.
                        Индивидуальный подход к каждому ученику.
                        Практические занятия на профессиональном оборудовании.
                        Выпускной сертификат, подтверждающий квалификацию.
                    </p>
                    <br />
                    <p className="fw-bold">Стоимость: 35.000 руб.</p>
                    <p>Возможна рассрочка</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex justify-content-center">
                        <a href='#contact-block' onClick={() => setShowMc(false)} style={{ textDecoration: 'none' }} className="prime-btn">
                            Записаться
                        </a>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Main