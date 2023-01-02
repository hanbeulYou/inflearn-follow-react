import React, { useEffect, useState } from 'react'
import { useFetcher, useLocation } from 'react-router-dom'
import axios from '../../api/axios'

export default function SearchPage() {

  const [searchResults, setSearchResults] = useState([])
  const SEARCH_BASE_URL = '/search/multi?include_adult=false&query='
  
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

  
  console.log(searchTerm)

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(`${SEARCH_BASE_URL}${searchTerm}`)
    } catch (error) {
      alert(`error\n\n${error}`)
    }
  }


  return (
    <div>SearchPage</div>
  )
}
