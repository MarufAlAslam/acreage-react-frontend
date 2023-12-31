import React from "react";
import { Link } from "react-router-dom";
// import Modal from "../../components/modal";

const Join = ({ handleModal }) => {
  const [modal, setModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const joinToList = (e) => {
    setLoading(true);
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullName.value;
    const email = form.email.value;

    const data = {
      fullName,
      email,
    };

    console.log(data);

    fetch("https://acreage-server.vercel.app/api/v1/mailingList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setModal(true);
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // set modal disappear after 3 seconds
  // React.useEffect(() => {
  //   if (modal) {
  //     setTimeout(() => {
  //       setModal(false);
  //     }, 3000);
  //   }
  // }, [modal]);

  // handle modal disappear when click outside
  // const hideModal = () => {
  //   setModal(false);
  // };
  return (
    <div className="bg-[#252d43bf] py-[15px]">
      {loading && (
        <div className="fixed top-0 left-0 bg-black opacity-80 h-screen w-full">
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white-900"></div>
          </div>
        </div>
      )}
      {/* {!loading && modal && <Modal hideModal={hideModal} />} */}
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between bg-[#252D43]">
          <div className="md:w-1/2 bg-[#83895C] md:p-[80px] p-[30px]">
            <div className="flex justify-between items-start mb-[40px]">
              <h2 className="text-4xl text-white">
                join our
                <br /> mailing list.
              </h2>
              <svg
                width="38"
                height="48"
                viewBox="0 0 38 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2184 34.2822C22.1327 33.3182 22.0792 32.3541 22.0578 31.3901C22.0578 30.4046 22.047 29.4191 22.0256 28.4336H21.5757C20.9116 28.4336 20.1725 28.5408 19.3584 28.755C18.5658 28.9478 17.8052 29.2477 17.0768 29.6548C16.3484 30.0618 15.7486 30.576 15.2773 31.1972C14.8274 31.7971 14.6024 32.4934 14.6024 33.286C14.6024 34.3143 14.8917 35.0963 15.4701 35.6319C16.0485 36.146 16.8305 36.4031 17.8159 36.4031C18.2873 36.4031 18.8014 36.296 19.3584 36.0818C19.9154 35.8461 20.451 35.5676 20.9652 35.2462C21.4793 34.9249 21.8971 34.6035 22.2184 34.2822ZM27.8421 36.3388C27.8421 36.4245 27.8313 36.4888 27.8099 36.5316C27.5957 37.003 27.2315 37.3672 26.7173 37.6242C26.2246 37.8599 25.7319 37.9777 25.2391 37.9777C24.3393 37.9777 23.6859 37.7206 23.2789 37.2065C22.8933 36.6709 22.5826 36.0175 22.347 35.2462C21.5329 35.9961 20.6331 36.6281 19.6476 37.1422C18.6622 37.6349 17.6017 37.8813 16.4663 37.8813C15.6736 37.8813 14.9238 37.7314 14.2168 37.4314C13.5313 37.1101 12.9743 36.6495 12.5458 36.0496C12.1173 35.4498 11.9031 34.7214 11.9031 33.8644C11.9031 32.9647 12.1281 32.1934 12.5779 31.5507C13.0493 30.8866 13.6384 30.3296 14.3454 29.8797C15.0738 29.4084 15.845 29.0335 16.6591 28.755C17.4946 28.4551 18.2765 28.2301 19.0049 28.0801C19.4977 27.973 20.0011 27.8766 20.5153 27.7909C21.0294 27.7052 21.5329 27.6195 22.0256 27.5339C22.0256 26.934 21.9935 26.2377 21.9292 25.4451C21.8864 24.6524 21.7257 23.999 21.4472 23.4848C21.1687 22.9921 20.7938 22.5529 20.3225 22.1673C19.8512 21.7817 19.3263 21.5889 18.7479 21.5889C17.7624 21.5889 16.9911 21.846 16.4341 22.3601C15.8771 22.8743 15.4808 23.6027 15.2451 24.5453C15.2237 24.6524 15.2023 24.7702 15.1809 24.8988C15.1809 25.0059 15.1702 25.113 15.1487 25.2201C15.1273 25.3487 15.0416 25.4665 14.8917 25.5736C14.7631 25.6593 14.6239 25.7022 14.4739 25.7022C14.0669 25.7022 13.692 25.6058 13.3492 25.4129C13.0278 25.2201 12.8672 24.8988 12.8672 24.4489C12.8672 24.1918 12.91 23.9669 12.9957 23.7741C13.2742 23.1099 13.7241 22.5636 14.3454 22.1352C14.9666 21.6853 15.6522 21.3425 16.402 21.1069C17.1732 20.8712 17.8909 20.7534 18.555 20.7534C19.7119 20.7534 20.7616 20.9676 21.7043 21.3961C22.6469 21.8245 23.3967 22.4565 23.9537 23.292C24.5322 24.1061 24.8214 25.1344 24.8214 26.377C24.8214 27.7695 24.8107 29.1727 24.7892 30.5867C24.7892 32.0006 24.8321 33.4146 24.9178 34.8285C24.9392 35.2998 25.0356 35.7176 25.207 36.0818C25.3784 36.4245 25.7319 36.5959 26.2674 36.5959C26.5459 36.5959 26.8352 36.5316 27.1351 36.4031C27.4564 36.2531 27.66 36.1782 27.7456 36.1782C27.8099 36.1782 27.8421 36.2317 27.8421 36.3388Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.1903 16.5131C2.39933 13.2066 5.14729 10.5895 8.50651 10.5895H10.167V8.78125H8.50651C4.14836 8.78125 0.590424 12.2073 0.379162 16.5131H2.1903ZM35.9309 16.5131C35.7219 13.2066 32.9739 10.5895 29.6147 10.5895H27.9542V8.78125H29.6147C33.9729 8.78125 37.5308 12.2074 37.7421 16.5131H35.9309ZM37.742 40.2294H35.9309C35.7216 43.5356 32.9738 46.1524 29.6147 46.1524H28.93V47.9607H29.6147C33.9727 47.9607 37.5305 44.5349 37.742 40.2294ZM2.19033 40.2294H0.379192C0.59074 44.5349 4.14856 47.9607 8.50651 47.9607H10.4737V46.1524H8.50651C5.14749 46.1524 2.39964 43.5356 2.19033 40.2294Z"
                  fill="#FFFBFB"
                />
              </svg>
            </div>

            <p className="lh-2 text-white mb-[50px]">
              Acreage is a property technology (PropTech) start-up that offers a
              powerful land use tool. We
            </p>

            {modal ? (
              <>
                <h2 className="text-[25px] text-white">
                  Thank you for your submission! <br /> <br /> We will contact
                  you with Acreage news and product updates.
                </h2>

                <button
                  onClick={handleModal}
                  className="btn block text-center mt-[100px] btn-primary w-full py-5 ls-2 bg-[#252D43] text-white"
                >
                  RETURN TO ACREAGE
                </button>
              </>
            ) : (
              <form onSubmit={joinToList}>
                <div className="form-group mb-[20px]">
                  <label className="text-white ls- block mb-2">FULL NAME</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    className="form-control w-full py-4 px-3"
                  />
                </div>
                <div className="form-group mb-[70px]">
                  <label className="text-white ls- block mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="form-control w-full py-4 px-3"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-5 ls-2 bg-[#252D43] text-white"
                >
                  JOIN OUR MAILING LIST
                </button>
              </form>
            )}
          </div>
          <div className="md:w-1/2 h-full bg-[#252D43] md:p-[80px] p-[30px]">
            <h2 className="md:text-6xl text-3xl text-white mb-[50px]">
              Complete our survey for early access to the{" "}
              <span className="text-[#83895C]">acreage</span> platform.
            </h2>

            <p className="text-white lh-2 mb-[85px]">
              Acreage is a property technology (PropTech) start-up that offers a
              powerful land use tool. We
            </p>

            <Link
              to={"/survey"}
              type="submit"
              className="btn btn-primary w-full py-5 ls-2 bg-[#83895C] text-center inline-sblock text-white"
            >
              COMPLETE SURVEY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
