const mongoose = require("mongoose");

const ItemArquive = mongoose.Schema({
    item_name: {String, required: true},
    item_description: {String, required: true},
    item_date_creation: {Date, required: true}
});

module.exports = mongoose.model("Item", ItemArquive)
