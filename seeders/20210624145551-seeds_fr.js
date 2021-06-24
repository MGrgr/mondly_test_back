'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contents', [{
      lang : 'fr',
      title : 'title_fr',
      title_page : 'title page_fr',
      image: 'http://www.youloveit.ru/uploads/posts/2019-08/1565284946_red4.jpg',
      description : 'description_fr',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('contents'[{
      lang :'fr'
    }])
  }
};