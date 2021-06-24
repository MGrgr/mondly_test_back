module.exports = (sequelize, Sequelize) => {
    const Mondly = sequelize.define("contents", {
      lang: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      title_page: {
        type: Sequelize.STRING
      },
      paragraph: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });

    return Mondly;
  };