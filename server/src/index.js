import express from "express";
import  morgan from "morgan";
import { config } from "dotenv";
import cors from "cors";

import wRoutes from "./routes/index.js";

config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.use("/api", wRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));