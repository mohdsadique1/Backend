const { model, Schema,  } = require(' ../connection');

const mySchema = new Schema({
    name: String,
    email: {type: String, unique: true },
    password: { type: String, reuired: true },
    createAt: { type: Date, default: Date.now }
});

module.exports = model( 'user', mySchema );