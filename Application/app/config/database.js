//object holding SQLPostgres Information
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Julio26", //todo change before pushing
    DB: "twitter",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };