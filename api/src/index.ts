import express,{Request,Response} from 'express';
import {router} from "./routes/result.routes";
import connects from "./config/result.database";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();


// Use middleware for parsing request bodies and enabling CORS
app.use(bodyParser.json());
app.use(cors());

app.use('/',router);

connects();

//Start the server
const PORT = 4011;
app.listen(PORT,():void=>{
    console.log(`Server is running on ${PORT}`);
});

export {
    app
} 