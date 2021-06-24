'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('content', [{
      lang : 'en',
      title : 'title',
      title_page : 'title page',
      image: 'http://www.youloveit.ru/uploads/posts/2019-08/1565284946_red4.jpg',
      description : 'description',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('content'[{
      lang :'en'
    }])
  }
};
