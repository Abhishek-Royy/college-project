require("dotenv").config(); // This is very important to execute the .env file in our code.
const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./router/auth");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error.middleware");
const contactRoute = require("./router/contact.router");

const PORT = process.env.PORT || 8000;

// Use Cors Policy..
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,UPDATE,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

// postman middleware to get the json format data.
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

// Pass the errorMiddleware Here..
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.status(200).send("Wellcome to Main Home Page..");
});

connectDb().then(() => {
  // .then is a promise / we use it beacuse if the database is connected then, the server is run , else it is not run..
  app.listen(PORT, () => {
    console.log(`Connect with: http://localhost:${PORT}`);
  });
});
