import Layout from "../components/Layout"
import styles from "../styles/404.module.css"
import Link from 'next/link'
import {FaExclamationTriangle} from "react-icons/fa"

const PageNotFound = () => {
    return (
        <Layout>

        <div className={styles.error}>
            <h1> <FaExclamationTriangle style={{marginRight:"10px"}}/>404</h1>
            <h4>Sorry, There is nothing here</h4>
            <Link href="/">click here</Link>
        </div>
        </Layout>
    )
}

export default PageNotFound
