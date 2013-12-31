// The Record model
 
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var recordSchema = new Schema({
    item:  String,
    postdate: {type: Date, default: Date.now}
});
 
module.exports = mongoose.model('Record', recordSchema);
