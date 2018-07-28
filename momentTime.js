var moment = require('moment');
var timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log (timeStamp);

var currentTimestamp = moment();
console.log(currentTimestamp.unix());

var newTimestamp = currentTimestamp.unix();
console.log(currentTimestamp.format('MMMM Do YYYY, h:mm:ss a'));
