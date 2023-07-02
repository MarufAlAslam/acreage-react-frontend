import React from "react";

const SurveyForm = () => {
  return (
    <form>
      <h2 className="text-3xl text-white">Basic Information.</h2>
      <p className="text-white mb-[70px]">
        Please provide name, location and contact information below.
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-14 mb-[85px]">
        <div className="form-group">
          <label className="text-white text-sm">FULL NAME</label>
          <input type="text" className="form-control w-full p-3 mt-2" />
        </div>
        <div className="form-group">
          <label className="text-white text-sm">EMAIL ADDRESS</label>
          <input type="email" className="form-control w-full p-3 mt-2" />
        </div>
        <div className="form-group">
          <label className="text-white text-sm">PHONE NUMBER</label>
          <input type="text" className="form-control w-full p-3 mt-2" />
        </div>
        <div className="form-group">
          <label className="text-white text-sm">PROPERTY ADDRESS</label>
          <input type="text" className="form-control w-full p-3 mt-2" />
        </div>
      </div>

      <h2 className="text-3xl text-white">Survey Questions.</h2>
      <p className="text-white mb-[70px]">
        Please provide name, location and contact information below.
      </p>

      <p className="text-lg text-white mb-[45px]">
        1. Which Types of Land or Property do you own and how long have you
        owned it?
      </p>

      <div className="flex flex-col justify-start items-start mb-[70px]">
        <div className="flex justify-between items-center mb-3">
          <input id="res" type="checkbox" className="form-checkbox" />
          <label htmlFor="res" className="text-white text-sm ml-[10px]">
            Residential
          </label>
        </div>
        <div className="flex justify-between items-center mb-3">
          <input id="com" type="checkbox" className="form-checkbox" />
          <label htmlFor="com" className="text-white text-sm ml-[10px]">
            Commercial
          </label>
        </div>
        <div className="flex justify-between items-center mb-3">
          <input id="ind" type="checkbox" className="form-checkbox" />
          <label htmlFor="ind" className="text-white text-sm ml-[10px]">
            Industrial
          </label>
        </div>
      </div>

      <p className="text-lg text-white mb-[45px]">
        2. Do you have a rental property?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes" type="radio" className="form-radio" />
          <label htmlFor="yes" className="text-white text-sm ml-[10px]">
            Yes, I do
          </label>
        </div>

        <div>
          <input id="no" type="radio" className="form-radio" />
          <label htmlFor="no" className="text-white text-sm ml-[10px]">
            No, I don't
          </label>
        </div>
      </div>

      <p className="text-lg text-white mb-[45px]">
        3. Have you considered renovating or redeveloping your property?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            Yes, I Have
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            No, I haven't
          </label>
        </div>
      </div>

      <p className="text-lg text-white mb-[70px]">
        4. What are your primary reasons for considering property renovations?
        (provide options)
      </p>
      <p className="text-lg text-white mb-[70px]">
        5. Why would you want to redevelop the property that you live in?
        (provide options)
      </p>
      <p className="text-lg text-white mb-[70px]">
        6, What are your limitations regarding redevelopment of your property?
      </p>

      <p className="text-lg text-white mb-[45px]">
        7. Would you be interested in consulting services for your property
        redevelopment?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            Yes, I would
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            No, I wouldn't
          </label>
        </div>
      </div>
      <p className="text-lg text-white mb-[45px]">
        8. What roles does costs play in your decision to renovate or redevelop
        your property?
      </p>
      <div className="flex md:flex-row flex-col justify-start md:items-center items-start gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            Cost plays a large role
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            Cost plays somewhat a role
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            Cost plays no role at all
          </label>
        </div>
      </div>

      <p className="text-lg text-white mb-[45px]">9. Do you have a budget?</p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            No
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            Yes
          </label>
        </div>
      </div>
      <p className="text-lg text-white mb-[45px]">
        10. Do you know the initial steps of renovating or redeveloping your
        property?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            No
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            Yes
          </label>
        </div>
      </div>
      <p className="text-lg text-white mb-[45px]">
        11. What is the scope of your renovation?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            No
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            Yes
          </label>
        </div>
      </div>
      <p className="text-lg text-white mb-[45px]">
        12. Do you have a preferred timeline for renovations?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            No
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            Yes
          </label>
        </div>
      </div>

      <p className="text-lg text-white mb-[70px]">
        13. What are your perceived challenges regarding multifamily
        development? (provide options)
      </p>
      <p className="text-lg text-white mb-[70px]">
        14. What are you least concerned about regarding renovating or
        redeveloping your property? (provide options)
      </p>

      <p className="text-lg text-white mb-[45px]">
        15. Is there any additional information you’d like to act on?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            No
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            Yes
          </label>
        </div>
      </div>
      <p className="text-lg text-white mb-[45px]">
        16. Are you interested in incorporating energy-efficient or sustainable
        features into the renovations?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            Yes, I'm interested
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            Not Intersted
          </label>
        </div>
      </div>
      <p className="text-lg text-white mb-[45px]">
        17. Have you considered adding a rental or for-sale addition on your
        property?
      </p>
      <div className="flex justify-start items-center gap-20 mb-[70px]">
        <div>
          <input id="yes1" type="radio" className="form-radio" />
          <label htmlFor="yes1" className="text-white text-sm ml-[10px]">
            Yes, I have
          </label>
        </div>

        <div>
          <input id="no2" type="radio" className="form-radio" />
          <label htmlFor="no2" className="text-white text-sm ml-[10px]">
            No I've not
          </label>
        </div>
      </div>

      <p className="text-lg text-white mb-[70px]">
        18. How will you finance the renovation or property upgrades? (provide
        options)
      </p>

      <button
        type="submit"
        className="btn btn-primary px-14  py-5 ls-2 bg-[#83895C] text-white"
      >
        SUBMIT SURVEY FORM
      </button>
    </form>
  );
};

export default SurveyForm;
