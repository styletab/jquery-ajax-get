'use strict';

const booksApi = require('./api.js');
const booksUi = require('./ui.js');

// booksApi.index().done().fail();
const onGetBooks = (event) => {
  event.preventDefault(); // <-- always include this when a function is fired by
  //an event
  let bookId = $("#book-id").val();

  if (bookId.length > 0) {
    booksApi.show(bookId)
    .done(booksUi.onBooksSuccess)
    .fail(booksUi.failure);
  //  console.log('Book id:' + bookId); << this was intiially checking if our if statment was
  // working but is not needed for final run.  
  }
  else {
      booksApi.index() //<-- use index bc we're looking for all of the books
      .done(booksUi.onBooksSuccess)
      .fail(booksUi.failure);
    }

};



module.exports = {
  onGetBooks,
};
