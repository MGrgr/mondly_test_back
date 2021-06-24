module.exports = {
    HOST: "localhost",
    USER: "user",
    PASSWORD: "12348765",
    DB: "mondly",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };