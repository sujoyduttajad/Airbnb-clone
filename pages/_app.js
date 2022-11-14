import '../styles/globals.css';
import "tailwindcss/tailwind.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);

function MyApp({ Component, pageProps }) {
  return <Component className="font-raleway" {...pageProps} />
}

export default MyApp
