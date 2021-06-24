'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contents', [{
      lang : 'ro',
      title : 'title_ro',
      title_page : 'title page_ro',
      image: 'http://www.youloveit.ru/uploads/posts/2019-08/1565284946_red4.jpg',
      description : 'description_ro',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('contents'[{
      lang :'ro'
    }])
  }
};
