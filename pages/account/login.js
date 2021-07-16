import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { AuthContext } from "../../context/AuthContext";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/Authform.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(()=>  error && toast.error(error))

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout title="User Login Page">
      <div className={styles.auth}>
        <h1>
          <FaUser /> Login
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="login" className="btn" />
          </div>
        </form>

        <p>
          Don't have an account?{" "}
          <Link href="/account/register">click here for FREE register</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
