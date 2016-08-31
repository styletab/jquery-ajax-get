'use strict';

const app = require('../app.js');

const index = () => {
  return $.ajax({
    url: app.host + '/books',
    //^this is referencing the key host in the app.js file (http://localhost.3000)
    method: 'GET',

  });

};

const show = (bookId) => {
  return $.ajax({
    url: app.host + '/books/' + bookId,
    method: 'GET'
  }
);
};

module.exports = {
  index,
  show,
};
