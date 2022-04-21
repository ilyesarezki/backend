const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();  
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/',cors(), async (req, res, next) => {
    res.send("this is working")
});

app.post("/post_Name", async (req, res) => {
     (Name) = req.body.Name;
    console.log(Name);
});

//initialize DB
require('./initDB')();

const ProductRoute = require('./Routes/Product.route');
app.use('/products', ProductRoute);

//404 handler and pass to error handler
app.use((req, res, next) => {
    next(createError(404, 'Not found'));
    });

//error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});