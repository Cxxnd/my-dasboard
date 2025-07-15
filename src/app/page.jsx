import Footer from "@/component/Navbar/footer";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <div 
      className="text-center bg-gradient-to-b from-secondary to-tembus sm:h-80 sm:w-150 md:h-100 md:w-200 h-60 w-120 rounded-3xl justify-center items-center flex shadow-2xl shadow-black/50"
      >
          <h1 className="text-4xl font-bold text-white">Welcome to My Dashboard</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home