import React from 'react';
import trendingsvg from "/src/assets/svg/trending.svg"

const Trending = () => {
    const movies = [
        {
            title: 'Panchayat Season 3 - Official Trailer',
            description: 'Prime Video India Presents Panchayat Season 3 Official Trailer Starring Jitendra Kumar, Neena Gupta, Raghubir Yadav, Faisal Malik, Chandan Roy, Sanvikaa Produced by Arunabh Kumar Directed by...',
            views: '9.3M views',
            time: '9 days ago',
            duration: '2:35',
            thumbnail: 'https://i.ytimg.com/vi/9N3cFoLFjvw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAv8VU-9u7wHv5DkDx-uGwk-mkKVA',
            source: 'Prime Video India',
            date: 'May 28',
        },
        {
            title: 'Chandu Champion | Official Trailer',
            description: 'This is an unbelievable tale of a man who faced one adversary after another with an undying spirit. His unwavering zeal and never-give-up attitude led to create history. This is the story of...',
            views: '12M views',
            time: '5 days ago',
            duration: '3:16',
            thumbnail: 'https://i.ytimg.com/vi/IHQQK_Wn5DM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAG_D-zpmMs-Ibe6WR_lK2MPS-wA',
            source: 'NadiadwalaGrandson',
            date: 'June 14, 2024',
        },
        {
            title: 'MR. & MRS. MAHI - OFFICIAL TRAILER',
            description: 'Love hits a sixer! 🏏 A peek into the story of an imperfectly perfect partnership that\'s fighting against all odds to discover the power behind their dreams - Mr. & Mrs. Mahi.',
            views: '6.1M views',
            time: '11 days ago',
            duration: '2:55',
            thumbnail: 'https://i.ytimg.com/vi/TtMjcP9cHIA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNyyuB0GwY-vEf0mv918MblTtXKA',
            source: 'Dharma Productions',
            date: 'May 31',
        },
        {
            title: 'Jawan - Official Trailer',
            description: 'Jawan is an action thriller showcasing the gripping journey of a man set out to save the country from a major threat, starring Shah Rukh Khan and Nayanthara.',
            views: '15M views',
            time: '3 days ago',
            duration: '2:45',
            thumbnail: 'https://i.ytimg.com/vi/MWOlnZSnXJo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdIOusYnUGZHNS6K8yHQLW_kESdA',
            source: 'Red Chillies Entertainment',
            date: 'June 12, 2024',
          },
          {
            title: 'Tiger 3 | Official Trailer',
            description: 'Tiger and Zoya are back on a mission that tests their courage and their love for each other. Starring Salman Khan and Katrina Kaif.',
            views: '10M views',
            time: '7 days ago',
            duration: '3:10',
            thumbnail: 'https://i.ytimg.com/vi/vEjTUDjjU6A/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCIBDnrCv9Iua0I0J14XxD8epzing',
            source: 'YRF',
            date: 'June 10, 2024',
          },
          {
            title: 'M.S.Dhoni - The Untold Story | Official Trailer',
            description: 'Mahi maar raha tha, maar raha hai, aur maarta rahega! A story memorable, a legend unforgettable. Bringing MS Dhoni: The ...Rocky Bhai returns in KGF Chapter 3, continuing his journey to rule the underworld. Starring Yash and Srinidhi Shetty.',
            views: '45M views',
            time: '7 years ago',
            duration: '3:18',
            thumbnail: 'https://i.ytimg.com/vi/6L6XqWoS8tw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCFwdn9Io5JnyZ1K_OAZIEtJb8xog',
            source: 'Star Studios',
            date: 'August 11, 2016',
          },
    ];

    return (
        <div className="max-w-screen-lg mx-auto p-4 md:mb-auto mb-14">
            <div className='flex items-center gap-2 m-2 mb-4'>
                <img className='invert border rounded-full p-2 bg-green-400' width="70px" src={trendingsvg} alt="trending" />
                <h2 className="text-4xl font-bold">Trending</h2>
            </div>
            <div className="border-b border-gray-600 mb-4">
                <ul className="flex space-x-4 text-[#aaa] font-bold gap-2">
                    <li className="pb-2">Now</li>
                    <li className="pb-2">Music</li>
                    <li className="pb-2">Gaming</li>
                    <li className="pb-2 border-b-2 text-white">Movies</li>
                </ul>
            </div>
            {movies.map((movie, index) => (
                <div key={index} className="md:flex items-start hover:bg-icon-color hover:cursor-pointer transition-colors duration-200 p-2 rounded-lg">
                    <div className="thumbnail my-3 relative mr-3">
                        <img src={movie.thumbnail} alt={movie.title} className="w-full md:min-w-[300px] md:max-w-[300px] rounded-lg" />

                        <div className="absolute bottom-2 right-2 bg-gray-950 bg-opacity-75 rounded-lg p-1">
                            <p className="text-white text-sm font-bold">{movie.duration}</p>
                        </div>
                    </div>
                    <div className='my-4'>
                        <h3 className="text-xl">{movie.title}</h3>
                        <p className="text-[0.8rem] text-[#aaa] mb-1">{movie.source} • {movie.views} • {movie.time}</p>
                        <p className="text-[0.7rem] w-4/5 text-[#aaa]">{movie.description}</p>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Trending;
