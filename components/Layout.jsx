import Head from 'next/head'
import Header from './Header'

/**
 * Layout
 * Los archivos de layout en NextJS hasta el momento (versipon 13) siguen siendo componentes de React
 * Para futuras versiones, el equipo de NextJS considera una carpeta llamada app donde funcionarán al clásico estilo de Remix
 *      archivo.jsx (layout) - carpeta con nombre igual al archivo - contenido interno de la carpeta a proyectar en el lauout
 */
const Layout = ({children, title = '', description = ''}) => {
  return (
    <div>
        {/* Definir información de cabecera para todas las páginas que hagan uso de este Layout */}
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>
        <Header />
        {children}
    </div>
  )
}

export default Layout