import React from 'react'

export default function DesktopBlackNoIconBtnBlack({
  text = 'button',
  className = 'chb-h6',
  onClick = () => {},
}) {
  //console.log('onClick:', onClick) // 輸出 onClick 以確認它的類型
  return (
    <>
      <button
        className={`DesktopBlackNoIconBtnBlack ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
      <style jsx>{`
        .DesktopBlackNoIconBtnBlack {
          padding: 12px 20px;
          color: white;
          background-color: black;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s ease;
        }
        .DesktopBlackNoIconBtnBlack:hover {
          background-color: white;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
