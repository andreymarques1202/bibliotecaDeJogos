import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setTitle(ev.target.value);

    setCover(ev.target.value);
  }

  return(
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <form>
        <div>
          <label htmlFor="title">Titulo: </label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="cover">Capa: </label>
          <input type="text" name="cover" id="cover"/>
        </div>
        <button type="submit">Adicionar à Biblioteca</button>
      </form>
    </div>
  )
}

export default App;