import Link from "next/link";
import React from "react";
import { FacebookIcon, InstaIcon, TwitterIcon } from "./SocialIcons";

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
            <Link className="links" href="/">
              How Airbnb works
            </Link>
          </p>
          <p>
            <Link
              className="links"
              href="https://news.airbnb.com/?region=India"
              target="_blank"
              rel="noreferrer"
            >
              Newsroom
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Investors
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Careers
            </Link>
          </p>
          <p>
            <Link
              href="https://github.com/sujoyduttajad/Airbnb-clone"
              target="_blank"
              rel="noreferrer"
              className="links text-[#FD585E]"
            >
              Airbnb 1.0 GitHub
            </Link>
          </p>
          <p>
            <Link
              className="links"
              href="https://github.com/sujoyduttajad"
              target="_blank"
              rel="noreferrer"
            >
              My GitHub Profile
            </Link>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Community
          </h5>
          <p>
            <Link className="links" href="/" >
              Accessibility
            </Link>
          </p>
          <p>
            <Link className="links" href="/" >
              Visit our community forum
            </Link>
          </p>
          <p>
            <Link className="links" href="/" >
              Airbnb.org
            </Link>
          </p>
          <p>
            <Link className="links" href="/" >
              Support Afgan refugees
            </Link>
          </p>
          <p>
            <Link className="links" href="/" >
              Combat discrimination
            </Link>
          </p>
          <p>
            <Link
              className="links"
              href="https://sujoyduttaportfolio.gatsbyjs.io/"
              target="_blank"
              rel="noreferrer"
            >
              My Portfolio
            </Link>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 pr-5">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Hosting
          </h5>
          <p>
            <Link className="links" href="/">
              Try Hosting
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Explore hosting resources
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              How to host responsibly
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Privacy Policy
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Terms and Conditions
            </Link>
          </p>
          <p>
            <Link className="links text-[#FF385C]" href="#">
              Airbnb 2.0(Build soon)
            </Link>
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="text-gray-600 font-semibold capitalize text-lg tracking-wide">
            Support
          </h5>
          <p>
            <Link className="links" href="/">
              Help Centre
            </Link>
          </p>
          <p>
            <Link
              className="links"
              href="https://www.airbnb.co.in/aircover"
              target="_blank"
              rel="noreferrer"
            >
              AirCover
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Safety Information
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Supporting people with disabilities
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Cancellation options
            </Link>
          </p>
          <p>
            <Link className="links" href="/">
              Report a neighbourhood concern
            </Link>
          </p>
        </div>
      </section>
      <div className="py-4 pt-10 bg-gray-100 text-gray-600 flex flex-wrap justify-around items-center w-full">
        <p>© {currYear()} Airbnb, Inc. </p>
        <div className="flex justify-evenly w-32">
          <Link
            className="p-3 hover:bg-gray-200 rounded-full"
            href="https://www.facebook.com/AirbnbIndia"
            target={"_blank"}
            rel="noreferrer"
          >
            <FacebookIcon />
          </Link>
          <Link
            className="p-3 hover:bg-gray-200 rounded-full"
            href="https://twitter.com/airbnb_in"
            target={"_blank"}
            rel="noreferrer"
          >
            <TwitterIcon />
          </Link>
          <Link
            className="p-3 hover:bg-gray-200 rounded-full"
            href="https://www.instagram.com/airbnb/"
            target={"_blank"}
            rel="noreferrer"
          >
            <InstaIcon />
          </Link>
        </div>
        <p className="font-semibold mt-6 lg:mt-0 md:mt-0">
          Developed by{" "}
          <Link
            href="https://sujoyduttaportfolio.gatsbyjs.io/"
            target={"_blank"}
            rel="noreferrer"
            className="text-red-400 links"
          >
            Sujoy Dutta
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
