import React from "react";
// import benifit from "../../assets/images/benifit.png";

import benifitVideo from "../../assets/videos/body.mp4";

const Benifits = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col w-full justify-between items-center benifits relative">
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

        {/* <div className="video md:hidden block">
          <img src={benifit} alt="benifit" className="w-full" />
        </div> */}
        <div className="video block md:w-[55%] w-full right-0 top-0 md:absolute h-full object-cover">
          <video
            src={benifitVideo}
            autoPlay
            loop
            muted
            className="object-cover h-full"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
