//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://droidwap123:XEWlfy7xWGu7KrnP@cluster0.akqwm.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;