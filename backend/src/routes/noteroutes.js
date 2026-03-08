import express from "express"
import { createnotes, deletenotes, getallnotes, updatenotes,getnotesbyId } from "../controllers/notecontrollers.js"

const routes = express.Router()

routes.get("/", getallnotes)
routes.get("/:id", getnotesbyId)
routes.post("/", createnotes)
routes.put("/:id", updatenotes)
routes.delete("/:id", deletenotes)



// routes.get("/",(req,res) => {
//     res.send("fetched notes")
// })

// routes.post("/" ,(req,res) => {
//     res.status(201).json({message:"note created successfully"})
// })

// routes.put("/:id" , (req,res) => {
//     app.status(200).json({message:"note is updated successfully"})
// })

// routes.delete("/:id", (req,res)=> {
//     res.status(200).json({message: "note is deleted successfully"})
// })



export default routes

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