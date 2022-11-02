import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import fsPromises from "fs/promises";
import path from "path";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";

// This is running inside a server
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "cities.json");
  const jsonData = await fsPromises.readFile(filePath);
  const exploreData = JSON.parse(jsonData);

  return {
    props: {
      exploreData,
    },
  };
}

export default function Home({ exploreData }) {
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
        {/* Small Card */}
        <section className="pt-6 mb-8">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.nearbyCities?.map((item, index) => (
              <SmallCard
                key={index}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        {/* Medium Card */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {exploreData.getaways?.map((item, index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        {/* Large Card */}
        <section>
          <div>
            <LargeCard />
          </div>
        </section>
      </main>
    </div>
  );
}
