import Image from "next/image";
import React from "react";
import heroImage from '../../assets/images/hero.png';
import Link from "next/link";


function Hero() {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2">
          <h1 className="text-[28px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Get Ready to Spread Your Knowledge Over The World!
          </h1>
          <p className="text-[15px] md:text-[17px] mb-[2rem] text-black opacity-90 font-[400]">Welcome to the Department of Computer Science & Technology at NIET Dhaka Campus. Discover a hub of innovation, cutting-edge research, and unparalleled academic excellence. Join us in shaping the future of technology.</p>
          <div className="flex space-x-4 md:space-x-6">
            <button className="py-2 px-3 md:px-5 bg-blue-700 text-white rounded-full">
              <Link href={'/about-us'}>Learn More</Link>
            </button>
            <button className="py-2 px-3 md:px-5 bg-purple-700 text-white rounded-full">Student Login</button>
          </div>
        </div>
        <div className="col-span-3 hidden md:mt-[5rem] sm:block lg:ml-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-purple-200 to-white rounded-full ">
            <Image alt="Department of Computer Science and Technology NIET Dhaka"  src={heroImage}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
