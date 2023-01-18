import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <h1>Edson C.</h1>

      <div className='footer_socials'>
        <a href='https://instagram.com/edcortes.riv' target='_blank'><AiOutlineInstagram/></a>
        <a href='https://github.com/Edsoncortes40' target='_blank'><AiOutlineGithub/></a>
        <a href='https://www.linkedin.com/in/edsoncortes40/' target='_blank'><AiOutlineLinkedin/></a>
      </div>
      <div className='footer_copyright'>
        <small><AiOutlineCopyrightCircle/> Edson Cortes Rivera. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer