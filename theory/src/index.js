import React from "react";
import ReactDOM from "react-dom";

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href="https://github.com/mugan86">Anartz Mugika Ledo</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Anartz" age={35}/>
      <Footer />
    </div>
  );
};

const AppCounter = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

let counter = 1

const refresh = () => {
  ReactDOM.render(<AppCounter counter={counter} />, 
  document.getElementById('root'))
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);*/
