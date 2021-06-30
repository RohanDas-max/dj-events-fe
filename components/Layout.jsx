import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./showcase";
import styles from "../styles/layout.module.css";
function Layout({ title, keyword, children, description }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>

      <Header />
      {router.pathname === "/" ? <Showcase /> : ""}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
