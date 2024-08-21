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
          content="這個音樂活動平台旨在幫助音樂愛好者輕鬆接觸並參與各類現場音樂活動。平台整合了音樂活動探索、訂票和周邊商品購買，解決資訊分散和訂票繁瑣等問題，提供便捷的購物體驗。"
        />

        <meta
          name="keywords"
          content="Mak'in, Makin, Makin 製噪, 製噪, makin, makin 製噪, 音樂整合平台, makin 製噪 音樂整合平台"
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Mak'in 製噪 音樂整合平台" />
        <meta
          property="og:description"
          content="這個音樂活動平台旨在幫助音樂愛好者輕鬆接觸並參與各類現場音樂活動。平台整合了音樂活動探索、訂票和周邊商品購買，解決資訊分散和訂票繁瑣等問題，提供便捷的購物體驗。"
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
