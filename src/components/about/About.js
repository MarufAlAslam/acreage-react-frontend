import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about bg-[#655E56] pb-[85px]">
      <div className="container">
        <div className="line w-1/2 bg-white h-[1px]"></div>

        <div className="grid mt-[85px] grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl text-white">
              Maximize Your <br /> Property's Use & Value
            </h2>
            <p className="text-sm mt-10 text-white lh-2">
              Our land use tool helps you to maximize the use or value of your
              property. By providing data insights and personalized
              recommendations, we help you make better decisions and optimize
              your property to its fullest potential. We offer a wide range of
              features that allow you to explore and develop your land in unique
              and innovative ways.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-white">
              Join our Email List <br /> & Get Access First
            </h2>
            <p className="text-sm text-white mt-10 lh-2">
              Sign up today to be the first to know about new features, product
              updates, and more! With our email list, you'll also get exclusive
              offers and discounts that are only available to our subscribers.
            </p>

            <Link
              to="/join"
              className="py-3 inline-block mt-10 px-8 text-white bg-[#83895C]"
            >
              JOIN OUR MAILING LIST
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
