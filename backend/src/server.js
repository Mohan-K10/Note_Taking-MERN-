import express from "express"
import noteroutes from "./routes/noteroutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import ratelimiter from "./middleware/ratelimiter.js"
import cors from "cors"

const app = express()

dotenv.config();
app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json())
app.use(ratelimiter)

// console.log(process.env.MONGO_URI)

app.use("/api/notes", noteroutes)
const port = 5001

connectDB().then(() => {
    app.listen(port, () => {
        console.log("this is port  listening", port)
    })
})
// app.get("/api/notes",(req,res) => {
//     res.send("there are 20 notes")
// })

// app.post("/api/notes" ,(req,res) => {
//     res.status(201).json({message:"note created successfully"})
// })

// app.put("/api/notes/:id" , (req,res) => {
//     app.status(200).json({message:"note is updated successfully"})
// })

// app.delete("/api/notes/:id", (req,res)=> {
//     res.status(200).json({message: "note is deleted successfully"})
// })


// mongodb+srv://mohank18m_db_user:Nx2s9a4B7FzSsMX8@cluster0.uhyovr9.mongodb.net/?appName=Cluster0