import Link from "next/link";
import styles from "../styles/Navegacion.module.css";

const Navegacion = () => {
  return (
    <nav className={styles.navegacion}>
      {/* 
      Si deseamos especificar una clase de css al componente Link, es necesario usarlo como wrapper, 
      y declarar una etiqueta <a></a> como hijo, y declarar la clase de css sobre el mismo
      El mejor enfoque es que en el CSS se apunte al padre "navegacion" y posterior a ello apuntar al hijo "a"
      */}
      <Link href="/">Incio</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/tienda">Tienda</Link>
    </nav>
  );
};

export default Navegacion;
