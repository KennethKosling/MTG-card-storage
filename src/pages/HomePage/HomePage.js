import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";

export default function HomePage({setUser}){
  const [showLogIn, setShowLogIn] = useState(true)
  
  return(
    <main>
      <div>
        <h3 onClick={() => setShowLogIn(!showLogIn)}>{showLogIn ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogIn ? <LogInForm setUser={setUser}/> : <SignUpForm setUser={setUser}/>}
    </main>
  )
}