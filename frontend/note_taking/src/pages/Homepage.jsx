import React from 'react'
import Navbar from '../components/Navbar'
import RatelimiterUI from '../components/RatelimiterUI'
import { useState ,useEffect } from 'react'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'

const Homepage = () => {
  const [isratelimited, setisratelimited] = useState(true)
  const [notes, setnotes] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchnotes = async () => {
      try {
        const res = await api.get("/notes")
        console.log(res.data)
        setnotes(res.data)
        setisratelimited(false)
        
      } catch (error) {
        console.log("error fetching notes") 
        if(error.response?.status === 429) {
          setisratelimited(true)
        } else {
          toast.error("failed to load notes")
        }
      } finally {
        setloading(false)
      }
    }
    fetchnotes()
    
  }, [])
  
  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isratelimited && <RatelimiterUI/>}
      <div className='mx-auto max-w-7xl p-4 mt-6'>

      {loading && <div className='text-center py-10'>loading...</div>}
      {notes.length === 0 && !isratelimited  &&  <NotesNotFound/>}

      {notes.length>0 &&!isratelimited && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note) => (
            <NoteCard key={note._id} note= {note} setnotes={setnotes} />
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

export default Homepage
