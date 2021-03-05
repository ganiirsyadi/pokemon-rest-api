import { v4 as uuidv4 } from "uuid";
import { Router } from "express";
import { sequelize } from "../models";
import Sequelize from "sequelize";
const router = Router();

// RETRIEVE
router.get("/", async (req, res) => {
  const op = Sequelize.Op;

  // Get the pokemons
  const pokemons = await req.context.models.Pokemon.findAll({
    limit: req.query.limit,
    include: [],
  });

  // Get the types
  const pokemonTypes = await req.context.models.PokemonType.findAll({
    where: {
      pokemonId: {
        [op.in]: [...pokemons].map((e) => e.id),
      },
    },
  });

  // response formatting
  const results = pokemons.map((e) => {
    return {
      id: e.id,
      number: e.number,
      name: e.name,
      types: pokemonTypes
        .filter((t) => t.pokemonId === e.id)
        .map((t) => t.type),
    };
  });
  return res.send(results);
});

// CREATE
router.post("/", async (req, res) => {
  // Add new Pokemon
  const pokemon = await req.context.models.Pokemon.create({
    id: req.body.id,
    number: req.body.number,
    name: req.body.name,
  });

  // Add types
  req.body.types.forEach((e) => {
    req.context.models.PokemonType.create({
      id: uuidv4(),
      pokemonId: req.body.id,
      type: e,
    });
  });

  return res.send({ message: "OK" });
});

// UPDATE
router.put("/:id", async (req, res) => {
  // Delete prev types
  req.context.models.PokemonType.destroy({
    where: {
      pokemonId: req.params.id,
    },
  });

  // Update attributes
  req.context.models.Pokemon.update(
    {
      number: req.body.number,
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  // Add new types
  req.body.types.forEach((e) => {
    req.context.models.PokemonType.create({
      id: uuidv4(),
      pokemonId: req.params.id,
      type: e,
    });
  });

  return res.send({ message: "OK" });
});

// DELETE
router.delete("/:id", async (req, res) => {
  req.context.models.Pokemon.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.send({ message: "OK" });
});

export default router;
