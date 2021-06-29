import Head from "next/head";
import Header from "./Header";
import Footer from './Footer'
import styles from "../styles/layout.module.css";
function Layout({ title, keyword, children, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>

      <Header />
      <div className={styles.container}>{children}</div>
      <Footer/>
    </div>
  );
}

export default Layout;
