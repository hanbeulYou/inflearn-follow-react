import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../api/axios'
import './SearchPage.css'

export default function SearchPage() {

  const [searchResults, setSearchResults] = useState([])
  const SEARCH_BASE_URL = '/search/multi?include_adult=false&query='
  const IMAGE_BASE_URL= 'https://image.tmdb.org/t/p/w500'
  
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  // ?q= 뒷부분 가져오기
  const searchTerm = query.get("q")

  useEffect(() => {
    if(searchTerm) {
      fetchSearchMovie(searchTerm)
    }
  }, [searchTerm])

    const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(`${SEARCH_BASE_URL}${searchTerm}`)
      setSearchResults(request.data.results)
    } catch (error) {
      alert(`error\n\n${error}`)
    }
  }

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = IMAGE_BASE_URL + movie.backdrop_path
            return (
              <div className='movie'>
                <div className='movie__column-poster'>
                  <img
                    src={movieImageUrl}
                    alt='movie_image'
                    className='movie__poster'
                  />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : <section className='no-results'>
      <div className='no-results__text'>
        <p>
          찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
        </p>
      </div>
    </section>
  }

  return (
    renderSearchResults()
  )
}
