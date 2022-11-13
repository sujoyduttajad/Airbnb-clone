import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import fsPromises from "fs/promises";
import path from "path";

export async function getServerSideProps() {
    const filePath = path.join(process.cwd(), "airbnb.json");
    const jsonData = await fsPromises.readFile(filePath);
    const searchResults = JSON.parse(jsonData);

    return {
        props: {
            searchResults
        }
    }

}

function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);    
  const { location, startDate, endDate, noOfGuests } = router.query;

  const rangeFunc = () => {
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    return `${formattedStartDate} - ${formattedEndDate}`;
  };

  const range = rangeFunc();

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${noOfGuests} ${
          noOfGuests > 1 ? "guests" : "guest"
        }`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays from {range} - for {noOfGuests}{" "}
            {noOfGuests > 1 ? "guests" : "guest"}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <button className="filter-button user-select-none">
              Cancellation Flexibility
            </button>
            <button className="filter-button user-select-none">
              Type of Place
            </button>
            <button className="filter-button user-select-none">Price</button>
            <button className="filter-button user-select-none">
              Rooms and Beds
            </button>
            <button className="filter-button user-select-none">
              More filters
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
