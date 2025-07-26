import Clients from "./components/client";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroWithSearch from "./components/hello";
import PropertyCard from './components/PropertyCard';

function App() {
  return (
    <>
      <Header />
  <HeroWithSearch />
 <Clients/>
<div className="min-h-screen bg-white p-6">
  {/* Title - separate */}
  <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Featured Properties
  </h1>

  {/* Cards container - horizontal row */}
  <div className="flex flex-row items-start justify-center gap-8 flex-wrap">
    <PropertyCard
      isAvailable={true}
      price={550000}
      title="Modern Studio Apartment"
      location="Kigali, Rwanda"
      imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      rightBg="#1e293b"
    />

    <PropertyCard
      isAvailable={false}
      price={420000}
      title="Family Home in Musanze"
      location="Musanze, Rwanda"
      imageUrl="https://images.unsplash.com/photo-1560448070-c042b7b4f7a7"
      rightBg="#334155"
    />
  </div>
</div>



 <Footer/>

  
  
  </>

  );
}

export default App;
