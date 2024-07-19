const LocationInfo = () => {
  return (
    <div className="w-full max-w-xl flex flex-col justify-center items-start gap-7">
      <div className="w-full h-48 relative flex flex-col justify-center items-center gap-2.5">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full flex justify-center items-center gap-3">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12">
                {/* Add an icon here if needed */}
              </div>
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <div className="text-slate-900 text-2xl font-medium font-bookC leading-9">
                Briargate, Colorado Springs
              </div>
              <div className="text-slate-900 text-xs font-normal font-['Verdana'] tracking-wide">
                4025 Family Place
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-center items-center gap-6 mt-4">
            <button className="rounded-full border border-slate-900 px-6 py-2.5 text-slate-900 text-sm font-bookC leading-tight tracking-tight">
              See All Locations
            </button>
            <div className="flex items-center gap-2">
              {/* Add an icon here if needed */}
              <p className="text-slate-900 text-xs font-normal font-['Verdana'] tracking-wide">
                Use Your Location
              </p>
            </div>
          </div>
          <div className="absolute top-20 left-0 w-full flex justify-center items-end gap-2.5 mt-2">
            <input type="text" placeholder="Enter your zip code" className="w-full h-9 border-b-2 px-4 text-slate-900 text-sm font-bookC leading-tight tracking-tight bg-transparent" />
            <button className="rounded-full border border-slate-900 px-6 py-2.5 text-slate-900 text-sm font-bookC leading-tight tracking-tight">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
