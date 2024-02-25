const LandingSection = () => {
  return (
    <section
      id="home"
      className="h-[calc(100dvh-56px)] flex justify-between items-center"
    >
      <div className="basis-[60%] ">
        <p className="uppercase mb-4 text-[#608DC4] font-bold">
          best online learning experience
        </p>
        <h1 className="font-extrabold text-7xl leading-snug text-[#272444]">
          The Mentorship guide for{" "}
          <span className="text-[#608DC4]">college students</span>
        </h1>
        <p className="text-[#272444] font-bold opacity-70 mt-4">
          We will help you to get your dream job
        </p>
      </div>
      <div className="">
        <img
          src="/src/assets/landing-1.webp"
          alt="landing-1"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default LandingSection;
