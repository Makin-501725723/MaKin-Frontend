import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneBlackPureIconBtnPurple({
  iconWidth = 20,
  iconHeight = 20,
  icon: IconComponent = BsPlus,
  onClick = () => {},
}) {
  return (
    <>
      <button className="PhoneBlackPureIconBtnPurple" onClick={onClick}>
        <IconComponent
          style={{
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
      </button>
      <style jsx>{`
        .PhoneBlackPureIconBtnPurple {
          padding: 4px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease;
        }
        .PhoneBlackPureIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
