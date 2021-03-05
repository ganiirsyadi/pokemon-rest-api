import "dotenv/config";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import models, { sequelize } from "./models";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use("/api", routes.pokemon);

const eraseDatabaseOnSync = true;

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
  });
});