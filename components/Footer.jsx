import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        {/* 
        Logicamente se pudo haber llamado el componente de navegación. 
        Pero tiene sus propios estilos (modulo de CSS), Lo cual genera conflicto con el estilo que se le quiere dar a este componente Footer

        otro enfoque válido, hubiese sido declarar los estilos de la navegación en la hoja de estilo CSS global
        como se hizo en el proyecto de Remix
        */}
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
