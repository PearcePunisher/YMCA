const JoinOurTeam = () => {
  return (
    <div
      className="w-full h-auto px-4 py-24 flex flex-col justify-center items-center bg-blue-700 mb-20"
      style={{
        backgroundImage: `url(http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/Desktop-Full-Width-CTA.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="flex flex-col justify-center items-center gap-2.5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-white text-4xl font-bookC leading-tight text-center md:text-left">
            Join our team! We’re Hiring!
          </div>
          <div className="h-10 bg-[#0060af] rounded-full flex justify-center items-center">
            <div className="px-6 py-2.5 text-center text-white text-sm font-bookC leading-tight tracking-tight">
              See Current Job Openings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
