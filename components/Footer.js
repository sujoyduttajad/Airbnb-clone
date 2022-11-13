import React from "react";

const currYear = () => {
  const _year = new Date().getFullYear();
  return _year;
};

const Footer = () => {
  return (
    <footer>
      <section
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 sm:space-y-0 md:space-y-0 
        lg:space-y-0 space-y-10 lg:px-32 lg:py-14 px-10 py-12 bg-gray-100 text-gray-600"
      >
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Airbnb
          </h5>
          <p>
            <a href="/">How Airbnb works</a>
          </p>
          <p>
            <a href="https://news.airbnb.com/?region=India" target="_blank">Newsroom</a>
          </p>
          <p>
            <a href="/">Investors</a>
          </p>
          <p>
            <a href="/">Careers</a>
          </p>
          <p>
            <a
              href="https://github.com/sujoyduttajad/Airbnb-clone"
              target="_blank"
            >
              Airbnb-Clone GitHub
            </a>
          </p>
          <p>
            <a href="https://github.com/sujoyduttajad" target="_blank">
              My GitHub Profile
            </a>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Community
          </h5>
          <p>
            <a href="/" target="_blank">
              Accessibility
            </a>
          </p>
          <p>
            <a href="/" target="_blank">
              Visit our community forum
            </a>
          </p>
          <p>
            <a href="/" target="_blank">
              Airbnb.org
            </a>
          </p>
          <p>
            <a href="/" target="_blank">
              Support Afgan refugees
            </a>
          </p>
          <p>
            <a href="/" target="_blank">
              Combat discrimination
            </a>
          </p>
          <p>
            <a href="https://sujoyduttaportfolio.gatsbyjs.io/" target="_blank">
              My Portfolio
            </a>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Hosting
          </h5>
          <p>
            <a href="/">Try Hosting</a>
          </p>
          <p>
            <a href="/">Explore hosting resources</a>
          </p>
          <p>
            <a href="/">How to host responsibly</a>
          </p>
          <p>
            <a href="/">Privacy Policy</a>
          </p>
          <p>
            <a href="/">Terms and Conditions</a>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Support
          </h5>
          <p>
            <a href="/">Help Centre</a>
          </p>
          <p>
            <a href="https://www.airbnb.co.in/aircover" target="_blank">
              AirCover
            </a>
          </p>
          <p>
            <a href="/">Safety Information</a>
          </p>
          <p>
            <a href="/">Supporting people with disabilities</a>
          </p>
          <p>
            <a href="/">Cancellation options</a>
          </p>
          <p>
            <a href="/">Report a neighbourhood concern</a>
          </p>
        </div>
      </section>
      <div className="py-4 pt-10 bg-gray-100 text-gray-600 flex justify-center items-center w-full">
        <p>© {currYear()} Airbnb Inc. </p>
      </div>
    </footer>
  );
};

export default Footer;
