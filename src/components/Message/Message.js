import React from 'react'
import cloudbank from '../../assets/cloudbank.png';
import './Message.scss'

const Message = ({ error }) => {

  return (
    <>
      {error && (<h2>{error}</h2>)}
      <div className='image-container'>
        <img src={cloudbank} alt="An image of the CLOUDBANK synthetic production facility"/>
      </div>
    </>
  )
}

export default Message
