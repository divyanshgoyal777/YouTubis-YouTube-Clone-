import React from 'react';
import svg from "/src/assets/svg/movies.svg"

const movies = [
  {
    title: 'Oppenheimer',
    genre: 'Drama',
    year: 2023,
    imgSrc: 'https://i.ytimg.com/vi_webp/vO2N0LGvhWc/movieposter_en.webp',
  },
  {
    title: 'Aquaman and The Lost Kingdom',
    genre: 'Action & adventure',
    year: 2024,
    imgSrc: 'https://i.ytimg.com/vi_webp/-zPXY1ER-1w/movieposter_en.webp',
  },
  {
    title: 'Chennai Express',
    genre: 'Action & adventure',
    year: 2013,
    imgSrc: 'https://i.ytimg.com/vi_webp/PEvEdxAXFdE/movieposter_en.webp',
  },
  {
    title: 'Jawan',
    genre: 'Action & adventure',
    year: 2023,
    imgSrc: 'https://i.ytimg.com/vi_webp/YklvWrS7VzA/movieposter_en.webp',
  },
  {
    title: 'Piku',
    genre: 'Comedy',
    year: 2015,
    imgSrc: 'https://i.ytimg.com/vi/yYr8q0y5Jfg/movieposter.jpg',
  },
  {
    title: 'Veer-Zaara',
    genre: 'Indian cinema',
    year: 2004,
    imgSrc: 'https://i.ytimg.com/vi_webp/SvQd-Ra8MHo/movieposter_en.webp',
  },
];

const Movie = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 m-2 mb-6'>
        <img className='invert border rounded-full p-3 bg-green-400' width="70px" src={svg} alt="Movies" />
        <h2 className="text-4xl font-bold">Movies</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {movies.map((movie, index) => (
          <div key={index} className="flex flex-col items-start hover:bg-icon-color p-2 hover:cursor-pointer rounded-lg">
            <img src={movie.imgSrc} alt={movie.title} className="w-full h-auto rounded-lg mb-2" />
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <p className="text-sm text-[#aaa]">{movie.genre} • {movie.year}</p>
            <p className="mt-2 px-1 bg-icon-color text-[0.7rem] text-green-500 rounded">Buy or rent</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
