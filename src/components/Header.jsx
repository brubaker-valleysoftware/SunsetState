"use client";

export default function Header() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="relative h-[500px] md:h-[640px] flex items-center bg-cover bg-center bg-no-repeat">
      {/* Background Video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content container */}
      <div className="relative z-10 px-4 flex flex-col items-start max-w-6xl mx-auto w-full">
        {/* Main heading */}
        <div className="mb-4">
          <h1 className="font-montserrat text-[46px] md:text-[74px] font-bold leading-tight mt-20">
            <span className="text-red">SUNSET </span>
            <span className="text-teal">STATE</span>
            <br />
          </h1>
          <h1 className="font-montserrat text-[42px] md:text-[74px] font-bold leading-tight text-orange md:-mt-4">
            JUNK REMOVAL
          </h1>
          <p className="font-montserrat text-sand md:text-2xl font-semibold">WHERE CLEAN SPACES MEET DESERT SUNSETS</p>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="bg-deepteal text-sand font-montserrat text-lg font-semibold px-4 md:px-8 py-2 rounded-lg transition-colors duration-300 hover:text-orange"
        >
          GET A FAST ESTIMATE
        </button>
      </div>
    </header>
  );
}
