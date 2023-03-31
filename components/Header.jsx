import Image from "next/image"
import Navegacion from "./Navegacion"

// Podemos importar las imagenes, o hacer uso directo de ellas si se encuentran en la carpeta public
// import Logotipo from '../public/img/logo.svg'

const Header = () => {
  return (
    <header>
        <Image src='img/logo.svg' height={100} width={300} alt="Logotipo principal" />
        <Navegacion />
    </header>
  )
}

export default Header