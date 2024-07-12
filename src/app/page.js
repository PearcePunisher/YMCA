import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full h-[764px] bg-cover bg-[center_top_-10rem]" style={{ backgroundImage: "url('http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/Homepage-Hero-Background.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Cachet Pro'] uppercase leading-tight">
          Find your y today
        </h1>
        <div className="flex flex-wrap justify-center mt-10 gap-6">
          <div className="w-64 p-6 bg-fuchsia-700 bg-opacity-60 rounded-xl flex flex-col items-center text-center backdrop-blur-sm">
            <h2 className="text-2xl font-medium font-['Cachet Pro'] mb-2">Our Impact</h2>
            <p className="text-xs font-normal font-['Verdana'] mb-4">
              Discover how, together, we impact our community.
            </p>
            <Link href="/see-our-impact">
              <button className="inline-flex items-center justify-center px-6 py-2.5 border border-white rounded-full text-sm font-['Cachet Pro'] leading-tight tracking-tight">
                See Our Impact
              </button>
            </Link>
          </div>
          <div className="w-64 p-6 bg-red-600 bg-opacity-60 rounded-xl flex flex-col items-center text-center backdrop-blur-sm">
            <h2 className="text-2xl font-medium font-['Cachet Pro'] mb-2">Donate</h2>
            <p className="text-xs font-normal font-['Verdana'] mb-4">
              We're the oldest nonprofit in COS – help make an impact in your community with us today.
            </p>
            <Link href="/get-involved">
              <button className="inline-flex items-center justify-center px-6 py-2.5 border border-white rounded-full text-sm font-['Cachet Pro'] leading-tight tracking-tight">
                Get Involved
              </button>
            </Link>
          </div>
          <div className="w-64 p-6 bg-teal-600 bg-opacity-60 rounded-xl flex flex-col items-center text-cente backdrop-blur-sm">
            <h2 className="text-2xl font-medium font-['Cachet Pro'] mb-2">Programs</h2>
            <p className="text-xs font-normal font-['Verdana'] mb-4">
              Redefining connection with our community.
            </p>
            <Link href="/our-programs">
              <button className="inline-flex items-center justify-center px-6 py-2.5 border border-white rounded-full text-sm font-['Cachet Pro'] leading-tight tracking-tight">
                Our Programs
              </button>
            </Link>
          </div>
          <div className="w-64 p-6 bg-amber-400 bg-opacity-60 rounded-xl flex flex-col items-center text-center backdrop-blur-sm">
            <h2 className="text-2xl font-medium font-['Cachet Pro'] mb-2">Membership</h2>
            <p className="text-xs font-normal font-['Verdana'] mb-4">
              Join the Y and experience more than a gym.
            </p>
            <Link href="/join-the-y">
              <button className="inline-flex items-center justify-center px-6 py-2.5 border border-white rounded-full text-sm font-['Cachet Pro'] leading-tight tracking-tight">
                Join the Y
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
