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
          <h5 className="font-bold capitalize">AIRBNB</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Careers</p>
          <p>Airbnb Plus</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="font-bold capitalize">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Visit our community forum</p>
          <p>Airbnb.org</p>
          <p>Support Afgan refugees</p>
          <p>Combat discrimination</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="font-bold capitalize">HOSTING</h5>
          <p>Try Hosting</p>
          <p>AirCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>How to host responsibly</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold capitalize">SUPPORT</h5>
          <p>Help Centre</p>
          <p>AirCover</p>
          <p>Safety Information</p>
          <p>Supporting people with disabilities</p>
          <p>Cancellation options</p>
          <p>Report a neighbourhood concern</p>
        </div>
      </section>
      <div className="py-4 pt-10 bg-gray-100 text-gray-600 flex justify-center items-center w-full">
        <p>© {currYear()} Airbnb Inc. </p>
      </div>
    </footer>
  );
};

export default Footer;
