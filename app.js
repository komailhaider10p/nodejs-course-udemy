const express = require('express');
const app = express();
const rootDir = require("./utils/path");
const path = require('path');
const bodyParser = require('body-parser');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');
app.use(express.static(path.join(rootDir, "public")))
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminroutes);
app.use(shoproutes);
app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
const port = 3000;
app.listen(port);
console.log(`Server started listening at ${port}`);