import React from 'react'
import Logo from './Logo'

const Footer = () => {

    return (
        <div className='footer'>
            <div className="container footer-container">
                <div>
                    <Logo width={120} height={70} />
                    <p style={{ color: 'silver', fontSize: '12px' }} className='mt-0 pt-0 mb-0 pb-3'>Москва, 2024 © Все права защищены</p>
                </div>

            </div>
        </div>
    )
}

export default Footer