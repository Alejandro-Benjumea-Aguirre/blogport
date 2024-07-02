require('dotenv').config()

const mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect();
  }

  async _connect() {
    try {
      const dbUri = process.env.PORT_URL;
      await mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database connection successful');
    } catch (error) {
      console.error('Database connection error:', error);
    }
  }

  async close() {
    try {
      await mongoose.connection.close();
      console.log('Database connection closed');
    } catch (error) {
      console.error('Error closing the database connection:', error);
    }
  }
}

module.exports = new Database();
