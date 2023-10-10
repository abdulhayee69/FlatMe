const Hero = () => {
  return (
    <div className="flex z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center bg-[url('2509.jpg')] bg-cover bg-opacity-75 bg-center w-full"
    >
      <div className="flex flex-col justify-center items-center px-24 rounded-xl backdrop-blur-sm py-12 border-r-8 border-t-2 border-b-8 border-l-2 border-orange-500 dark:border-purple-500 bg-white dark:bg-black dark:bg-opacity-75 bg-opacity-60 " >
        <div className="text-5xl capitalize md:text-5xl">Crafting memories:</div>
        <br /> 
        <div className="text-primary font-bold capitalize md:text-5xl">
          <p className=" text-6xl">one flat at a time</p>
        </div>
        <div className="flex justify-center pt-6 pl-3"></div>
        <div className="flex flex-col justify-center items-center text-xl">
          <div>
            Connect with people who get you! Amazing roommates can turn into
            awesome friends—sometimes even lifelong ones.
          </div>
          <div>
            That's why we make sure people are at the center of the adventure.
          </div>
        </div>
        <button className="mt-6 btn btn-primary">get started</button>
      </div>
    </div>
  );
};

export default Hero;
