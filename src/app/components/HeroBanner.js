"use client";

const HeroBanner = ({ backgroundImage, title }) => {
  return (
    <div className="relative w-full h-[40vh] lg:h-[30vh] flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-[#0089d0]/50 h-full"></div>
      <div className="absolute lg:left-24 lg:bottom-12 transform -translate-y-1/2 text-[#f7f9ff] text-xl lg:text-[56px] font-bold font-bookC uppercase leading-[64px]">
        {title}
      </div>
    </div>
  );
};

export default HeroBanner;
