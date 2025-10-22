"use client";

export default function CTA() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/bg-placeholder.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-sand text-4xl md:text-5xl font-montserrat font-bold mb-6">Need Junk Removal?</h1>

        <button
          onClick={scrollToContact}
          className="bg-red text-sand font-montserrat text-lg font-semibold px-8 py-2 rounded-lg transition-colors duration-300 hover:text-teal"
        >
          GET A FAST ESTIMATE
        </button>
      </div>
    </section>
  );
}
