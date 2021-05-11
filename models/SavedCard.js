const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SavedCard extends Model {}
SavedCard.init(
{
    card_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'pokemon',
          key: 'id',
        },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'SavedCard',
  }

);

module.exports = SavedCard;
