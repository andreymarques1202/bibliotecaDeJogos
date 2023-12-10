import React from "react";

const Game = ({title, cover, onRemove}) => {
    return(
        <div>
            <img src={cover} alt={title} />
            <div>
              <h2>{title}</h2>
              <button onClick={onRemove}>Remover</button>
            </div>
        </div>
    )
}

export default Game;