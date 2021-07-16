import Layout from "../components/Layout";
import Link from "next/dist/client/link";
import { API_URL } from "../config/index";
import Eventitem from "../components/Eventitem";


function Home({ events }) {
  //console.log(events);
  return (
    <Layout title="DJ Events Near You!">
      <p>Upcoming DJ Events</p>
      {events.length === 0 && <h3>No events to Show</h3>}

      {events && events.slice(0,3).map((evt) => (
        <Eventitem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 ? (
        <Link href="/events">
          <a className="btn-secondary">Click For More</a>
        </Link>
      ) : (
        ""
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  // console.log(events);
  return {
    props: { events: events },
  };
}

export default Home;
