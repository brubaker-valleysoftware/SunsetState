"use client";

export default function QuickContact() {
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
    <section className="bg-sand py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <h2 className="text-teal text-3xl md:text-4xl font-montserrat font-bold text-center mb-16">
          Proudly Serving the East Valley of Arizona
        </h2>
        {/* Two cards container */}
        <div className="grid md:grid-cols-2 gap-12 md:w-3/4 mx-auto">
          {/* Get a Quote Card */}
          <div className="bg-red rounded-md shadow-2xl border border-black border-2 p-8 text-center">
            <h3 className="text-sand text-3xl font-montserrat font-bold mb-8">GET A QUOTE</h3>
            <button 
              onClick={scrollToContact}
              className="bg-teal text-sand font-montserrat text-lg font-semibold px-8 py-3 rounded-lg hover:text-red transition-opacity"
            >
              REACH OUT
            </button>
          </div>
          {/* Contact Us Card */}
          <div className="bg-red rounded-md shadow-2xl border border-black border-2 p-8 text-center">
            <h3 className="text-sand text-3xl font-montserrat font-bold mb-8">CONTACT US</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:480-942-3373"
                className="bg-teal text-sand font-montserrat text-lg font-semibold px-8 py-3 rounded-lg hover:text-red transition-opacity text-center"
              >
                CALL
              </a>

              <a
                href="sms:480-942-3373"
                className="bg-teal text-sand font-montserrat text-lg font-semibold px-8 py-3 rounded-lg hover:text-red transition-opacity text-center"
              >
                TEXT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}