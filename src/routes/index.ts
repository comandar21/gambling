import { Router } from "express";
import sendTxn from "src/controller/relayer";

const router = Router();

router.get("/", (req: any, res: any) => {
  res.send("Healthy");
});

router.post("/sendTxn", (req: any, res: any) => {
  sendTxn(req, res)
})

export default router;
