import React from 'react'
import courses from "/src/assets/svg/courses.svg"

const featuredCourses = [
  {
    title: "Front End Developer Learning Path",
    channel: "freeCodeCamp.org",
    image: "https://i.ytimg.com/vi/9He4UBLyk8Y/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCmwbjtmMDfZ-e7K9NTp3nVjUQ5FQ",
  },
  {
    title: "Back End Developer Learning Path",
    channel: "freeCodeCamp.org",
    image: "https://i.ytimg.com/vi/tN6oJu2DqCM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAI1qwL3oYWOUiBLmq5Fp0YMdR6dw",
  },
  {
    title: "CODE ALONG WITH ME: python tutorials for absolute beginners",
    channel: "Maya Bello",
    image: "https://i.ytimg.com/vi/bF_xdxYN-zw/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAeF7NdJ9KDu8y3b09El46yWGhsRQ",
  },
];

const paidCourses = [
  {
    title: "'English as a lifestyle' workbook",
    channel: "linguamarina",
    image: "https://i.ytimg.com/vi/emeiRJdmTQg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBiBWDojfQ3rvnUmpZIWRdZq99rHQ",
  },
  {
    title: "10 Days Super Basic English Speaking Course",
    channel: "Sartaz Classes",
    image: "https://i.ytimg.com/vi/MVY1JoKvtOE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAVNb8zveoet2ggOFuiXA-cG4ULtg",
  },
  {
    title: "SPOKEN ENGLISH",
    channel: "Adda247",
    image: "https://i.ytimg.com/vi/UI6CD6Y2n8g/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCWO-TCpWce-QaRKXhflyBqunjzlw",
  },
  {
    title: "Conversation Mastery: Communicate with Confidence",
    channel: "Science of People",
    image: "https://i.ytimg.com/vi/HaXrILAmiEU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDRwe2OHe5rieIM-3NJW2oAZza4ow",
  },
];

const Courses = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-white md:mb-auto mb-20">
      <div className='flex items-center gap-2 m-2 mb-6'>
        <img className='invert border rounded-full p-3 bg-green-400' width="70px" src={courses} alt="Courses" />
        <h2 className="text-4xl font-bold">Courses</h2>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Featured Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {featuredCourses.map((feautredCourse, index) => (
            <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
              <img src={feautredCourse.image} alt={feautredCourse.title} className=" rounded-lg mb-2" />
              <h4 className="text-sm md:text-md font-semibold">{feautredCourse.title}</h4>
              <p className="text-xs text-[#aaa]">{feautredCourse.channel} • Course</p>
              <p className="text-xs text-[#aaa]">View full course</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Paid Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {paidCourses.map((highlight, index) => (
            <div key={index} className="flex flex-col items-start hover:bg-icon-color hover:cursor-pointer p-2 rounded-lg">
              <img src={highlight.image} alt={highlight.title} className="w-full h-auto rounded-lg mb-2" />
              <h4 className="text-sm md:text-md font-semibold">{highlight.title}</h4>
              <p className="text-xs text-[#aaa]">{highlight.channel} • Course</p>
              <p className="text-xs text-[#aaa]">View full course</p>
              <p className="px-1 bg-icon-color text-[0.7rem] text-green-500 rounded">Pay to watch</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
