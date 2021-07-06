const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{
    useNewUrlParser: true,
    useUnifiesTopology: true,
    useCreateIndex:true,
    useFindAndModify: false,
});




app.use(require("./routes/api.js"))
app.use(require("./routes/html_routes.js"))

app.listen(PORT, () =>{
    console.log(`App Listening pn port ${PORT}`);
});
