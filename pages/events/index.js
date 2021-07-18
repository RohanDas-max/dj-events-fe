import Layout from "../../components/Layout";
import Link from "next/link"
import { API_URL, PER_PAGE } from "../../config/index";
import Eventitem from "../../components/Eventitem";
import Pagination from "../../components/Pagination";


export default function Event({ events, page, total }) {

  const lastPage = Math.ceil(total / PER_PAGE)

  return (
    <Layout title="Events">

      <p>Upcoming DJ Events</p>
      {events.length === 0 && <h3>No events to Show</h3>}

      {events.map((evt) => (
        <Eventitem key={evt.id} evt={evt} />
      ))}

      
     <Pagination page={page} lastPage={lastPage} />

    </Layout>
  );
}

export async function getServerSideProps  ({query: {page = 1}}) {

  const start = +page === 1 ? 0 : (+page -1) * PER_PAGE;

  //Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json()

  //Fetch Events
  const eventRes = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`);
  const events = await eventRes.json();
  //console.log(events);
  return {
    props: { events, page: +page, total },
  };
}

