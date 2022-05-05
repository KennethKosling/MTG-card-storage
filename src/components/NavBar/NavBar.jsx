import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"

export default function NavBar({user}){
  return(
    <div className={styles.NavBar}>
      <Link to="/cards" className={styles.Link}><h1 className={styles.NavBarItem}>Cards</h1></Link>
      <h1 className={styles.NavBarUserName}>{user.username}</h1>
      <Link to="/" className={styles.Link}><h1 className={styles.NavBarItem}>Sign Out</h1></Link>
    </div>
  )
}