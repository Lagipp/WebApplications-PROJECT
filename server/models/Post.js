const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let postSchema = new Schema ({
    username: {type: String},
    postbody: {type: String},

    comments: [{ username: {type: String}, 
                 commentbody: {type: String}
                }]
});

module.exports = mongoose.model("posts", postSchema);