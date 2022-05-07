import { useState } from "react";
import { createCard } from "../../utilities/cards-api";
import { useNavigate } from "react-router-dom";

export default function NewCardForm({setCard}){
  const [cardData, setCardData] = useState({
    name: '',
    mana: '',
    type: '',
    desc: '',
    abil: ''
  });

  const [error, setError] = useState('');
  const Navigate = useNavigate()
  
  async function handleChange(evt){
    setCardData({...cardData, [evt.target.name]: evt.target.value});
    setError('');
  };

  async function handleSubmit(evt){
    evt.preventDefault();
    try {
      const data = {...cardData};
      const card = await createCard(data);
      setCard(card);
      Navigate('/cards')
    } catch {
      setError('Could Not Create Card - Try Again');
    }
  };
  
  return (
    <div>
      <div className="container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Card Name</label>
          <input type="text" name="name" value={cardData.name} onChange={handleChange} required />
          <label>Mana</label>
          <input type="text" name="mana" value={cardData.mana} onChange={handleChange} required />
          <label>Card Type</label>
          <input type="text" name="type" value={cardData.type} onChange={handleChange} required />
          <label>Card Description</label>
          <input type="text" name="desc" value={cardData.desc} onChange={handleChange} />
          <label>Card Abilities</label>
          <input type="text" name="abil" value={cardData.abil} onChange={handleChange} />
          <button type="submit">Create Card</button>
        </form>
      </div>
      <p className="error">&nbsp;{error}</p>
    </div>
  );
}