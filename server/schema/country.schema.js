var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var CountrySchema = new Schema({
    userId    : ObjectId,
    continent     : String,
    flag      : String,
    title      : String,
    players		: [String],
	});


var CountrySchema = mongoose.model('CountryModel', CountrySchema);


module.exports = CountryModel;