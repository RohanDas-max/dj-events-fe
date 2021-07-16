import Link from 'next/link';
import styles from  '../styles/footer.module.css';


const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <p>copyright &copy; Rohan-Max</p>
                <Link href="/about">
                    about this project
                </Link>
            </footer>
        </div>
    )
}

export default Footer
