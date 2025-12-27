import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react' // 未使用のインポート（エラー1: no-unused-vars）

export default function Home() {
  const unusedVar = 'これは使われない' // 未使用の変数（エラー2: no-unused-vars）
  const result = undefinedFunction() // 定義されていない関数（エラー3: no-undef）
  
  // React Hooksのルール違反（エラー4: react-hooks/rules-of-hooks）
  if (true) {
    const [count, setCount] = useState(0)
  }

  return (
    <div className="container">
      <Head>
        <title>SD Lab CD Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to SDLab!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
       <h3>Contributors:</h3>
       <table border="1">
         <tr>
           <th>名前</th>
           <th>日時</th>
         </tr>
         <tr>
           <td>柏 祐太郎</td>
           <td>2025/2/25</td>
         </tr>
         <tr>
           <td>金地 琳太郎</td>
           <td>2024/3/27</td>
         </tr>
       </table>
       {/* 閉じタグがないJSX（エラー5: 構文エラー） */}
       <div>
         <p>これは閉じタグがない
      </div>
</main>
      <Footer />
    </div>
  )
}
