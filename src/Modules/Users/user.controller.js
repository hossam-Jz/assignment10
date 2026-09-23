import { Router } from "express";
import { successRespones } from "../../Utils/respones/success.respones.js";

const router = Router();

router.get("/",(req,res)=>{
    successRespones({res,message:"welcom from user router"})
})

export default router;