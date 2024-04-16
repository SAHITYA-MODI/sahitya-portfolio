import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src="/hero.png"
          alt="hero image"
          fill
          className="object-contain"
        />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl font-bold md:text-6xl">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        <p className="md:text-xl">
          Welcome to my digital playground, where innovation meets functionality
          and creativity knows no bounds. As a full stack developer, I invite
          you to explore a world of seamless user experiences, elegant designs,
          and powerful functionalities. Join me on a journey through the art of
          code, where every line is crafted with precision and every project is
          an opportunity to push the boundaries of what's possible.
        </p>
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
