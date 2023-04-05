import express from "express";	
import cors from "cors";
import { OAuth2Client } from "google-auth-library";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const client = new OAuth2Client("402533009389-le2sa5t4pt6988nl5i1gctqge1fof7rh.apps.googleusercontent.com");

app.post('/api/google-login', async (req, res) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
        })
    
        console.log(ticket.getPayload()); // log ticket payload
        res.status(200).json(ticket.getPayload())
    } catch (error) {
        console.log(error); // log error
        res.status(401).json(error)
    }
})

app.listen(4001, () => {
    console.log("listening on port 4001");
})
