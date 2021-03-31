var mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    product: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: false,
    },
});
const schema = mongoose.model("schema", Schema);
module.exports = schema;