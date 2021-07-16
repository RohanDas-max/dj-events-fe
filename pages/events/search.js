import  qs from "qs";
import {useRouter} from "next/router"
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import Eventitem from "../../components/Eventitem";


function SearchEvent({ events }) {
  const router = useRouter().query
  return (
    <Layout title="Search Results">
      <h1>Search Result for {router.term}</h1>
      {events.length === 0 && <h3>No events to Show</h3>}

      {events.map((evt) => (
        <Eventitem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps  ({query: {term}}) {

    const query  = qs.stringify({
        _where: {
            _or: [
                {name_contains: term},
                {performers_contains: term},
                {vanue_contains: term},
                {description_contains: term},
            ],
        },
    })
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();
  // console.log(events);
  return {
    props: { events },
  };
}

export default SearchEvent;
