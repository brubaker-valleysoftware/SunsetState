import { Instagram, Facebook, Youtube } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact-form" className="">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Side - Information (40%) */}
        <div className="w-full md:w-2/5 bg-sand px-6 md:px-12 py-12 md:py-20 flex flex-col justify-center">
          <div className="md:max-w-sm md:pl-8 mx-auto">
            <h1 className="text-orange font-montserrat text-4xl md:text-5xl font-bold mb-6 md:mb-12">Get in Touch</h1>

            <div className="space-y-8">
              {/* Areas We Serve */}
              <div>
                <h3 className="text-black font-montserrat font-bold text-lg mb-1 uppercase">Areas We Serve</h3>
                <p className="text-black font-montserrat">Apache, Junction, Coolidge, Florence, Mesa, Gilbert, Chandler, Queen Creek, and San Tan Valley</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-black font-montserrat font-bold text-lg mb-1 uppercase">Email Address</h3>
                <a
                  href="mailto:info@sunsetstatejunkremoval.com"
                  className="text-black font-montserrat hover:text-orange transition-colors"
                >
                  info@sunsetstatejunkremoval.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-black font-montserrat font-bold text-lg mb-1 uppercase">Phone Number</h3>
                <a href="tel:480-942-3373" className="text-black font-montserrat hover:text-orange transition-colors">
                  480-942-3373
                </a>
              </div>

              {/* Social Media */}
              <div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com/sunsetstatejunkremoval"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-orange transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61580610920284"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-orange transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://youtube.com/@sunsetstatejunkremoval"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-orange transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Area (60%) */}
        <div
          className="w-full min-h-[500px] md:w-3/5 relative bg-center"
          style={{ backgroundImage: "url(/images/bg-placeholder.png)" }}
        >
          {/* Placeholder for future form component */}
          <div className="">
            <div className="text-black text-xl font-montserrat">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
