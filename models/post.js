const mongoose = require('mongoose')

const url = "mongodb+srv://fullstack:Ra123456@cluster0.4d8tu.mongodb.net/crud?retryWrites=true&w=majority"
console.log("url ", url);
mongoose.connect(url, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true
})
.then(res => {
    console.log("connected to mongo db");
})
.catch((error) => {
    console.log("error connecting to MongoDB", console.log(error.message));
})

const PostSchema = new mongoose.Schema({
    title : {
        type: String,
        minlength: 3,
        required: true,
        trim: true
    },
    description : {
        type: String,
        minlength: 10,
        trim: true
    }
})

module.exports = mongoose.model('Post', PostSchema)


