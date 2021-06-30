import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import Eventitem from "../../components/Eventitem";
function Event({ events }) {

  return (
    <Layout title="Dj Pintu 7992773">
      <p>Upcoming DJ Events</p>
      {events.length === 0 && <h3>No events to Show</h3>}

    {events.map((evt)=>(
      <Eventitem key={evt.id} evt={evt}/>
    ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log(events);
  return {
    props: { events: events },
    revalidate: 1
  };
}

export default Event;
