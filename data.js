import request from 'superagent';
import { Promise } from 'es6-promise';

const user = {
  id: 1,
  name: 'Jack'
}

export function getBooks() {

  return new Promise(function(resolve, reject) {
    request('http://localhost:3000/api/books').end((err, res) => {
      if (!err) {
        resolve(res.body);
      }
    });
  });
}

export function getUser() {

  return new Promise(function(resolve, reject) {
    resolve(user);
  });
}

