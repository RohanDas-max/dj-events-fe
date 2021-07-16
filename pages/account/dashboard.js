import { parseCookie } from "../../helpers/index";
import { useRouter } from 'next/router'
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import styles from "../../styles/dashboard.module.css";
import DashboardEvent from "../../components/DashboardEvent";

export default function Dashboard({ events, token }) {
  const router = useRouter();


  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.reload();
      }
    }
  };
  return (
    <Layout title="Dashboard">
      <div className={styles.dash}>
        <h1>dashboard</h1>
        <h3>My Events</h3>
        {events.map((evt) => (
         <DashboardEvent  key={evt.id} evt={evt} handleDelete={handleDelete} />
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const events = await res.json();

  return {
    props: { events , token }
  };
}


