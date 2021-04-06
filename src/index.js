const express = require("express");
const connectDB = require("../src/db/connect");
const cors = require("cors");

const main = async() => {
    const app = express();
    const port = process.env.PORT || "4000";
    connectDB();
    app.use(cors({}));
    app.use(express.json({ extended: false }));
    app.listen(port, () => {
        console.log("Server Running at port", port);
      });
}

main()