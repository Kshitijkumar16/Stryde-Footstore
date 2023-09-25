
import Nav from "./components/Nav";
import { CustomerReviews, Footer, Hero, PopularProducts, Services, Subscribe, SpecialOffer, SuperQuality } from "./sections";

const App = () => (
  <main className="relative bg-[#fff7f7] max-w-[2000px]">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding-x sm:py-32 py-16 w-full">
      <CustomerReviews />
    </section>
    <section className="padding">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;