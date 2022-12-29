const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const booksRouter = require("./routes/books");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const db = require("./models");
const Role = db.role;

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
mongoose.set("strictQuery", false);
db.mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/biblioteca", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use("/api/books", booksRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
