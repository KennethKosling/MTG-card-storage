import { useEffect, useState } from "react"
import * as cardAPI from "../../utilities/cards-api"

export default function CardList({user}){

  const [data, setData] = useState([])
  
  async function fetchData(){
    console.log(`User ID is ${user._id}`)
    const response = await cardAPI.getById(user._id)
    setData(response)
  } 

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      
    </>  
  )
}