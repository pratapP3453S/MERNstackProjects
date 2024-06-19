import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Courses() {
    return (
        <>
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
                        list.map((item) => <Cards item={item} key={item.id} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Courses
