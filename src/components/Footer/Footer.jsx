import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt=""/>
        <img src={facebook_icon} alt=""/>
        <img src={instagram_icon} alt=""/>
        <img src={twitter_icon} alt=""/>
      </div>
      <ul>
        <li>Help centre</li>
        <li>audio description</li>
        <li>gift cards</li>
        <li>privacy</li>
        <li>terms of use</li>
        <li>contact us</li>
      </ul>
      <p className='copyright-text'> &copy; netflix, inc</p>
    </div>
  )
}

export default Footer
