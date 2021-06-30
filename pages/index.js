import Layout from "../components/Layout";
import Link from "next/dist/client/link";
import { API_URL } from "../config/index";
import Eventitem from "../components/Eventitem";
function Home({ events }) {
  //console.log(events);
  return (
    <Layout title="Dj Pintu 7992773">
      <p>Upcoming DJ Events</p>
      {events.length === 0 && <h3>No events to Show</h3>}

    {events.map((evt)=>(
      <Eventitem key={evt.id} evt={evt}/>
    ))}

{events.length > 0 ? (
  <Link href="/events">
    <a className="btn-secondary">Click For More</a>
  </Link>
): "" }

    </Layout>

  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log(events);
  return {
    props: { events: events.slice(0,3) },
    revalidate: 1
  };
}

export default Home;
