import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import Link from "next/link";
import Search from "./Search";
import styles from "../styles/header.module.css";

export default function Header(){
  const { user, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>DJ Events</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/events/add">
                  <a>Add Events</a>
                </Link>
              </li>
               <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button className="btn-icon btn-secondary" onClick={() => logout()}>
                  <FaSignOutAlt /> logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    {" "}
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};