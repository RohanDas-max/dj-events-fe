import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../config/index";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
//import EventMap from "../../components/EventMap"
import styles from "../../styles/eventSlug.module.css";
import { useRouter } from "next/router";

export default function EventPage({ evt }){

  return (
    <Layout title={evt.name}>
      <div className={styles.event}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-GB")} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image ? (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        ) : (
          ""
        )}
        <h3>Performers</h3>
        <p>{evt.performers}</p>
        <h3>Descriptions</h3>
        <p>{evt.description}</p>
        <h3>Venue:{evt.vanue}</h3>
        <p>{evt.address}</p>
       {/* <EventMap evt={evt} /> */}
        <Link href="/events">
          <a className={styles.back}>{"<"}Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: { evt: events[0] },
  };
}
