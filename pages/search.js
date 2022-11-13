import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search() {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate));
  const formattedEndDate = format(new Date(endDate))

  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for {noOfGuests} guests</p>
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
