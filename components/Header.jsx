import Image from "next/image";
import Navegacion from "./Navegacion";

// NextJS recomienda en la medida de lo posible trabajar con modulos de CSS
// Sin embarga, los demás paradigmas de CSS en React se pueden seguir usando (css global, styled components, etc)
import styles from "../styles/Header.module.css";

// Podemos importar las imagenes, o hacer uso directo de ellas si se encuentran en la carpeta public
// import Logotipo from '../public/img/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image
          src="img/logo.svg"
          height={100}
          width={300}
          alt="Logotipo principal"
        />
        <Navegacion />
      </div>
    </header>
  );
};

export default Header;
