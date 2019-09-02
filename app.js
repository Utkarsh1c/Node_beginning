// const http = require('http');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use((req, res, next) => {
//     console.log("In the middleware!");
//     next();
// });

app.use(express.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);



app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);