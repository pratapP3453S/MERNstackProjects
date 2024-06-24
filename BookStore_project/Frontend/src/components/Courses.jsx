import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'

function Courses() {
    
    const [Books, setBooks] = useState([]);
    useEffect(() => {
        const getBook = async() => {
            try {
                const res = await axios.get("http://localhost:4001/book")
                console.log(res.data)
                setBooks(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
    
    return (
        <>
        <Navbar />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center text-center justify-center'>
                    <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
                    <p className='mt-12 text-center'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni porro quos ipsam, eligendi nisi dignissimos maxime quod tenetur sed, numquam, harum provident temporibus eos animi enim nostrum molestias reprehenderit? Laboriosam quisquam similique deserunt ducimus facere nisi aut voluptatum harum nobis sed a quo, dignissimos, pariatur aspernatur impedit expedita. Nihil, velit? Officiis voluptas mollitia dolor quibusdam.
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover: bg-pink-700 duration-300">Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        Books.map((item) => <Cards item={item} key={item.id} />)
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Courses
