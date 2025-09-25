import React, { Component } from 'react'

import { FaTelegram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p className='copyRight'>© Все права защищены</p>
        <div className='socialNetworksIcons'>
            <p className='contactsNetworks'>Контакты:</p>
            <FaInstagramSquare className='iconNetworks'/>
            <FaTelegram className='iconNetworks'/>
            <FaFacebookSquare className='iconNetworks'/>
            <FaWhatsappSquare className='iconNetworks'/>
        </div>
      </div>
    )
  }
}
