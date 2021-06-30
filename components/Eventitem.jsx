import Link from "next/link"
import Image from 'next/image'
import styles from "../styles/event.module.css"

const Eventitem = ({evt}) => {
    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <Image src={evt.image ? evt.image : '/images/event-default.png'} width={170} height={100} />
            </div>
            <div className={styles.info}>
                <span>
                    <h3>{evt.date} at {evt.time}</h3>
                </span>
                <h3>{evt.name}</h3>
            </div>
            <div className={styles.link} >
                <Link href={`/events/${evt.slug}`}>
                    <a className="btn">More</a>
                </Link>
            </div>
        </div>
    )
}

export default Eventitem
