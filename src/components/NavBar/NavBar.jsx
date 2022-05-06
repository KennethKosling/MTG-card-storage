import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SignOut from "../SignOut/SignOut";

export default function NavBar({user, setUser}){
  return(
    <div className={styles.NavBar}>
      <Link to="/cards" className={styles.Link}><h1 className={styles.NavBarItem}>Cards</h1></Link>
      <h1 className={styles.NavBarUserName}>{user.username}</h1>
      {/* <Link to="/" className={styles.Link}><h1 className={styles.NavBarItem}>Sign Out</h1></Link> */}
      <SignOut user={user} setUser={setUser}/>
    </div>
  )
}