import Note from "../models/Note.js"

export async function getallnotes(req,res)  {
    // res.status(200).send("fetched notes")
    try {
        const notes = await Note.find().sort({createdAt:-1}) //sort the data in desc order(latest to old data)
        res.status(200).json(notes)

    } catch (error) {
        console.error("error in getallnodes side",error)
        res.status(500).json({message:"internal server error"})
    }
}

    export async function getnotesbyId(req,res) {
        try {
            const findnote = await Note.findById(req.params.id)
        if(!findnote) return res.status(404).json({message:"note not found"})
        res.status(200).json(findnote)
    } catch (error) {
        console.error("error in getnotesbyId side",error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function createnotes(req,res) {
    // res.status(201).json({message:"Note created successfully"})
    try {
        const {title,content} = req.body;
        const newnote = new Note({title,content});
        const savenote =  await newnote.save()
        res.status(201).json(savenote)
    } catch (error) {
        console.error("error in createnotes side",error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function updatenotes(req,res) {
    // res.status(200).json({message:"note updated successfully"})
    try {
        const {title,content} = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updateNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json(updateNote)

    } catch (error) {
        console.error("error in updatenotes side",error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function deletenotes(req,res)  {
    // res.status(200).json({message:"post deleted successfully"})
    try {
        const deletenote = await Note.findByIdAndDelete(req.params.id)
        if(!deletenote) return res.status(404).json({message:"note not found"})
            res.status(200).json({message:"note deleted successfully"})
    } catch (error) {
        console.error("error in deletenodes side",error)
        res.status(500).json({message:"internal server error"})
    }
}