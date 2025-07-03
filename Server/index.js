
const express=require("express")
const cors=require("cors")
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");


app.use(cors());
app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('',
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" }).then(()=>console.log("Database connected"));
app.listen(3000, () => console.log('Server running on port 3000'));
