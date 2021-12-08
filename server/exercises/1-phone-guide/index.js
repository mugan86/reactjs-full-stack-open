const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
const cors = require('cors');

app.use(express.json());


app.use(cors())
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

// Registramos todos los eventos que surgen dentro de la API almacenando en Morgan
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.use(requestLogger);

let persons = [
  {
    name: "Anartz Mugika",
    number: "617778616",
    id: 2,
  },
  {
    name: "Arto Hellas",
    number: "1819202222",
    id: 3,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

app.get("/api/info", (request, response) => {
  const info = `Phonebook has info for ${persons.length} people.`;
  const now = new Date();
  response.send(`<p>${info}</p><p>${now}</p>`);
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "You must add name and number because is required",
    });
  }

  const personSelect = persons.filter((person) => person.name === body.name);
  if (personSelect.length) {
    return response.status(400).json({
      error: "Name exist. Please try with other name.",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  response.json(person);
});
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
