import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../../default-layout/nav'
import Footer from '../../default-layout/footer'
// 多個地方需使用到 title 這個 props，所以 import TitleContextProvider
import { TitleContextProvider } from '@/context/ticket/useTitle'

export default function FixedContentLayout({ children, title = '' }) {
  // #region 動態獲取 nav、footer 高度返回給 content，以及 windowWidth

  const navRef = useRef(null)
  const footerRef = useRef(null)
  const [contentHeight, setContentHeight] = useState('100vh')
  const [isPhoneView, setIsPhoneView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneView(window.innerWidth <= 450)

      if (!isPhoneView && navRef.current && footerRef.current) {
        const navHeight = navRef.current.offsetHeight
        const footerHeight = footerRef.current.offsetHeight
        const availableHeight = `calc(100vh - ${navHeight + footerHeight}px)`
        setContentHeight(availableHeight)
      }
    }

    // Initial calculation
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Intersection Observer for observing height changes
    const observer = new ResizeObserver(handleResize)
    const navNode = navRef.current
    const footerNode = footerRef.current
    if (navNode) observer.observe(navNode)
    if (footerNode) observer.observe(footerNode)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      if (navNode) observer.unobserve(navNode)
      if (footerNode) observer.unobserve(footerNode)
    }
  }, [isPhoneView])

  // #endregion 動態獲取 nav、footer 高度返回給 content，以及 windowWidth

  // #region PhoneView

  if (isPhoneView) {
    return (
      <TitleContextProvider title={title}>
        <Head>
          <title>{title ? 'Ticket | ' + title : 'Ticket'}</title>
        </Head>
        <div className="d-flex flex-column vh-100">
          <main>
            <div className="music-container h-100">{children}</div>
          </main>
        </div>
      </TitleContextProvider>
    )
  }

  // #endregion PhoneView

  // #region DesktopView

  return (
    <TitleContextProvider title={title}>
      <Head>
        <title>{title ? 'Ticket | ' + title : 'Ticket'}</title>
      </Head>
      <div className="d-flex flex-column vh-100">
        {/* 需要把 <Nav /> 包裝在 <nav> 標籤裡 useRef 才能夠正確訪問 */}
        <nav ref={navRef}>
          <Nav />
        </nav>
        <main style={{ height: contentHeight }}>
          <div className="music-container h-100">{children}</div>
        </main>
        {/* 需要把 <footer /> 包裝在 <footer> 標籤裡 useRef 才能夠正確訪問 */}
        <footer ref={footerRef}>
          <Footer />
        </footer>
      </div>
    </TitleContextProvider>
  )

  // #endregion DesktopView
}
