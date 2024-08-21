import React from 'react'

export default function TabContentAid({ tabTargetAid, content }) {
  return (
    <>
      <div
        className="tab-pane fade show active"
        //^^^^^^^^show跟active只需要寫在第一個tab的content裡面
        id={tabTargetAid}
        role="tabpanel"
        aria-labelledby={`${tabTargetAid}-tab`}
      >
        <div className="chr-p text-purple3 line-h2">{content}</div>
      </div>
      <style jsx>{`
      .line-h2 {
        line-height: 2;
      }
      `}</style>
    </>
  )
}
