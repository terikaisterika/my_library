const BookServices = require('../services/books.services');
const checkObjectHelpers = require('../helpers/checkObjectHelpers');
const valuesHelpers = require('../helpers/checkValuesHelpers');
const mongo = require('mongodb');
class BookController {
  async createBook(req, res) {
    const presenceEmptyValuesOrNull = checkObjectHelpers.checkEmptyObj(
      req.body
    );
    if (presenceEmptyValuesOrNull.length > 0) {
      return res.status(200).send(presenceEmptyValuesOrNull);
    } else {
      await BookServices.createBook(req.body).then((result) => {
        return res.send(result);
      });
    }
  }

  async getBook(req, res) {
    console.log('REq.query', req.query);
    const id = req.query.id;
    if (valuesHelpers.isEmptyOrNullValue(id)) {
      return res
        .status(422)
        .send(`id равно null или пустой строке. Текущее значение id: ${id}`);
    } else {
      const data = { _id: new mongo.ObjectId(id) };
      await BookServices.getBook(data).then((result) => {
        return res.status(200).send(result);
      });
    }
  }
}
module.exports = new BookController();
