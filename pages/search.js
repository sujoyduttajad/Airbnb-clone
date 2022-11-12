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
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg 
            active:scale-95 active:bg-red-400 active:text-white transition transform duration-100">
              Cancellation Flexibility
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
