import express from "express";
import cors from "cors";
import router from "./routes";
import { open } from "./database";
import bodyParser from "body-parser";
import { listenToEvent } from "./controller/events";

const app = express();
// generateNFT()
open();
// addQueentraits()
// parse json request body
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

listenToEvent();

const APP_PORT = process.env.PORT || 4410;
app.listen(APP_PORT, () => console.log("http://localhost:" + APP_PORT));
