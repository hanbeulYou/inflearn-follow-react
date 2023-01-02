import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "../../api/axios"

export default function DetailPage() {

  const { movieId } = useParams()
  const [movie, setMovie] = useState({})
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`)
      setMovie(request.data)
    }
    fetchData()
  }, [movieId])


  if(!movie) return <div>...loading</div>

  return (
    <section>
      <img
        className='modal__poster-img'
        src={`${IMG_BASE_URL}${movie.backdrop_path}`}
        alt='poster'
      />
    </section>
  )
}
