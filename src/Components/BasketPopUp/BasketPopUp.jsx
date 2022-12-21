import React from 'react'
import { Mail } from '../../Images/ProductPage/ProductPage'
import { Logo } from '../Navbar/Logo'
import './BasketPopUp.sass'

export const BasketPopUp = () => {
    return (
        <div className='BasketPopUpContainer'>
            <div className='BasketPopUp'>
                {Mail}
            </div>
        </div>
    )
}