import Sequelize from "sequelize";
import pokemon from "./pokemon";
import pokemonType from "./pokemonType"

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
});

const models = {
  Pokemon: pokemon(sequelize, Sequelize.DataTypes),
  PokemonType: pokemonType(sequelize, Sequelize.DataTypes)
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
