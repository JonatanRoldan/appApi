const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://jony:123@clustertaller.96iwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(db => console.log("db is conected"))
.catch(err => console.log(err));