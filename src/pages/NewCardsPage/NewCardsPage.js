import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NavBar from "../../components/NavBar/NavBar"

export default function NewCardsPage({user, setUser}){
  return (
    <>
      <header>
        <NavBar user={user} setUser={setUser}/>
      </header>
      <main>
        <NewCardForm />
      </main>
      <footer>

      </footer>
    </>
  )
}