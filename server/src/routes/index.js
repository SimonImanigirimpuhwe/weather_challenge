import express from "express";
import weatherController from "../controller/weather.js";
import {asyncHandler} from "../middleware/asyncHandler.js";
import { validator } from "../validation/index.js";

const router = express.Router();


router.post("/weather", validator, asyncHandler(weatherController.getWeather));
router.get("/", weatherController.welcome)


export default router;
