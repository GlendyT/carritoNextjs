import { Html, Head, Main, NextScript} from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html>
        <Head>
            <meta name="description" content="GuitarLA - Venta de guitarras y blog de musica"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css "  />
        </Head>

        <body>
            <Main/>
            <NextScript/>

        </body>
    </Html>
  )
}
