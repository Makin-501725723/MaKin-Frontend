import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/product/product.module.scss'
import CartLayout from '@/components/layout/cart-layout'
import ProgressBarOne from '@/components/product/progressBarOne'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import { GET_PRODUCTS } from '@/configs/api-path'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { useTotal } from '@/hooks/product/use-Total'

export default function CartIndex() {
  const [products, setProducts] = useState([])
  const cartKey = 'makin-cart'
  const [cart, setCart] = useState([])
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const router = useRouter()
  const { totalQty, setTotalQty, addOne } = useTotal()

  const breadcrumbsURL = [
    { label: '周邊商城', href: '/product' },
    { label: '購物車', href: '/cart' },
  ]
  // const checkCart = () => {
  //   const cart = localStorage.getItem('cart')
  //   setCardDatas(cart)
  // }

  // useEffect(() => {
  //   checkCart()
  //   console.log(cartDatas)
  // }, [cartDatas, router])

  // 後端商品
  useEffect(() => {
    fetch(GET_PRODUCTS, {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }
        return res.json()
      })
      .then((data) => {
        const { pid } = router.query
        const product = data.find((p) => p.id === Number(pid))
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error fetching products', error)
      })

    setCart(getCartFromStorage())
  }, [router.query.pid])
  // 購物車內容
  useEffect(() => {
    setItems(
      cart.map((item) => ({
        ...item,
        ...products.find((product) => product.id === item.id),
      }))
    )

    let qty = 0
    let price = 0
    cart.forEach((item) => {
      qty += +item.quantity
      price += item.quantity * item.price
    })
    setTotalQty(qty)
    setTotalPrice(price)
    console.log(qty)
  }, [cart, products])

  const getCartFromStorage = () => {
    let cartData = []
    const oriData = localStorage.getItem(cartKey)
    console.log(oriData)
    try {
      cartData = JSON.parse(oriData)
      if (!Array.isArray(cartData)) {
        cartData = []
      }
    } catch (ex) {
      console.error('Error parsing cart data', ex)
    }
    return cartData
  }

  const cartRemoveItem = (pid) => {
    const resultCart = cart.filter((p) => p.id !== pid)
    localStorage.setItem(cartKey, JSON.stringify(resultCart))
    setCart(resultCart)
  }

  const cartModifyQty = (pid, qty) => {
    const resultCart = cart.map((p) => {
      if (pid === p.id) {
        return { ...p, quantity: qty }
      } else {
        return { ...p }
      }
    })
    localStorage.setItem(cartKey, JSON.stringify(resultCart))
    setCart(resultCart)
  }

  const handleRemoveCart = (pid) => {
    Swal.fire({
      title: '確定要刪除這項商品嗎?',
      text: '刪除後，無法復原!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '已刪除!',
          text: '這項商品已刪除',
          icon: 'success',
        })
        cartRemoveItem(pid)
      }
    })
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <ProgressBarOne />
      <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
        <div className={`col-12 col-md-8 cart-area ${styles['my-20']} `}>
          <p className={`chb-h5 ${styles['ml-20']} ${styles.text18}`}>購物車</p>
          <div className="card mb-3 border-0 cart-card">
            {items.map((p) => (
              <div key={p.id} className="row g-0">
                <div className={`col-md-3 ${styles['columnCenter']}`}>
                  <img
                    src={`/images/product/list/${p.picture}`}
                    className={`img-fluid rounded-start ${styles['wh-200']} `}
                    alt="..."
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <p className="card-title card-text d-flex justify-content-between align-items-center chb-h6">
                      {p.activity} {p.name}
                    </p>
                    <p className={`card-text chb-h6 ${styles['mt-40']}`}>
                      單價: NT$ {p.price}
                    </p>
                    <div className="row g-3 align-items-center">
                      <div className="col-auto">
                        <p className="col-form-label chb-h6">數量: </p>
                        <input
                          type="number"
                          value={p.quantity}
                          className={`${styles['bg-grey']}`}
                          onChange={(e) => {
                            let newValue = parseInt(e.currentTarget.value)
                            if (newValue < 1) {
                              newValue = 1
                            }
                            cartModifyQty(p.id, newValue)
                          }}
                        />
                        {/* <select
                          className="form-select"
                          value={p.quantity}
                          onChange={(e) =>
                            cartModifyQty(p.id, e.currentTarget.value)
                          }
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select> */}
                      </div>
                    </div>
                    <div className={`cartTotal ${styles['mt-28']}`}>
                      <p className="card-text chb-h6">
                        小計: NT$ {p.quantity * p.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-2 ${styles['columnCenter']} ${styles['mb-m-40']}`}
                >
                  <DesktopBlackNoIconBtnPurple
                    text="刪除"
                    className={`chb-h6`}
                    onClick={() => {
                      handleRemoveCart(p.id)
                    }}
                  />
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className={`card-text chb-h6 `}>
            總數量: {totalQty} 件/ 總金額: NT$ {totalPrice}
          </div>
        </div>
      </div>
      <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
        <div
          className={`col-12 col-md-8 cart-area ${styles['my-20']} ${styles['columnCenter']} `}
        >
          {totalQty > 0 && (
            <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
              <div
                className={`col-12 col-md-8 cart-area ${styles['my-20']} ${styles['columnCenter']} `}
              >
                <Link href={`/cart/payment`}>
                  <DesktopBlackNoIconBtnPurple
                    text="結帳"
                    className={`chb-h6 ${styles['btn-760']}`}
                  />
                </Link>
              </div>
            </div>
          )}
          {totalQty === 0 && (
            <div className={`row ${styles['mb-40']} ${styles.centerItem}`}>
              <div
                className={`col-12 col-md-8 cart-area ${styles['my-20']} ${styles['columnCenter']} `}
              >
                <button
                  className={`chb-h6 ${styles['btn-760']} ${styles['btn-disabled']}`}
                  disabled
                >
                  購物車是空的
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

CartIndex.getLayout = function getLayout(page) {
  return <CartLayout title="cart">{page}</CartLayout>
}
