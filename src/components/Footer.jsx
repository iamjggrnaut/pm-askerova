import React from 'react'
import Logo from './Logo'

import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Footer = () => {

    return (
        <div className='footer'>
            <div className="container footer-container">
                <div>
                    <Logo width={120} height={70} />
                    <p style={{ color: 'silver', fontSize: '12px' }} className='mt-0 pt-0 mb-0 pb-3'>Москва, 2024 © Все права защищены</p>
                </div>

                <div>
                    <h6 className="fw-bold text-end">
                        Разработано ARCANE DEVLAB
                    </h6>
                    <div className='d-flex gap-3 justify-content-end'>
                        <a style={{ color: 'white', textDecoration: 'none' }} target='_blank' href="https://t.me/hardnuttocrack"><FaTelegramPlane /></a>
                        <a style={{ color: 'white', textDecoration: 'none' }} target='_blank' href="https://www.instagram.com/arcanedevlab/"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer