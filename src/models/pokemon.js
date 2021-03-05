const pokemon = (sequelize, DataTypes) => {
  const defaultConstraint = {
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  };

  const Pokemon = sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    number: {
      type: DataTypes.STRING,
      ...defaultConstraint,
    },
    name: {
      type: DataTypes.STRING,
      ...defaultConstraint,
    },
  });

  Pokemon.associate = models => {
    Pokemon.hasMany(models.PokemonType, { onDelete: "CASCADE" });
  };

  return Pokemon;
};

export default pokemon;
