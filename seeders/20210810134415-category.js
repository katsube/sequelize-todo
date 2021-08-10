'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {name: '仕事'},
      {name: 'プライベート'},
      {name: '町内会'}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {truncate:true});
  }
};
