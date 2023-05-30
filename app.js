const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const sequelize = require('./util/database');


const productRoutes = require('./routes/sellerpage');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); // Cors shd be given first later routes shd be used else it will restrict the routes
app.use(productRoutes);

sequelize.sync().then(result=>{
    // console.log(result);
    app.listen(4000);
    
}).catch(err=>{
    console.log(err);
})