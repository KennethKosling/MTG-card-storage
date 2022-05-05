import CardList from "../../components/CardList/CardList"
import NavBar from "../../components/NavBar/NavBar"

export default function CardsPage({user}){
  return (
    <>
      <header>
        <NavBar user={user}/>
      </header>
      <main>
        <CardList />
      </main>
      <footer>

      </footer>
    </>
  )
}