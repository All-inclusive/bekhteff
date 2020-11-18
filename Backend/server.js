const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.static(""));
// Routes 
app.use("/clients",require('./Routes/ClientRoute.js'))
app.use("/companys",require('./Routes/CompanyRoute.js'))
app.use("/feedbacks",require('./Routes/FeedbackRoute.js'))
app.use("/livraisons",require('./Routes/LivraisonRoute.js'))
app.use("/messages",require('./Routes/MessageRoute.js'))
app.use("/products",require('./Routes/ProductRoute.js'))

// Server listening
const port = 5000;
app.listen(port, () => {
  console.log(`listening at port at http://localhost:${port}`);
});