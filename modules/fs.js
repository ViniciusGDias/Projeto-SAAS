const fs = require("fs");
const path = require("path");

//criar uma pasta
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) throw err;
//   console.log("Pasta criada com sucesso!");
// });

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("Arquivo criado com sucesso!");
    //Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"),
      "\nHello Again!",
      (err) => {
        if (err) throw err;
        console.log("Conteúdo adicionado ao arquivo com sucesso!");
      }
    );
    //Ler arquivo
    fs.readFile(
      path.join(__dirname, "test", "test.txt"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        console.log("Conteúdo do arquivo:");
        console.log(data);
      }
    );
  }
);
