const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@barbearia.zcmy6la.mongodb.net/?retryWrites=true&w=majority&appName=Barbearia`
    );
    console.log("Conectado ao banco de dados com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados: ", error);
  }
};

module.exports = connectToDatabase;
