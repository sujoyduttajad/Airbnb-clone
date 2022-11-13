import React from "react";
import { FacebookIcon } from "./SocialIcons";

const currYear = () => {
  const _year = new Date().getFullYear();
  return _year;
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-10">
      <section
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 sm:space-y-0 md:space-y-0 border-b
        lg:space-y-0 space-y-10 lg:px-32 lg:py-14 mx-2 py-12 bg-gray-100 text-gray-600"
      >
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Airbnb
          </h5>
          <p>
            <a className="links" href="/">
              How Airbnb works
            </a>
          </p>
          <p>
            <a
              className="links"
              href="https://news.airbnb.com/?region=India"
              target="_blank"
            >
              Newsroom
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Investors
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Careers
            </a>
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
            <a
              className="links"
              href="https://github.com/sujoyduttajad"
              target="_blank"
            >
              My GitHub Profile
            </a>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Community
          </h5>
          <p>
            <a className="links" href="/" target="_blank">
              Accessibility
            </a>
          </p>
          <p>
            <a className="links" href="/" target="_blank">
              Visit our community forum
            </a>
          </p>
          <p>
            <a className="links" href="/" target="_blank">
              Airbnb.org
            </a>
          </p>
          <p>
            <a className="links" href="/" target="_blank">
              Support Afgan refugees
            </a>
          </p>
          <p>
            <a className="links" href="/" target="_blank">
              Combat discrimination
            </a>
          </p>
          <p>
            <a
              className="links"
              href="https://sujoyduttaportfolio.gatsbyjs.io/"
              target="_blank"
            >
              My Portfolio
            </a>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Hosting
          </h5>
          <p>
            <a className="links" href="/">
              Try Hosting
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Explore hosting resources
            </a>
          </p>
          <p>
            <a className="links" href="/">
              How to host responsibly
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Privacy Policy
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Terms and Conditions
            </a>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Support
          </h5>
          <p>
            <a className="links" href="/">
              Help Centre
            </a>
          </p>
          <p>
            <a
              className="links"
              href="https://www.airbnb.co.in/aircover"
              target="_blank"
            >
              AirCover
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Safety Information
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Supporting people with disabilities
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Cancellation options
            </a>
          </p>
          <p>
            <a className="links" href="/">
              Report a neighbourhood concern
            </a>
          </p>
        </div>
      </section>
      <div className="py-4 pt-10 bg-gray-100 text-gray-600 flex flex-wrap justify-around items-center w-full">
        <p>© {currYear()} Airbnb, Inc. </p>
        <span>
          <FacebookIcon />
        </span>
        <p className="font-semibold">Developed by <span className="text-red-400">Sujoy Dutta</span></p>
      </div>
    </footer>
  );
};

export default Footer;
