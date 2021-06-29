import Link from 'next/link';
import styles from  '../styles/footer.module.css';


const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <p>copyright &copy; Dj Pintu 2021</p>
                <Link href="/about">
                    about this project
                </Link>
            </footer>
        </div>
    )
}

export default Footer
