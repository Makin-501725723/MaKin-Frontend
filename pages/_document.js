import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-TW" className="h-100">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:site_name" content="Mak'in 製噪" />
        <meta
          name="description"
          content="這個音樂活動平台的設立，是希望音樂愛好者能夠更輕鬆地接觸並參與各類現場音樂活動。隨著音樂文化的多樣化和現場演出需求的增加，許多人常常面臨資訊分散、訂票繁瑣、周邊商品購買不便等問題。為了解決這些痛點，我們希望通過這個平台，集中提供全方位的音樂活動服務。
                  透過音樂活動探索功能，使用者可以輕鬆瀏覽並發現即將舉行的各種音樂活動，不論是音樂祭或演唱會都能一網打盡。平台也整合了訂票和周邊商品訂購，讓使用者能在同一平台完成所有購票及購物需求，提升整體使用體驗。"
        />
        <meta
          name="keywords"
          content="Mak'in, Makin, Makin 製噪, 製噪, makin, makin 製噪, 音樂整合平台, makin 製噪 音樂整合平台"
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Mak'in 製噪 音樂整合平台" />
        <meta
          property="og:description"
          content="這個音樂活動平台的設立，是希望音樂愛好者能夠更輕鬆地接觸並參與各類現場音樂活動。隨著音樂文化的多樣化和現場演出需求的增加，許多人常常面臨資訊分散、訂票繁瑣、周邊商品購買不便等問題。為了解決這些痛點，我們希望通過這個平台，集中提供全方位的音樂活動服務。
                  透過音樂活動探索功能，使用者可以輕鬆瀏覽並發現即將舉行的各種音樂活動，不論是音樂祭或演唱會都能一網打盡。平台也整合了訂票和周邊商品訂購，讓使用者能在同一平台完成所有購票及購物需求，提升整體使用體驗。"
        />
        <meta property="og:image" content="https://postimg.cc/gr6shzF5" />
        <meta property="og:url" content="https://makin-music.vercel.app" />
        <meta name="author" content="陳葆旻、張殷睿、吳方允、林銘" />
        <meta name="theme-color" content="#958cea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://makin-music.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="d-flex flex-column h-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
