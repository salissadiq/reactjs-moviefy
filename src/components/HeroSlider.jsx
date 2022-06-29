import React, {useEffect} from 'react'

import apiConfig from '../api/apiConfig'
import tmdbApi, {category, movieType} from '../api/tmdbApi'
export default function HeroSlider() {
  useEffect(()=>{
    const getMovies = async() => {
      const params = {page: 1}
      try{
        const response = await tmdbApi.getMovieList(movieType.popular, {params})
        console.log(response)

      } catch(err) {
        console.log(err)
      }
    }

    getMovies()
  },[])
  return (
    <div className="w-screen text-white pl-14 bg-primary">
        <img src="card-img.png" alt="bg" />
    </div>
  )
}
