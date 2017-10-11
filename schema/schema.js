var mongooseSchema = require('mongoose');

var Schema = mongooseSchema.Schema;

var userSchema = new Schema({
    dailytask: String
})

var User = mongooseSchema.model('wunderlisttask', userSchema);

module.exports = User;