import Link from 'next/link'
import React from 'react'

const Navegacion = () => {
  return (
    <nav>
        <Link href='/'>Incio</Link>
        <Link href='/nosotros'>Nosotros</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/tienda'>Tienda</Link>
    </nav>
  )
}

export default Navegacion