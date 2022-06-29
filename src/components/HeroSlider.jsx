import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import apiConfig from '../api/apiConfig'
import tmdbApi, {category, movieType} from '../api/tmdbApi'
export default function HeroSlider() {
  const [movieItems, setMovieItems] = useState([])
  useEffect(()=>{
    const getMovies = async() => {
      const params = {page: 1}
      try{
        const response = await tmdbApi.getMovieList(movieType.popular, {params})
        setMovieItems(response.results.slice(1, 4))
        console.log(movieItems)
      } catch(err) {
        console.log(err)
      }
    }
    getMovies()
  },[])
  SwiperCore.use([Autoplay]);
  return (
    <div className="w-screen text-white pl-14 ">
        <Swiper
        modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay: 3000}}
    >
      
      {
        movieItems.map(movie =>(
          <SwiperSlide>
            <HeroSliderItem item={movie} />
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  )
}

const HeroSliderItem = ({item}) => {
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div className="lg:bg-cover bg-contain w-[100vw] h-[90vh] "  style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
      <div className="absolute w-1/2 pt-64 pl-40">
        <h2 className="font-bold text-5xl py-5">{item.title}</h2>
        <p className="text-bold">{item.overview}</p>

        <div className="flex gap-10 py-10">
          <button className="rounded-full border-2 border-primary px-10 py-3 font-bold">Watch now</button>
          <button className="rounded-full  focus:outline-none bg-primary px-10 py-3 font-bold">Watch trailer</button>
        </div>
      </div>
     
    </div>
  )
}
