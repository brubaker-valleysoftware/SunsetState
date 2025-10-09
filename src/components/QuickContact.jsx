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
        <h2 className="text-deepteal text-4xl font-montserrat font-bold text-center mb-10">
          Proudly Serving the East Valley of Arizona
        </h2>
        {/* Two cards container */}
        <div className="grid md:grid-cols-2 gap-10 md:w-3/4 mx-auto">
          {/* Get a Quote Card */}
          <div
            className="bg-deepteal rounded-md border border-black border-1 p-8 text-center"
            style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)" }}
          >
            <h3 className="text-sand text-2xl md:text-3xl font-montserrat font-bold mb-2">GET A QUOTE</h3>
            <p className="text-sand font-medium font-montserrat mb-6">Fill out our form to get a quick estimate.</p>
            <button
              onClick={scrollToContact}
              className="bg-orange text-sand font-montserrat md:text-lg font-semibold px-8 py-2 rounded-lg hover:text-deepteal transition-opacity"
            >
              GET A FAST ESTIMATE
            </button>
          </div>
          {/* Contact Us Card */}
          <div
            className="bg-deepteal rounded-md border border-black border-1 p-8 text-center"
            style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)" }}
          >
            <h3 className="text-sand text-2xl md:text-3xl font-montserrat font-bold mb-2">CONTACT US</h3>
            <p className="text-sand font-medium font-montserrat mb-6">We're here to help. Call or text us.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:480-942-3373"
                className="w-4/5 mx-auto md:w-full bg-orange text-sand font-montserrat md:text-lg font-semibold px-8 py-2 rounded-lg hover:text-deepteal transition-opacity text-center"
              >
                CALL US
              </a>

              <a
                href="sms:480-942-3373"
                className="w-4/5 mx-auto md:w-full bg-orange text-sand font-montserrat md:text-lg font-semibold px-8 py-2 rounded-lg hover:text-deepteal transition-opacity text-center"
              >
                TEXT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
