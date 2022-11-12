import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 number of days</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden lg:inline-flex">
            <p className="filter-button user-select-none">Cancellation Flexibility</p>
            <p className="filter-button user-select-none">Type of Place</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
