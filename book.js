import request from 'superagent';
import { Promise } from 'es6-promise';

export function getBooks() {

  return new Promise(function(resolve, reject) {
    request('http://localhost:3000/api/books').end((err, res) => {
      if (!err) {
        resolve(res.body);
      }
    });
  });
}
