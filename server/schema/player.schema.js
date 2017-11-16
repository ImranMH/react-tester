var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var PlayerSchema = new Schema({
    id    : ObjectId,
    avater     : String,
    position      : String,
    age      : Number,
    club		 : String,
    jersey		: Number,
    counrtyID	: ObjectId,
    country		: String,
    name		: String,
	});


var PlayerSchema = mongoose.model('PlayerModel', PlayerSchema);


module.exports = PlayerModel;