const Total = ({ parts }) => {
  // Obtener array de las claves y con eso, ir recorriendo
  // para seleccionar la propiedad "exercises" e ir acumulando
  const result = Object.keys(parts).reduce((total, key) => {
    console.log(total, parts[key].exercises);
    return total + parts[key].exercises;
  }, 0 /*Valor inicial*/);
  return <div><strong>Total of {result} exercises</strong></div>;
};

export default Total;
