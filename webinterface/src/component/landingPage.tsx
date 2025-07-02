import Description from "@/utils/title";
const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-[#3e99f4] rounded-full"></div>

            <span className="text-lg font-semibold text-gray-800">
              TeleSync
            </span>
          </div>
          <nav className="hidden md:flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-gray-900">
              Invest
            </a>
            <a href="#" className="hover:text-gray-900">
              Later
            </a>
            <a href="#" className="hover:text-gray-900">
              Spend
            </a>
            <a href="#" className="hover:text-gray-900">
              Early
            </a>
            <a href="#" className="hover:text-gray-900">
              Earn
            </a>
            <a href="#" className="hover:text-gray-900">
              Grow
            </a>
            <a href="#" className="hover:text-gray-900">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-[#3e99f4] text-white rounded-lg font-medium hover:bg-[#3e99f4] transition"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {Description[0]}
          </h1>
          <p className="text-gray-600 mb-6">{Description[1]}</p>
          <a
            href="#"
            className="px-6 py-3 bg-[#3e99f4] text-white font-medium text-lg rounded-lg hover:bg-[#3e99f4] transition"
          >
            Get started
          </a>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8 w-24 h-24 bg-[#3e99f4] rounded-full"></div>
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#3e99f4] rounded-full"></div>
          <img
            src="/background.png"
            alt="Acorns Mobile"
            className="relative z-10 mx-auto"
          />
          <div className="absolute -left-8 top-50 w-10 h-10 bg-[#3e99f4] rounded-full"></div>
          <div className="absolute -right-8 top-50 w-10 h-10 bg-[#3e99f4] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
