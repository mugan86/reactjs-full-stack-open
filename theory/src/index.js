import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Estado del marcador izquierdo
  /*const [left, setLeft] = useState(0)
  // Estado del marcador derecho
  const [right, setRight] = useState(0)*/

  // Equivalente con propiedades en un objeto
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });
  /**
   * está prohibido en React mutar el state directamente, 
   * ya que puede provocar efectos secundarios inesperados. 
   * Es inmutable el proceso que debemos de usar
   * El cambio de estado siempre debe realizarse estableciendo 
   * el estado en un nuevo objeto. Si las propiedades del 
   * objeto de estado anterior no se modifican, 
   * simplemente deben copiarse, lo que se hace copiando 
   * esas propiedades en un nuevo objeto y estableciendo eso 
   * como el nuevo estado.
   */

  // Gestionar los clicks dde la izquierda
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
  }

  // Gestionar los clicks dde la derecha
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
  }

  return (
    <div>
      {clicks.left}&nbsp;&nbsp;
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      &nbsp;&nbsp;{clicks.right}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
