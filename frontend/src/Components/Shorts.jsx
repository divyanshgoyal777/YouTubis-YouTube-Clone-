import React from 'react';

const shortsData = [
  {
    id: 1,
    title: "Hardworking Cat",
    videoUrl: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.mp4",
    thumbnail: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  },
  {
    id: 2,
    title: ":)",
    videoUrl: "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.mp4",
    thumbnail: "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif",
  },
  {
    id: 3,
    title: "No content",
    videoUrl: "https://media.giphy.com/media/l3vR9O6WA6N3hMMEw/giphy.mp4",
    thumbnail: "https://media.giphy.com/media/l3vR9O6WA6N3hMMEw/giphy.gif",
  },
  {
    id: 4,
    title: "Bus",
    videoUrl: "https://media.giphy.com/media/xT9IgDEI1iZyb2wqo8/giphy.mp4",
    thumbnail: "https://media.giphy.com/media/xT9IgDEI1iZyb2wqo8/giphy.gif",
  },
];

const Shorts = () => {
  const handleVideoClick = (event) => {
    const video = event.target;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="shorts-container flex flex-col items-center h-screen overflow-y-scroll snap-y snap-mandatory">
      {shortsData.map((short) => (
        <div
          key={short.id}
          className="short-item flex-shrink-0 w-full h-[95vh] snap-center flex flex-col md:justify-center items-center"
        >
          <video
            onClick={handleVideoClick}
            className="w-[95vw] md:max-w-[400px] h-5/6 object-cover rounded-xl"
            poster={short.thumbnail}
            loop
            muted
          >
            <source src={short.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-white text-lg mt-4">{short.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
