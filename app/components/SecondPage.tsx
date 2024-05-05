

const VideoPage = () => {
  return (
      

      <main className="h-full bg-black">
        <div className="flex h-full">
          <div className="flex-1 p-20 overflow-auto ">
            <div className="p-10">

            <h1 className="mb-14 text-7xl uppercase font-bold text-white mb-4">Creon Pass NFT</h1>
            
            
            <span className="mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-md font-bold uppercase py-4">
            The Creon NFT pass unlocks access to Al projects, the Crean launchpad, and a ticket to generate passive income through Al- driven tools
        </span>
        <ul className="text-white mt-10">
              <li className="mb-8 ml-4">Pre-launch Investment opportunities for upcoming Al projects</li>
              <li className="mb-8 ml-4">Free and early access to Creon built Al projects</li>
              <li className="mb-8 ml-4">Higher allocation limits on the Creon Al Launchpad</li>
              <li className="mb-8 ml-4">Revenue share distribution from Creon built Al projects</li>
            </ul>

            <button className="mt-4 w-4/5 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded">
              Buy Creon Pass
            </button>
            </div>

          </div>
          <div className="flex-1 ">
            <video autoPlay muted loop className="w-full h-full" >
              <source src="/nft-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
  );
};

export default VideoPage;
