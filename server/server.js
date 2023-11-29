const express = require ('express'); // IMPORT EXPRESS
const app = express(); // CREATE AN INSTANCE OF EXPRESS
const port = 8000; // SET THE PORT TO 8000


require("./config/mongoose.config"); // ESTABLISH CONNECTION TO DB

app.use(express.json(), express.urlencoded({extended: true}));

const MovieRoutes = require("./routes/movie.routes");
MovieRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`)); // TO LISTEN TO PORT 8000
