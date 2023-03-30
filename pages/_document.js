import { Html, Head, Main, NextScript } from 'next/document'

/**
 * _document
 * Es un componente personalizado de NextJS, que tiene un nivel más alto que _app.js
 * Este archivo solo se renderiza del lado del servidor, por lo que ecentos de React no funcionarán
 * 
 * - Es el lugar ideal para declarar hojas de estilo globales de tipo externo
 * - También es el lugar ideal para declarar el idioma del sitio Web
 * - Ideal para aplicar clases de css a la etiqueta body
 * 
 */
export default function Document() {
  return (
    <Html lang="es-MX">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
