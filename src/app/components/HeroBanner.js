"use client";

const HeroBanner = ({ backgroundImage, title }) => {
  return (
    <div className="relative w-full h-[283px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-[#0089d0]/50"></div>
      <div className="absolute left-24 bottom-6 transform -translate-y-1/2 text-[#f7f9ff] text-[57px] font-bold font-bookC uppercase leading-[64px]">
        {title}
      </div>
    </div>
  );
};

export default HeroBanner;
