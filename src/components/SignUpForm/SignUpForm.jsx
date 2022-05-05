import { useState } from "react";
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({setUser}){
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    confirm: '',
  });

  const [error, setError] = useState('');
  
  async function handleChange(evt){
    setUserData({...userData, [evt.target.name]: evt.target.value});
    setError('');
  };

  async function handleSubmit(evt){
    evt.preventDefault();
    try {
      const data = {...userData};
      delete data.confirm;
      const user = await signUp(data);
      setUser(user);
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  };
  
  const disable = userData.password !== userData.confirm;
  
  return (
    <div>
      <div className="container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={userData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error">&nbsp;{error}</p>
    </div>
  );
}