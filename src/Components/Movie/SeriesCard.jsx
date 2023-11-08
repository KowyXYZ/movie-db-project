import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { fetchData, options } from '../../Utils/fetchData'

function SeriesCard() {

    const {ids} = useParams()
    const loader = useLoaderData()
    console.log(loader)
  return (
    <div className='flex justify-between mx-24 items-center  py-24'>


       

        <div className='flex flex-col gap-10'>
            <p className='text-[44px] font-black'>{loader.original_title}</p> 
            <img className='w-1/2 rounded-2xl' src={ `https://image.tmdb.org/t/p/original/${loader.poster_path}`} alt={loader?.poster_path === '' ? 'poster' : 'Unavailable'} />
        </div>

        <div className='flex flex-col gap-4 justify-start'>
            <p className='w-[600px] text-[18px]'>Overview: {loader.overview}</p>
            <p>Status: {loader.status}</p>
            <p>Release Date: {loader.release_date}</p>
            <p>Budget: {loader.budget}$</p>
            <div className='flex flex-col items-start justify-center'>
                <p className='font-semibold text-[18px] mt-12'>Production Companies:</p>

                <div className='flex flex-wrap justify-start items-center gap-8 bg-[gray] p-4 rounded-2xl '>
                    {loader?.production_companies?.map((el, index) => {
                    return(
                        <div className='flex flex-col justify-center items-center '>
                            <img className=' w-24 h-24 object-contain' src={ `https://image.tmdb.org/t/p/original/${el?.logo_path}`} alt={el?.logo_path === '' ? 'logo' : 'Unavailable'} />
                            <p>{el?.name}</p>
                        </div>
                    )
                      })}
                </div>


                </div>
            <p className='underline'>Website: <a href={loader.homepage}>Click me</a></p>
        </div>
     

    </div>
  )
}

export const seriesCardLoader = async({params}) => {
    const {ids} = params
    let data = await fetchData(`https://api.themoviedb.org/3/tv/${ids}`, options)
    console.log(data)
    return data
}

export default SeriesCard
