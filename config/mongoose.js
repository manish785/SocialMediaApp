




const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://manish:manish123@cluster0.3lvtf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
, { useNewUrlParser: true , useUnifiedTopology: true}, function(error, result) {
    if(error) {
        console.log(error);
        throw new Error('Could not connect to the database.');
    } 
    console.log('successfully connected to database.')
});
