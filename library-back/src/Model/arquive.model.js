const mongoose = require("mongoose");

const ItemArquive = mongoose.Schema({
    item_name: {String},
    item_description: {String},
    item_date_creation: {Date}
});

module.exports = mongoose.model("Item", ItemArquive)
