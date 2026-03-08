import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from "lucide-react"
const Navbar = () => {
    return (
        <header className='bg-base-300 '>
            <div className='max-w-6xl mx-auto  p-4 h-18 items-center'>
                <div className='flex items-center justify-between '>
                    <h1 className='font-bold text-3xl font-mono tracking-tight text-green-700'>Thinkbook</h1>
                    <div className='flex items-center gap-4'>
                        <Link to={"/create"} className='btn btn-primary'>
                            <PlusIcon className='h-5 w-5' />
                            <span>new note</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
