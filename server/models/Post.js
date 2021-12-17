const mongoose = require("mongoose");

const Schema = mongoose.Schema;


let postSchema = new Schema ({
    postID: {type: Number},
    postbody: {type: String},

    comments: [ {commentbody: {type: String}} ]
});

module.exports = mongoose.model("posts", postSchema);