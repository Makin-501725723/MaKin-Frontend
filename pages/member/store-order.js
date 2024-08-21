import MemberDLayout from '@/components/member/desktop-layout'
import OrderCard from '@/components/member/desktop-layout/order-card'
import OrderCardMobile from '@/components/member/mobile-layout/order-card-mobile'
import toast, { Toaster } from 'react-hot-toast'

import { useCallback, useEffect, useState } from 'react'
import { getStoreOrder } from '@/services/store-order'
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

// import { Dropdown } from 'react-bootstrap'

export default function StoreOrder() {
  const [isDesktop, setIsDesktop] = useState(true)
  const { auth } = useAuth()
  const [orderData, setOrderData] = useState([])
  const [sortBy, setSortBy] = useState('')

  const getSort = (e) => {
    setSortBy(e.target.value)
  }
  useEffect(() => {
    console.log(sortBy)
  }, [sortBy])

  const getUserData = useCallback(async () => {
    try {
      const res = await getStoreOrder(sortBy)
      console.log('以下是response data')
      console.log(res)
      console.log('以下是res.data')
      console.log(res.data)

      if (res.status === 'success') {
        console.log('以下是res.data.result')
        console.log(res.data.result)
        setOrderData(res.data.result) //這一包是物件陣列[{},{},{}]
        console.log('會員購物紀錄載入成功')
      } else {
        console.log('會員購物紀錄載入失敗')
      }
    } catch (error) {
      console.error('Error fetching order data:', error)
      console.log('會員購物紀錄載入失敗')
    }
  }, [sortBy, setOrderData])

  useEffect(() => {
    console.log(sortBy)
    getUserData()
  }, [sortBy, getUserData])

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 576) // 螢幕寬度 > 576px 為電腦板
    }

    handleResize() // 初始設定一次

    window.addEventListener('resize', handleResize) // 監聽視窗大小變化

    return () => window.removeEventListener('resize', handleResize) // 清除事件監聽器
  }, [])
  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      //getUserData() // 将用户 ID 传递给 getUserById 函数
    }
  }, [auth])

  if (orderData.length === 0) {
    return (
      <>
        <p className="chb-h4 text-purple1">周邊購買紀錄</p>
        <hr className="custom-hr" />
        {/* 活動dropdown */}
        <div className="row">
          <div className="col-12 col-lg-6 py-3 d-flex flex-row">
            <div className="col-6 text-center">
              <label
                htmlFor="activity"
                className="chb-h6 flex-fill text-center"
              >
                <span className="chb-h5">訂單排序：</span>
              </label>
            </div>
            <div className="col-6">
              <select
                required
                id="activity"
                name="activity"
                className="align-item-center h-100 w-100"
                onChange={getSort}
                disabled
              >
                <option value="desc" className="text-center">
                  時間由近到遠
                </option>
                <option value="asc" className="text-center">
                  時間由遠到近
                </option>
              </select>
            </div>
          </div>
        </div>
        {/* map寫在下面 */}
        <div className="row mx-0">
          <div className="container mt-5 px-0">
            <div className="table table-bordered text-center">
              <p className="chr-h6">您還尚未有任何購物紀錄</p>
              <Link href="/product" className="chr-h6">
                快來看看我們的熱賣商品吧，點我開始購物
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <p className="chb-h4 text-purple1">周邊購買紀錄</p>
      <hr className="custom-hr" />
      {/* 活動dropdown */}
      <div className="row">
        <div className="col-12 col-lg-6 py-3 d-flex flex-row">
          <div className="col-6 text-center">
            <label htmlFor="activity" className="chb-h6 flex-fill text-center">
              <span className="chb-h5">訂單排序：</span>
            </label>
          </div>
          <div className="col-6">
            <select
              required
              id="activity"
              name="activity"
              className="align-item-center h-100 w-100"
              onChange={getSort}
            >
              <option value="desc" className="text-center">
                時間由近到遠
              </option>
              <option value="asc" className="text-center">
                時間由遠到近
              </option>
            </select>
          </div>
        </div>
      </div>
      {/* map寫在下面 */}
      <div className="row mx-0">
        {isDesktop
          ? orderData.map((v, i) => {
              return (
                <OrderCard
                  key={i}
                  order_num={v.order_num}
                  firstProductPicture={v.firstProductPicture}
                  firstProductName={v.firstProductName}
                  totalPrice={v.totalPrice}
                  totalCount={v.totalCount}
                  created_at={v.created_at}
                />
              )
            })
          : orderData.map((v, i) => {
              return (
                <OrderCardMobile
                  key={i}
                  order_num={v.order_num}
                  firstProductPicture={v.firstProductPicture}
                  firstProductName={v.firstProductName}
                  totalPrice={v.totalPrice}
                  totalCount={v.totalCount}
                  created_at={v.created_at}
                />
              )
            })}
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

StoreOrder.getLayout = function getLayout(page) {
  return (
    <MemberDLayout title="Makin | 周邊購買紀錄" pageName="store-order">
      {page}
    </MemberDLayout>
  )
}
