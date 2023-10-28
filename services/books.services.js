const { MongoClient } = require('mongodb');

class BookServices {
  uri = 'mongodb://localhost:27017';
  client = new MongoClient(this.uri);
  /**
   * Получаем документ для поиска
   * @param {string} collection название документа, в котором планируется поиск
   * @returns
   */
  async getDocument(collection) {
    return this.client.db('help_yourself').collection(collection);
  }
  async createConnection() {
    try {
      return await this.client.connect();
      console.log('Connected successfully to server');
    } catch {
      console.log(`Error connecting to the database: ${error}`);
    }
  }
  async generalСonnectionPattern(data, databaseAction) {
    await this.createConnection();
    try {
      const document = await this.getDocument('books');
      return await document[databaseAction](data);
      //return { test: 'Terika answer' };
    } catch (error) {
      console.log(
        `Ошибка подключения к базе данных при вставке данных: ${error}`
      );
    } finally {
      await this.client.close();
    }
  }
  async createBook(data) {
    return this.generalСonnectionPattern(data, 'insertOne');
  }
  async getBook(data) {
    return this.generalСonnectionPattern(data, 'findOne');
  }
}

module.exports = new BookServices();
