function Hero() {
  return (
    <div className="flex justify-center gap-6">
      <div className="w-1/2 h-svh overflow-hidden relative">
        <img
          src="https://unknownlondon.com/cdn/shop/files/Website_keef_banner.jpg?v=1706037043&width=1320"
          alt=""
          className="w-full h-full object-cover transform scale-125 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="font-bold text-white text-5xl">NEW ARRIVALS</span>
        </div>
      </div>
      <div className="relative w-1/2 h-svh overflow-hidden">
        <img
          src="https://unknownlondon.com/cdn/shop/files/Unknown_Lookbook_0172.jpg?v=1696437392&width=1320"
          alt=""
          className="w-full h-full object-cover transform scale-125 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
          <span className="font-bold text-white text-5xl">AW23</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
