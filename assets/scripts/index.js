'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// Give me access to this file using 'require'
const bookEvents = require('./books/events');

// On document ready - (when the browser is finished loading EVERYTHING and
// the 'site' is fully loaded)

$(() => {
  $("#book-request").on("submit", bookEvents.onGetBooks);
});
