const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}`);
});
