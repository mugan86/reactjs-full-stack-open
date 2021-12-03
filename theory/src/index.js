import React, { useState } from "react";
import ReactDOM from "react-dom";

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)


const App = () => {
  // Los estados useState NUNCA DESDE un ciclo, 
  // condicional o función que defina un componente
  // Estado del marcador izquierdo
  // LO QUE NO HAY QUE HACER CON EJEMPLOS:
  // https://fullstackopen.com/es/part1/un_estado_mas_complejo_depurando_aplicaciones_react#reglas-de-los-hooks
  const [left, setLeft] = useState(0);
  // Estado del marcador derecho
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
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


  return (
    <div>
      {left}&nbsp;&nbsp;
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={handleRightClick} text="Right"/>
      &nbsp;&nbsp;{right}
      <History allClicks={allClicks} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
