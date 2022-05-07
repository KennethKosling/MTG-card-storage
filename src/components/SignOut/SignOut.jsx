import styles from './SignOut.module.css';
import { logOut } from '../../utilities/users-service';

export default function SignOut({setUser}) {
  function handleSignOut(){
    logOut();
    setUser(null);
  }

  return (
    <div className={styles.SignOut}>
      <button className={styles.button} onClick={handleSignOut}><h1>Sign Out</h1></button>
    </div>
  )
}