import React from "react";
import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <div className="py-[250px] bg-[#252D43]">
      <div className="container">
        <div className="box bg-[#83895C] p-[90px] text-center mb-[250px]">
          <h2 className="text-4xl text-white mb-[60px]">
            Don't leave your land development
            <br /> project to chance. 
          </h2>
          <p className="text-white text-2xl">
            Start your journey to success today with our <br /> comprehensive
            real estate development tools and <br /> services.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl text-white">Unlock the Value of Your Land</h2>
          <h3 className="text-3xl text-white mt-[15px]">
            Join the Acreage Email List and Get First <br /> Access When We
            Launch!
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
