import express,{Request,Response} from 'express';
import{ getAllResult,
        getResultById,
        createResult,
        updateResult,
        deleteResult} from "../controllers/result.controller"


const router = express.Router();

//get all scan results
router.get("/results",getAllResult);

//get scan result by id
router.get("/results/id", getResultById);

//create scan results
router.post("/create-results",createResult);

//update scan results
router.put("/results/:id",updateResult);

//delete scan results
router.delete("/results/:id",deleteResult);




export {
    router
}