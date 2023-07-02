import React from "react";
import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <div className="md:py-[250px] py-[100px] bg-[#252D43]">
      <div className="container">
        <div className="box bg-[#83895C] md:p-[90px] p-[20px] text-center md:mb-[250px] mb-[50px]">
          <h2 className="md:text-4xl text-3xl text-white mb-[60px]">
            Don't leave your land development
            <br className="md:block hidden" /> project to chance. 
          </h2>
          <p className="text-white md:text-2xl text-xl">
            Start your journey to success today with our <br /> comprehensive
            real estate development tools and <br /> services.
          </p>
        </div>

        <div className="text-center">
          <h2 className="md:text-4xl text-3xl text-white">
            Unlock the Value of Your Land
          </h2>
          <h3 className="md:text-3xl text-xl text-white mt-[15px]">
            Join the Acreage Email List and Get First{" "}
            <br className="md:block hidden" /> Access When We Launch!
          </h3>
          <Link
            to="/join"
            className="btn inline-block mt-[50px] py-5 px-12 ls-2 bg-[#545032] border-2 border-[#7E755D] text-white"
          >
            JOIN OUR MAILING LIST
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quote;
