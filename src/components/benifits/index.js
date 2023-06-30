import React from "react";

const Benifits = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center benifits">
        <div className="md:w-[45%] md:pl-[10%] md:pr-[13%] px-[30px] bg-[#252D43]">
          <div className="line w-[1px] h-[138px] bg-[#665F57] mb-[100px]"></div>
          <h2 className="text-5xl text-[#83895C]">Benefits</h2>

          <p className="text-white mt-[45px] mb-[100px] lh-2">
            By using our service, you can leverage the experience, expertise,
            and resources of our team to make informed decisions, get
            personalized guidance, and access a network of professionals who can
            help you achieve your real estate development goals. 
          </p>
          <div className="line w-[1px] h-[138px] bg-[#665F57]"></div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
