import Link from "next/link";
import styles from "../styles/Navegacion.module.css";
import { useRouter } from "next/router";

const Navegacion = () => {
  // hook personalizado para obtener información de la ruta actuañ
  const router = useRouter();

  return (
    <nav className={styles.navegacion}>
      <Link href="/" className={router.pathname === '/' ? styles.active : null}>Inicio</Link>
      <Link href="/nosotros" className={router.pathname === '/nosotros' ? styles.active : null}>Nosotros</Link>
      <Link href="/blog" className={router.pathname === '/blog' ? styles.active : null}>Blog</Link>
      <Link href="/tienda" className={router.pathname === '/tienda' ? styles.active : null}>Tienda</Link>
    </nav>
  );
};

export default Navegacion;
