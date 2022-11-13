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
          <a>How Airbnb works</a>
          <a>Newsroom</a>
          <a>Investors</a>
          <a>Careers</a>
          <a>Airbnb Plus</a>
          <a href="https://github.com/sujoyduttajad" target="_blank">
            My Github Profile
          </a>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Community
          </h5>
          <a>Accessibility</a>
          <a>Visit our community forum</a>
          <a>Airbnb.org</a>
          <a>Support Afgan refugees</a>
          <a>Combat discrimination</a>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Hosting
          </h5>
          <a>Try Hosting</a>
          <a>AirCover for Hosts</a>
          <a>Explore hosting resources</a>
          <a>How to host responsibly</a>
          <a>Privacy Policy</a>
          <a>Terms and Conditions</a>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Support
          </h5>
          <a>Help Centre</a>
          <a>AirCover</a>
          <a>Safety Information</a>
          <a>Supporting people with disabilities</a>
          <a>Cancellation options</a>
          <a>Report a neighbourhood concern</a>
        </div>
      </section>
      <div className="py-4 pt-10 bg-gray-100 text-gray-600 flex justify-center items-center w-full">
        <p>© {currYear()} Airbnb Inc. </p>
      </div>
    </footer>
  );
};

export default Footer;
