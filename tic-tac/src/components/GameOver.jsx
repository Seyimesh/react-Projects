import React from "react";

export function GameOver({ winner, restartGame }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a Draw</p>}
      <p>
        <button onClick={restartGame}>Rematch!</button>
      </p>
    </div>
  );
}
