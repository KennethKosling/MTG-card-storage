import { logOut } from '../../utilities/users-service';

export default function SignOut({user, setUser}) {
  function handleSignOut(){
    logOut();
    setUser(null);
  }

  return (
    <div>
      <button onClick={handleSignOut}>LOG OUT</button>
    </div>
  )
}