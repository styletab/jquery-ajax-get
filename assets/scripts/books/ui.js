'use strict';

const onBooksSuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

// need to iterate over the books array to grab the bookId and return it on the page


module.exports = {
  onBooksSuccess,
  failure,
};
