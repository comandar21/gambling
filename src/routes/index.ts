import { Router } from "express";

const router = Router();

router.get("/", (req: any, res: any) => {
  res.send("Healthy");
});

export default router;
