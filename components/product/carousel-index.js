import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '@/styles/product/product.module.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function CarouselIndex() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${styles['h-725']}`}
      >
        <SwiperSlide>
          <img
            src="/images/product/list/banner4.jpeg"
            className={`${styles.indexImg}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/list/banner1.jpg"
            className={styles.indexImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/list/banner2.jpg"
            className={styles.indexImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/list/banner3.jpg"
            className={styles.indexImg}
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
