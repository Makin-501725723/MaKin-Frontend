import React from 'react'

export default function PhoneWhiteNoIconBtnPurple({
  text = 'button',
  className = 'chb-h6',
  onClick = () => {},
}) {
  return (
    <>
      <button
        className={`PhoneWhiteNoIconBtnPurple ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
      <style jsx>{`
        .PhoneWhiteNoIconBtnPurple {
          padding: 8px 12px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease;
        }
        .PhoneWhiteNoIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
