import React from "react";
import Modal from "../modal";

const SurveyForm = () => {
  const [modal, setModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showAmount, setShowAmount] = React.useState(false);
  const submitSurvey = (e) => {
    setLoading(true);
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const type = form.type.value;
    const rental = form.rental.value;
    const redevelop = form.redevelop.value;
    // const primaryReason = form.primaryReason.value;
    // get primary reason value from checkbox
    const primaryReason = [];
    const primaryReasonInputs = document.querySelectorAll(
      'input[name="primaryReason"]:checked'
    );
    primaryReasonInputs.forEach((input) => {
      primaryReason.push(input.value);
    });

    const why = form.why.value;
    const limitations = form.limitations.value;
    const interest = form.interest.value;
    const decision = form.decision.value;
    const budget = form.budget.value;
    const amount = form.amount?.value ? form.amount.value : "N/A";
    const step = form.step.value;
    const scope = form.scope.value;
    const renovation = form.renovation.value;
    // const challenges = form.challenges.value;
    // get challenges value from checkbox
    const challenges = [];
    const challengesInputs = document.querySelectorAll(
      'input[name="challenges"]:checked'
    );
    challengesInputs.forEach((input) => {
      challenges.push(input.value);
    });
    const revelopingProperty = form.revelopingProperty.value;
    const additional = form.additional.value;
    const features = form.features.value;
    const forSale = form.forSale.value;
    const propertyUpgrade = form.propertyUpgrade.value;

    const data = {
      fullName,
      email,
      phone,
      address,
      type,
      rental,
      redevelop,
      primaryReason,
      why,
      limitations,
      interest,
      decision,
      budget,
      amount,
      step,
      scope,
      renovation,
      challenges,
      revelopingProperty,
      additional,
      features,
      forSale,
      propertyUpgrade,
    };

    console.log(data);

    fetch("https://acreage-server.vercel.app/api/v1/survey", {
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
  React.useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setModal(false);
      }, 3000);
    }
  }, [modal]);

  const hideModal = () => {
    setModal(false);
  };
  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 bg-black opacity-80 h-screen w-full">
          <div className="flex justify-center items-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
          </div>
        </div>
      )}

      {!loading && modal && <Modal hideModal={hideModal} />}
      <form onSubmit={submitSurvey}>
        <h2 className="text-3xl text-white">Basic Information.</h2>
        <p className="text-white mb-[70px]">
          Please provide name, location and contact information below.
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-14 mb-[85px]">
          <div className="form-group">
            <label className="text-white text-sm">FULL NAME</label>
            <input
              type="text"
              name="fullName"
              className="form-control w-full p-3 mt-2"
            />
          </div>

          <div className="form-group">
            <label className="text-white text-sm">EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              className="form-control w-full p-3 mt-2"
            />
          </div>

          <div className="form-group">
            <label className="text-white text-sm">PHONE NUMBER</label>
            <input
              type="text"
              name="phone"
              className="form-control w-full p-3 mt-2"
            />
          </div>

          <div className="form-group">
            <label className="text-white text-sm">PROPERTY ADDRESS</label>
            <input
              type="text"
              name="address"
              className="form-control w-full p-3 mt-2"
            />
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
            <input
              id="type1"
              value={"Residential"}
              type="radio"
              name="type"
              className="form-checkbox"
            />
            <label htmlFor="type1" className="text-white text-sm ml-[10px]">
              Residential
            </label>
          </div>
          <div className="flex justify-between items-center mb-3">
            <input
              id="type2"
              value={"Commercial"}
              type="radio"
              name="type"
              className="form-checkbox"
            />
            <label htmlFor="type2" className="text-white text-sm ml-[10px]">
              Commercial
            </label>
          </div>
          <div className="flex justify-between items-center mb-3">
            <input
              id="type3"
              value={"Industrial"}
              type="radio"
              name="type"
              className="form-checkbox"
            />
            <label htmlFor="type3" className="text-white text-sm ml-[10px]">
              Industrial
            </label>
          </div>
        </div>

        <p className="text-lg text-white mb-[45px]">
          2. Do you have a rental property?
        </p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              value={"Yes, I do"}
              id="rental1"
              type="radio"
              name="rental"
              className="form-radio"
            />
            <label htmlFor="rental1" className="text-white text-sm ml-[10px]">
              Yes, I do
            </label>
          </div>

          <div>
            <input
              value={"No, I don't"}
              id="rental2"
              type="radio"
              name="rental"
              className="form-radio"
            />
            <label htmlFor="rental2" className="text-white text-sm ml-[10px]">
              No, I don't
            </label>
          </div>
        </div>

        <p className="text-lg text-white mb-[45px]">
          3. Have you considered renovating or redeveloping your property?
        </p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              value={"Yes, I Have"}
              id="redevelop1"
              type="radio"
              name="redevelop"
              className="form-radio"
            />
            <label
              htmlFor="redevelop1"
              className="text-white text-sm ml-[10px]"
            >
              Yes, I Have
            </label>
          </div>

          <div>
            <input
              value={"No, I haven't"}
              id="redevelop2"
              type="radio"
              name="redevelop"
              className="form-radio"
            />
            <label
              htmlFor="redevelop2"
              className="text-white text-sm ml-[10px]"
            >
              No, I haven't
            </label>
          </div>
        </div>

        <div className="mb-[70px]">
          <p className="text-lg text-white mb-[45px]">
            What are your primary reasons for considering property renovations?
          </p>
          {/* <input
            type="text"
            name="primaryReason"
            className="form-control w-full p-3 mt-2"
          /> */}

          {/* check boxes for multi select */}
          <div className="flex flex-col justify-start items-start mb-[70px]">
            <div className="flex justify-between items-center mb-3">
              <input
                id="reason1"
                value={"Desire for a new look/feel of your property"}
                type="checkbox"
                name="primaryReason"
                className="form-checkbox"
              />

              <label htmlFor="reason1" className="text-white text-sm ml-[10px]">
                Desire for a new look/feel of your property
              </label>
            </div>
            <div className="flex justify-between items-center mb-3">
              <input
                id="reason2"
                value={"Increase the value of the property"}
                type="checkbox"
                name="primaryReason"
                className="form-checkbox"
              />

              <label htmlFor="reason2" className="text-white text-sm ml-[10px]">
                Increase the value of the property
              </label>
            </div>
            <div className="flex justify-between items-center mb-3">
              <input
                id="reason3"
                value={"To commercialize property for rent"}
                type="checkbox"
                name="primaryReason"
                className="form-checkbox"
              />

              <label htmlFor="reason3" className="text-white text-sm ml-[10px]">
                To commercialize property for rent
              </label>
            </div>
            <div className="flex justify-between items-center mb-3">
              <input
                id="reason4"
                value={"Curiosity"}
                type="checkbox"
                name="primaryReason"
                className="form-checkbox"
              />

              <label htmlFor="reason4" className="text-white text-sm ml-[10px]">
                Curiosity
              </label>
            </div>
            <div className="flex justify-between items-center mb-3">
              <input
                id="reason5"
                value={"Other/Additional"}
                type="checkbox"
                name="primaryReason"
                className="form-checkbox"
              />

              <label htmlFor="reason5" className="text-white text-sm ml-[10px]">
                Other/Additional
              </label>
            </div>
          </div>
        </div>

        <div className="mb-[70px]">
          <p className="text-lg text-white">
            5. Why would you want to redevelop the property that you live in?
          </p>
          <input
            type="text"
            name="why"
            className="form-control w-full p-3 mt-2"
          />
        </div>

        <div className="mb-[70px]">
          <p className="text-lg text-white mb-[45px]">
            6. What are your limitations regarding redevelopment of your
            property?
          </p>
          {/* <input
            type="text"
            name="limitations"
            className="form-control w-full p-3 mt-2"
          /> */}

          {/* radio buttons */}
          <div className="flex justify-start items-center gap-20 mb-[70px]">
            <div>
              <input
                id="limitations1"
                value={"Finances"}
                type="radio"
                name="limitations"
                className="form-radio"
              />
              <label
                htmlFor="limitations1"
                className="text-white text-sm ml-[10px]"
              >
                Finances
              </label>
            </div>
            <div>
              <input
                id="limitations2"
                value={"Knowledge"}
                type="radio"
                name="limitations"
                className="form-radio"
              />
              <label
                htmlFor="limitations2"
                className="text-white text-sm ml-[10px]"
              >
                Knowledge
              </label>
            </div>
            <div>
              <input
                id="limitations3"
                value={"Time"}
                type="radio"
                name="limitations"
                className="form-radio"
              />
              <label
                htmlFor="limitations3"
                className="text-white text-sm ml-[10px]"
              >
                Time
              </label>
            </div>
            <div>
              <input
                id="limitations4"
                value={"Other/Additional"}
                type="radio"
                name="limitations"
                className="form-radio"
              />
              <label
                htmlFor="limitations4"
                className="text-white text-sm ml-[10px]"
              >
                Other/Additional
              </label>
            </div>
          </div>
        </div>

        <p className="text-lg text-white mb-[45px]">
          7. Would you be interested in consulting services for your property
          redevelopment?
        </p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              id="interest1"
              value={"Yes, I would"}
              type="radio"
              name="interest"
              className="form-radio"
            />
            <label htmlFor="interest1" className="text-white text-sm ml-[10px]">
              Yes, I would
            </label>
          </div>

          <div>
            <input
              id="interest2"
              value={"No, I wouldn't"}
              type="radio"
              name="interest"
              className="form-radio"
            />
            <label htmlFor="interest2" className="text-white text-sm ml-[10px]">
              No, I wouldn't
            </label>
          </div>
        </div>

        <p className="text-lg text-white mb-[45px]">
          8. What roles does costs play in your decision to renovate or
          redevelop your property?
        </p>
        <div className="flex md:flex-row flex-col justify-start md:items-center items-start gap-20 mb-[70px]">
          <div>
            <input
              id="decision1"
              value={"Cost plays a large role"}
              type="radio"
              name="decision"
              className="form-radio"
            />
            <label htmlFor="decision1" className="text-white text-sm ml-[10px]">
              Cost plays a large role
            </label>
          </div>

          <div>
            <input
              id="decision2"
              value={"Cost plays somewhat a role"}
              type="radio"
              name="decision"
              className="form-radio"
            />
            <label htmlFor="decision2" className="text-white text-sm ml-[10px]">
              Cost plays somewhat a role
            </label>
          </div>

          <div>
            <input
              id="decision3"
              value={"Cost plays no role at all"}
              type="radio"
              name="decision"
              className="form-radio"
            />
            <label htmlFor="decision3" className="text-white text-sm ml-[10px]">
              Cost plays no role at all
            </label>
          </div>
        </div>

        <p className="text-lg text-white mb-[45px]">9. Do you have a budget?</p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              id="budget1"
              value={"No"}
              type="radio"
              name="budget"
              className="form-radio"
              onChange={() => setShowAmount(false)}
            />
            <label htmlFor="budget1" className="text-white text-sm ml-[10px]">
              No
            </label>
          </div>

          <div>
            <input
              id="budget2"
              value={"Yes"}
              type="radio"
              name="budget"
              className="form-radio"
              onChange={() => setShowAmount(true)}
            />
            <label htmlFor="budget2" className="text-white text-sm ml-[10px]">
              Yes
            </label>
          </div>
        </div>

        {/* if the answer of 9 is yes, add some more options */}
        {showAmount && (
          <>
            <p className="text-lg text-white mb-[45px]">
              9.1. What's the budget Amount?
            </p>
            <div className="flex justify-start items-center gap-20 mb-[70px]">
              <div>
                <input
                  id="amount1"
                  value={"<$10,000"}
                  type="radio"
                  name="amount"
                  className="form-radio"
                />
                <label
                  htmlFor="amount1"
                  className="text-white text-sm ml-[10px]"
                >
                  &lt;$10,000
                </label>
              </div>
              <div>
                <input
                  id="amount2"
                  value={"<$25,000"}
                  type="radio"
                  name="amount"
                  className="form-radio"
                />
                <label
                  htmlFor="amount2"
                  className="text-white text-sm ml-[10px]"
                >
                  &lt;$25,000
                </label>
              </div>
              <div>
                <input
                  id="amount3"
                  value={"<$50,000"}
                  type="radio"
                  name="amount"
                  className="form-radio"
                />
                <label
                  htmlFor="amount3"
                  className="text-white text-sm ml-[10px]"
                >
                  &lt;$50,000
                </label>
              </div>
              <div>
                <input
                  id="amount4"
                  value={">$50,000"}
                  type="radio"
                  name="amount"
                  className="form-radio"
                />
                <label
                  htmlFor="amount4"
                  className="text-white text-sm ml-[10px]"
                >
                  &gt;$50,000
                </label>
              </div>
            </div>
          </>
        )}
        <p className="text-lg text-white mb-[45px]">
          10. Do you know the initial steps of renovating or redeveloping your
          property?
        </p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              id="step1"
              value={"No"}
              type="radio"
              name="step"
              className="form-radio"
            />
            <label htmlFor="step1" className="text-white text-sm ml-[10px]">
              No
            </label>
          </div>

          <div>
            <input
              id="step2"
              value={"Yes"}
              type="radio"
              name="step"
              className="form-radio"
            />
            <label htmlFor="step2" className="text-white text-sm ml-[10px]">
              Yes
            </label>
          </div>
        </div>
        <p className="text-lg text-white mb-[45px]">
          11. What is the scope of your renovation?
        </p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              id="scope1"
              value={"No"}
              type="radio"
              name="scope"
              className="form-radio"
            />
            <label htmlFor="scope1" className="text-white text-sm ml-[10px]">
              No
            </label>
          </div>

          <div>
            <input
              id="scope2"
              value={"Yes"}
              type="radio"
              name="scope"
              className="form-radio"
            />
            <label htmlFor="scope2" className="text-white text-sm ml-[10px]">
              Yes
            </label>
          </div>
        </div>
        <p className="text-lg text-white mb-[45px]">
          12. Do you have a preferred timeline for renovations?
        </p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              id="renovation1"
              value={"No"}
              type="radio"
              name="renovation"
              className="form-radio"
            />
            <label
              htmlFor="renovation1"
              className="text-white text-sm ml-[10px]"
            >
              No
            </label>
          </div>

          <div>
            <input
              id="renovation2"
              value={"Yes"}
              type="radio"
              name="renovation"
              className="form-radio"
            />
            <label
              htmlFor="renovation2"
              className="text-white text-sm ml-[10px]"
            >
              Yes
            </label>
          </div>
        </div>

        <div className="mb-[70px]">
          <p className="text-lg text-white">
            13. What are your perceived challenges regarding multifamily
            development?
          </p>
          {/* <input
            type="text"
            name="challenges"
            className="w-full h-[50px] rounded-none p-3 mt-2"
          /> */}
          {/* checkboxes */}'
          <div className="flex flex-col flex-wrap gap-2 mt-2">
            <div className="flex justify-start items-center">
              <input
                id="challenges1"
                value={"General contracting"}
                type="checkbox"
                name="challenges"
                className="form-checkbox"
              />
              <label
                htmlFor="challenges1"
                className="text-white text-sm ml-[10px]"
              >
                General contracting
              </label>
            </div>
            <div className="flex justify-start items-center">
              <input
                id="challenges2"
                value={"Fluctuating pricing"}
                type="checkbox"
                name="challenges"
                className="form-checkbox"
              />
              <label
                htmlFor="challenges2"
                className="text-white text-sm ml-[10px]"
              >
                Fluctuating pricing
              </label>
            </div>
            <div className="flex justify-start items-center">
              <input
                id="challenges3"
                value={"Timing"}
                type="checkbox"
                name="challenges"
                className="form-checkbox"
              />
              <label
                htmlFor="challenges3"
                className="text-white text-sm ml-[10px]"
              >
                Timing
              </label>
            </div>
          </div>
        </div>

        <div className="mb-[70px]">
          <p className="text-lg text-white">
            14. What are you least concerned about regarding renovating or
            redeveloping your property?
          </p>
          {/* <input
            type="text"
            name="revelopingProperty"
            className="w-full h-[50px] rounded-none p-3 mt-2"
          /> */}

          {/* radio buttons */}
          <div className="flex justify-start items-center gap-20 mt-2">
            <div>
              <input
                id="redevelopingProperty1"
                value={"Finances"}
                type="radio"
                name="redevelopingProperty"
                className="form-radio"
              />
              <label
                htmlFor="redevelopingProperty1"
                className="text-white text-sm ml-[10px]"
              >
                Finances
              </label>
            </div>
            <div>
              <input
                id="redevelopingProperty2"
                value={"Knowledge"}
                type="radio"
                name="redevelopingProperty"
                className="form-radio"
              />
              <label
                htmlFor="redevelopingProperty2"
                className="text-white text-sm ml-[10px]"
              >
                Knowledge
              </label>
            </div>
            <div>
              <input
                id="redevelopingProperty3"
                value={"Time"}
                type="radio"
                name="redevelopingProperty"
                className="form-radio"
              />
              <label
                htmlFor="redevelopingProperty3"
                className="text-white text-sm ml-[10px]"
              >
                Time
              </label>
            </div>
            <div>
              <input
                id="redevelopingProperty4"
                value={"Other/Additional"}
                type="radio"
                name="revelopingProperty"
                className="form-radio"
              />
              <label
                htmlFor="redevelopingProperty4"
                className="text-white text-sm ml-[10px]"
              >
                Other/Additional
              </label>
            </div>
          </div>
        </div>

        <p className="text-lg text-white mb-[45px]">
          15. Is there any additional information you’d like to act on?
        </p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              id="additional1"
              value={"No"}
              type="radio"
              name="additional"
              className="form-radio"
            />
            <label
              htmlFor="additional1"
              className="text-white text-sm ml-[10px]"
            >
              No
            </label>
          </div>

          <div>
            <input
              id="additional2"
              value={"Yes"}
              type="radio"
              name="additional"
              className="form-radio"
            />
            <label
              htmlFor="additional2"
              className="text-white text-sm ml-[10px]"
            >
              Yes
            </label>
          </div>
        </div>
        <p className="text-lg text-white mb-[45px]">
          16. Are you interested in incorporating energy-efficient or
          sustainable features into the renovations?
        </p>
        <div className="flex justify-start items-center gap-20 mb-[70px]">
          <div>
            <input
              id="features1"
              value={"Yes, I'm interested"}
              type="radio"
              name="features"
              className="form-radio"
            />
            <label htmlFor="features1" className="text-white text-sm ml-[10px]">
              Yes, I'm interested
            </label>
          </div>

          <div>
            <input
              id="features2"
              value={"Not Intersted"}
              type="radio"
              name="features"
              className="form-radio"
            />
            <label htmlFor="features2" className="text-white text-sm ml-[10px]">
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
            <input
              id="forSale1"
              value={"Yes, I have"}
              type="radio"
              name="forSale"
              className="form-radio"
            />
            <label htmlFor="forSale1" className="text-white text-sm ml-[10px]">
              Yes, I have
            </label>
          </div>

          <div>
            <input
              id="forSale2"
              value={"No I've not"}
              type="radio"
              name="forSale"
              className="form-radio"
            />
            <label htmlFor="forSale2" className="text-white text-sm ml-[10px]">
              No I've not
            </label>
          </div>
        </div>

        <div className="mb-[70px]">
          <p className="text-lg text-white">
            18. How will you finance the renovation or property upgrades?
            (provide options)
          </p>
          <input
            type="text"
            name="propertyUpgrade"
            className="w-full h-[50px] rounded-none p-3 mt-2"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary px-14  py-5 ls-2 bg-[#83895C] text-white"
        >
          SUBMIT SURVEY FORM
        </button>
      </form>
    </>
  );
};

export default SurveyForm;
