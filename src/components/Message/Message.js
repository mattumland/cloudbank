import React from 'react'
import PropTypes from 'prop-types';
import cloudbank from '../../assets/cloudbank.png';
import './Message.scss'

const Message = ({ error }) => {

  return (
    <>
      {error && (<h2 className='error'>{error}</h2>)}
      <div className='image-container'>
        <img src={cloudbank} alt="An image of the CLOUDBANK synthetic production facility"/>
      </div>
    </>
  )
}

export default Message

Message.propTypes = {
  error: PropTypes.string
}
