import React, { useState } from 'react'
import MemberDLayout from '@/components/member/desktop-layout'
import CollectionCard from '@/components/member/desktop-layout/collection-card'
import cardData from '@/data/member/cardData'

export default function Collection() {
  const [selectedActivity, setSelectedActivity] = useState('0')

  const handleChange = (event) => {
    setSelectedActivity(event.target.value)
  }

  return (
    <>
      <p className="chb-h4 text-purple1">個人收藏</p>
      <hr className="custom-hr" />
      {/*  */}
      <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
        {/* col-6 */}
        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className="nav-link active w-100"
            id="activity-tab"
            data-bs-toggle="tab"
            data-bs-target="#activity"
            type="button"
            role="tab"
            aria-controls="activity"
            aria-selected="true"
          >
            活動
          </button>
        </li>

        <li className="nav-item col-6 col-md-3" role="presentation">
          <button
            className="nav-link px-5 w-100"
            id="artist-tab"
            data-bs-toggle="tab"
            data-bs-target="#artist"
            type="button"
            role="tab"
            aria-controls="artist"
            aria-selected="false"
          >
            藝人
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="activity"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {/* 活動dropdown */}
          <div className="row">
            <div className="col-12 col-lg-5 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">活動種類：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center h-100 w-100"
                  value={selectedActivity}
                  onChange={handleChange}
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                  <option value="1" className="text-center">
                    - - 演唱會 - -
                  </option>
                  <option value="2" className="text-center">
                    - - 音樂祭 - -
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        <div
          className="tab-pane fade"
          id="artist"
          role="tabpanel"
          aria-labelledby="artist-tab"
        >
          {/* 活動dropdown */}
          <div className="row">
            <div className="col-12 col-lg-3 py-3 d-flex flex-row">
              <div className="col-6 text-center">
                <label
                  htmlFor="activity"
                  className="chb-h6 flex-fill text-center"
                >
                  <span className="chb-h5">藝人：</span>
                </label>
              </div>
              <div className="col-6">
                <select
                  required
                  id="activity"
                  name="activity"
                  className="align-item-center h-100 w-100"
                  value={selectedActivity}
                  onChange={handleChange}
                  disabled
                >
                  <option value="0" className="text-center">
                    - - 全部 - -
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {cardData.map((v, index) => (
          <div key={index} className="col-6 col-md-3">
            <CollectionCard
              imageSrc={v.imageSrc}
              title={v.title}
              description={v.description}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .custom-hr {
          border: 0;
          border-top: 4px solid #007bff; /* 設置粗細和顏色 */
          width: 100%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
        }
      `}</style>
    </>
  )
}

Collection.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Music | 會員收藏庫" pageName="collection">
      {page}
    </MemberDLayout>
  )
}
