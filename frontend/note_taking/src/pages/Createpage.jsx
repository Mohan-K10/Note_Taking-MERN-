import { ArrowLeftIcon, PlusIcon } from 'lucide-react'
import api from '../lib/axios'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import toast from 'react-hot-toast'
const Createpage = () => {
  const [title, settitle] = useState("")
  const [content, setcontent] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault()
    if(!title .trim() || !content.trim()) {
      toast.error("All fields are required")
      return
    }
    setLoading(true)
    try {
      await api.post("/notes",{title,content})
      navigate("/")
      toast.success("Note created successfully")
    } catch (error) {
      toast.error("failed to create note")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' /> Back to Notes
          </Link>


          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handlesubmit}>
                <div className='flex flex-col mb-4'>
                    <label className="label mb-1">
                     Title
                    </label>
                    <input type="text"
                        placeholder='Note Title'
                        className='input input-bordered w-full'
                        value={title}
                        onChange={(e)=> settitle(e.target.value)}
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label className="label mb-1">
                     Content
                    </label>
                    <textarea type="text"
                        placeholder='Write your note here..'
                        className='textarea textarea-bordered h-32 w-full'
                        value={content}
                        onChange={(e)=> setcontent(e.target.value)}
                    />
                </div>

                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "...loading" :<><PlusIcon/>Create Note</>}
                    </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Createpage
