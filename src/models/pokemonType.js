const pokemonType = (sequelize, DataTypes) => {
  const PokemonType = sequelize.define('pokemonType', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  });
 
  PokemonType.associate = models => {
    PokemonType.belongsTo(models.Pokemon);
  };
 
  return PokemonType;
};
 
export default pokemonType;