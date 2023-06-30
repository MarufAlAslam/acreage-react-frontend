import React from "react";

const KeyFeatures = () => {
  return (
    <div className="py-[100px] bg-[#6C6359]">
      <div className="container">
        <h2 className="text-5xl text-[#fff] mb-[60px]">Key Features</h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[100px]">
          <div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-3xl text-[#bfcb72]">
                  Land
                  <br />
                  Analysis
                </p>
                <p className="text-3xl text-[#FFF]">Consult</p>
              </div>
              <svg
                width="77"
                height="99"
                viewBox="0 0 77 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.3113 68.7744C45.1365 66.8078 45.0272 64.8413 44.9835 62.8748C44.9835 60.8646 44.9617 58.8543 44.918 56.8441H44.0002C42.6455 56.8441 41.1378 57.0626 39.4772 57.4996C37.8603 57.8929 36.3089 58.5047 34.8231 59.335C33.3373 60.1653 32.1137 61.2142 31.1522 62.4815C30.2345 63.7051 29.7757 65.1254 29.7757 66.7423C29.7757 68.8399 30.3656 70.435 31.5455 71.5275C32.7255 72.5763 34.3205 73.1007 36.3308 73.1007C37.2922 73.1007 38.341 72.8822 39.4772 72.4452C40.6134 71.9645 41.706 71.3964 42.7548 70.7409C43.8036 70.0854 44.6558 69.4299 45.3113 68.7744ZM56.7827 72.9696C56.7827 73.1444 56.7608 73.2755 56.7171 73.3629C56.2801 74.3244 55.5372 75.0673 54.4884 75.5917C53.4833 76.0724 52.4782 76.3127 51.4731 76.3127C49.6376 76.3127 48.3048 75.7883 47.4744 74.7395C46.6878 73.647 46.0542 72.3141 45.5735 70.7409C43.9128 72.2704 42.0774 73.5596 40.0672 74.6084C38.0569 75.6135 35.8938 76.1161 33.5776 76.1161C31.9607 76.1161 30.4312 75.8102 28.9891 75.1984C27.5906 74.5429 26.4544 73.6033 25.5804 72.3797C24.7064 71.1561 24.2694 69.6702 24.2694 67.9222C24.2694 66.0868 24.7282 64.5136 25.646 63.2025C26.6074 61.8478 27.8091 60.7116 29.2513 59.7939C30.7371 58.8325 32.3103 58.0677 33.9709 57.4996C35.6753 56.8878 37.2703 56.4289 38.7562 56.123C39.7613 55.9045 40.7882 55.7079 41.8371 55.5331C42.8859 55.3583 43.9128 55.1835 44.918 55.0087C44.918 53.785 44.8524 52.3648 44.7213 50.7478C44.6339 49.1309 44.3061 47.798 43.738 46.7492C43.1699 45.7441 42.4052 44.8482 41.4438 44.0616C40.4823 43.275 39.4117 42.8817 38.2318 42.8817C36.2215 42.8817 34.6483 43.4061 33.5121 44.4549C32.3759 45.5038 31.5674 46.9896 31.0867 48.9124C31.043 49.1309 30.9993 49.3713 30.9556 49.6335C30.9556 49.852 30.9337 50.0705 30.89 50.289C30.8463 50.5512 30.6715 50.7915 30.3656 51.01C30.1034 51.1848 29.8194 51.2723 29.5135 51.2723C28.6831 51.2723 27.9184 51.0756 27.2192 50.6823C26.5637 50.289 26.2359 49.6335 26.2359 48.7158C26.2359 48.1914 26.3233 47.7325 26.4981 47.3392C27.0662 45.9845 27.9839 44.8701 29.2513 43.9961C30.5186 43.0784 31.917 42.3792 33.4465 41.8985C35.0197 41.4177 36.4837 41.1774 37.8384 41.1774C40.1983 41.1774 42.3396 41.6144 44.2624 42.4884C46.1853 43.3624 47.7148 44.6516 48.851 46.3559C50.0309 48.0165 50.6209 50.1142 50.6209 52.6488C50.6209 55.4894 50.599 58.3518 50.5553 61.236C50.5553 64.1203 50.6427 67.0045 50.8175 69.8887C50.8612 70.8502 51.0579 71.7023 51.4075 72.4452C51.7571 73.1444 52.4782 73.4941 53.5707 73.4941C54.1388 73.4941 54.7288 73.3629 55.3406 73.1007C55.9961 72.7948 56.4112 72.6419 56.586 72.6419C56.7171 72.6419 56.7827 72.7511 56.7827 72.9696Z"
                  fill="#83895C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.45666 34.0433C4.88286 27.2984 10.4884 21.9596 17.3409 21.9596H20.7281V18.271H17.3409C8.45075 18.271 1.19295 25.26 0.762212 34.0433H4.45666ZM73.2831 34.0433C72.8569 27.2984 67.2513 21.9596 60.3988 21.9596H57.0117V18.271H60.3988C69.289 18.271 76.5468 25.26 76.9775 34.0433H73.2831ZM76.9774 82.4214H73.283C72.8558 89.1655 67.2506 94.5031 60.3988 94.5031H59.0021V98.1918H60.3988C69.2883 98.1918 76.5457 91.2038 76.9774 82.4214ZM4.45679 82.4214H0.762303C1.19404 91.2038 8.45142 98.1918 17.3409 98.1918H21.3537V94.5031H17.3409C10.4891 94.5031 4.88396 89.1655 4.45679 82.4214Z"
                  fill="#83895C"
                />
              </svg>
            </div>

            <div className="my-[20px] bg-[#878661] w-[20px] h-[2px]"></div>

            <p className="text-white">
              Personalized guidance from an expert in real estate development to
              help you move forward with your land development project.
            </p>

            <div className="my-[20px] bg-[#878661] w-[20px] h-[2px]"></div>

            <p className="text-white">
              Consultants provide a step-by-step plan to ensure a smooth
              development process, taking into account your unique goals and
              challenges.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-3xl text-[#bfcb72]">
                  Service
                  <br />
                  Ad
                </p>
                <p className="text-3xl text-[#FFF]">Portal</p>
              </div>
              <svg
                width="78"
                height="84"
                viewBox="0 0 78 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="75"
                  height="81"
                  rx="5.5"
                  stroke="#83895C"
                  stroke-width="3"
                />
                <line
                  x1="26"
                  y1="18.5"
                  x2="15"
                  y2="18.5"
                  stroke="#83895C"
                  stroke-width="3"
                />
                <line
                  x1="36"
                  y1="25.5"
                  x2="15"
                  y2="25.5"
                  stroke="#83895C"
                  stroke-width="3"
                />
                <line
                  x1="4.5"
                  y1="3"
                  x2="4.5"
                  y2="82"
                  stroke="#83895C"
                  stroke-width="3"
                />
                <line
                  x1="75"
                  y1="80.5"
                  x2="4"
                  y2="80.5"
                  stroke="#83895C"
                  stroke-width="3"
                />
                <line
                  x1="22"
                  y1="38.5"
                  x2="15"
                  y2="38.5"
                  stroke="#83895C"
                  stroke-width="3"
                />
                <line
                  x1="65"
                  y1="45.5"
                  x2="15"
                  y2="45.5"
                  stroke="#83895C"
                  stroke-width="3"
                />
                <line
                  x1="26"
                  y1="57.5"
                  x2="15"
                  y2="57.5"
                  stroke="#83895C"
                  stroke-width="3"
                />
                <line
                  x1="48"
                  y1="64.5"
                  x2="15"
                  y2="64.5"
                  stroke="#83895C"
                  stroke-width="3"
                />
              </svg>
            </div>

            <div className="my-[20px] bg-[#878661] w-[20px] h-[2px]"></div>

            <p className="text-white">
              Architects, engineers, general and sub-contractors, realtors, and
              brokers who can help you turn your real estate development dreams
              into reality.
            </p>

            <div className="my-[20px] bg-[#878661] w-[20px] h-[2px]"></div>

            <p className="text-white">
              Our vetted, proven professionals can assist you at every stage of
              your project, across design and construction to marketing and
              sales
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-3xl text-[#bfcb72]">
                  Land
                  <br />
                  Analysis
                </p>
                <p className="text-3xl text-[#FFF]">Packet</p>
              </div>
              <svg
                width="69"
                height="84"
                viewBox="0 0 69 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 60">
                  <g id="Group 59">
                    <rect
                      id="Rectangle 50"
                      x="1.5"
                      y="1.5"
                      width="63.5946"
                      height="81"
                      stroke="#83895C"
                      stroke-width="3"
                    />
                    <path
                      id="Rectangle 51"
                      d="M9.14036 11.3649L2.75722 1.5H64.1032L58.8807 11.3649H9.14036Z"
                      stroke="#83895C"
                      stroke-width="3"
                    />
                    <line
                      id="Line 17"
                      x1="32.5"
                      y1="82"
                      x2="32.5"
                      y2="66"
                      stroke="#83895C"
                      stroke-width="3"
                    />
                    <line
                      id="Line 18"
                      x1="38.5"
                      y1="82"
                      x2="38.5"
                      y2="56"
                      stroke="#83895C"
                      stroke-width="3"
                    />
                    <line
                      id="Line 19"
                      x1="33.5"
                      y1="33"
                      x2="33.5"
                      y2="24"
                      stroke="#83895C"
                      stroke-width="3"
                    />
                  </g>
                  <line
                    id="Line 27"
                    x1="67.5"
                    y1="2"
                    x2="67.5"
                    y2="81"
                    stroke="#83895C"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </div>

            <div className="my-[20px] bg-[#878661] w-[20px] h-[2px]"></div>

            <p className="text-white">
              A detailed report that analyzes the best use of your land and
              outlines potential configuration possibilities, cost, duration,
              and permits required.
            </p>

            <div className="my-[20px] bg-[#878661] w-[20px] h-[2px]"></div>

            <p className="text-white">
              With this information, you can make data-driven decisions about
              how to use your land most effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
