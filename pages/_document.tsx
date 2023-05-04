import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html>
      <Head>
        <link href="/dist/output.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&family=Hind+Guntur:wght@300;400;500;600;700&family=Hind+Madurai:wght@300;400;500;600;700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lekton:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
      </Head>
      <body
      className="w-full h-full bg-space"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
