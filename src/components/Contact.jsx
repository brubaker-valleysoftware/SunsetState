import { Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-lightyellow text-darkgreen py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="font-baskerville text-[40px] font-bold">I'd love to work with you!</h2>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-px bg-darkgreen mx-20 h-48"></div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div>
            <p className="font-worksans uppercase font-medium mb-2 tracking-wide">Email</p>
            <a href="mailto:yourdesignsby.em@gmail.com" className="font-worksans hover:underline font-semibold">
              yourdesignsby.em@gmail.com
            </a>
          </div>

          <div>
            <p className="font-worksans uppercase font-medium mb-2 tracking-wide">Social</p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-green-700"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
