const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const booksRouter = require("./routes/books");
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
  },
  (err) => {
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", booksRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
