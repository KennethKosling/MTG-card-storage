import { useEffect } from "react"
import sendRequest from "../../utilities/send-request"

export default function CardList({user}){
  
  async function fetchData(){
    const response = await sendRequest(`http://localhost:3001/cards/${user._id}`)
  } 

  useEffect(() => {
    fetchData()
  }, [])

  return user.cards
}