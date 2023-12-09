import React, { useState } from "react";

const App = () => {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = {id, title, cover};

    setGames(state => [...state, game])
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title, cover});
    setTitle("");
    setCover("");
  }

  return(
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titulo: </label>
          <input type="text" name="title" id="title" value={title} onChange={(element) => setTitle(element.target.value)}/>
        </div>
        <div>
          <label htmlFor="cover">Capa: </label>
          <input type="text" name="cover" id="cover" value={cover} onChange={(element) => setCover(element.target.value)}/>
        </div>
        <button type="submit">Adicionar à Biblioteca</button>
      </form>
    </div>
  )
}

export default App;