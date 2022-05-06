import CardList from "../../components/CardList/CardList"
import NavBar from "../../components/NavBar/NavBar"

export default function CardsPage({user, setUser}){
  return (
    <>
      <header>
        <NavBar user={user} setUser={setUser}/>
      </header>
      <main>
        <CardList />
      </main>
      <footer>

      </footer>
    </>
  )
}