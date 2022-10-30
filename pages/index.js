import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
// import Image from 'next/image'

export default function Home({ exploreData }) {
  console.log(exploreData);
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {exploreData !== undefined && exploreData.content.detailed.map((item) => (
            <h1>{item.city}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

// This is running inside a server
export async function getStaticProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com'
    }
  };
  const exploreData = await fetch(
    "https://mashvisor-api.p.rapidapi.com/rental-rates?state=CA&source=airbnb&city=Los%20Angeles&zip_code=90291", options
  ).then(res => res.json())
  .catch(err => console.error(err));

  return {
    props: {
      exploreData,
    },
  };
}
