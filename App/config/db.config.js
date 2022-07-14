module.exports = {
    HOST: "localhost",
    USER: "codetest",
    PASSWORD: "123",
    DB: "testdb",
    dialect: "codetest",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };