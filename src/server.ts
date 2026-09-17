import "dotenv/config";
import app from "./app.js";
import database from "./config/database.js";

const PORT = process.env.PORT || 3001;

async function startServer() {
  await database.connect();
  
  app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
  });
}

startServer();
