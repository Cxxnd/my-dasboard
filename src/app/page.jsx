import Footer from "@/component/Navbar/footer";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-4">
      {/* Main Content Card - Updated for better mobile spacing */}
      <div className="text-center bg-gradient-to-b from-secondary to-tembus w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[40rem] h-48 sm:h-60 md:h-90 rounded-3xl flex justify-center items-center shadow-2xl shadow-black/50 mx-4 transition-all hover:scale-1.02 hover:shadow-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-6">
          Welcome to My Dashboard
        </h1>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;