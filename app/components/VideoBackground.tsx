import Navbar from "./Navbar";


const VideoBackground = () => {
    return (
      <div className="relative w-screen h-screen ">
        
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        
          <source src="/main-background-video.mp4" type="video/mp4" />
          
        </video>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-4/5 text-white text-6xl font-bold uppercase text-left">
        World&rsquo;s first platform for tokenizing AI Blockchain projects
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-4/5 text-left">
        
        <span className="border-t-2 border-gradient-blue-to-purple border-b-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-xl font-bold uppercase py-4">
         Hold the Creon Pass NFTand earn passive income from AI Tools
        </span>
      </div>
      </div>
    );
  };

  export default VideoBackground;