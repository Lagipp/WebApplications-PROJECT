const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    OGpostID: {type: Number},
    commentbody: {type: String}
});

module.exports = mongoose.model("comments", commentSchema);