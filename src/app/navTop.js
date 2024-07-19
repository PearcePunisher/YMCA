const SubHeader = () => {
  return (
    <div className="w-full mx-auto bg-gray-800 px-4 py-3 flex flex-col justify-center items-center ">
      <div className="container w-full mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-12 flex justify-center items-center">
            <img
              src="http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/YMCA_Logo.png"
              alt="YMCA Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-white text-2xl font-medium font-bookC leading-9">
              <a href="/" className="text-white">
                YMCA of the Pikes Peak Region
              </a>
            </div>
            <div className="text-white text-xs font-bookC leading-none tracking-wide">
              <a href="/" className="text-white">
                A 501(c)(3) Non-Profit Organization
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex justify-center items-center">
            {/* Replace with the search icon */}
            <img
              src="http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/SearchIcon.png"
              alt="Search"
              className="w-6 h-6 aspect-square"
            />
          </button>
          <div className="h-9 rounded-full border border-sky-500 flex items-center px-6 py-2.5">
            <a
              href="/my-account"
              className="text-center text-white text-sm font-bookC leading-tight tracking-tight">
              My Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
