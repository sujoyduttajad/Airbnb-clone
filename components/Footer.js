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
            <a>How Airbnb works</a>
          </p>
          <p>
            <a>Newsroom</a>
          </p>
          <p>
            <a>Investors</a>
          </p>
          <p>
            <a>Careers</a>
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
            <a>Accessibility</a>
          </p>
          <p>
            <a>Visit our community forum</a>
          </p>
          <p>
            <a>Airbnb.org</a>
          </p>
          <p>
            <a>Support Afgan refugees</a>
          </p>
          <p>
            <a>Combat discrimination</a>
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
            <a>Try Hosting</a>
          </p>
          <p>
            <a>AirCover for Hosts</a>
          </p>
          <p>
            <a>Explore hosting resources</a>
          </p>
          <p>
            <a>How to host responsibly</a>
          </p>
          <p>
            <a>Privacy Policy</a>
          </p>
          <p>
            <a>Terms and Conditions</a>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Support
          </h5>
          <p>
            <a>Help Centre</a>
          </p>
          <p>
            <a>AirCover</a>
          </p>
          <p>
            <a>Safety Information</a>
          </p>
          <p>
            <a>Supporting people with disabilities</a>
          </p>
          <p>
            <a>Cancellation options</a>
          </p>
          <p>
            <a>Report a neighbourhood concern</a>
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
