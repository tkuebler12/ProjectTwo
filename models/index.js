const User = require('./User');
const Pokemon = require('./PokeCard');
const SavedCard = require('./SavedCard');

User.hasMany(SavedCard, {
  foreignKey: 'card_id',
  onDelete: 'CASCADE'
});

SavedCard.belongsTo(User, {
  foreignKey: 'user_id'
});




module.exports = { User, Pokemon };
