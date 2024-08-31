const express = require("express");
const connectDB = require("./db/mongoose");
const optionsRouter = require("./router/options");
const menteeRoutes = require("./router/mentee");
const app = express();
const cors = require("cors");
const PORT = 3000;

// Connect Database
connectDB();

app.use(express.json());
app.use(cors());
// Define Routes
app.use("/options", optionsRouter);

app.get("/hello", (req, res) => {
  res.send("Hello");
});
app.use("/api/mentee", menteeRoutes);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
