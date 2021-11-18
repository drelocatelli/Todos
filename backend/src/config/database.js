const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(`mongodb://localhost/${process.env.DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});