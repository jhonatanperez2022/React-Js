import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='footerDiv'>
        <div className='footerIcons'>
            <a href='#'><AiFillInstagram className='footerIg'/></a>
            <a href='#'><AiOutlineTwitter /></a>
            <a href='#'><AiFillFacebook /></a>
        </div>
    </div>
  )
}

export default Footer