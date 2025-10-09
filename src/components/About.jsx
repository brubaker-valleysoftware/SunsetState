"use client";

export default function About() {
  return (
    <section
      className="relative py-20 lg:py-28 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://bksiqqy1d3.ufs.sh/f/yxB68CcNubwQazK6Vn9X1KCyvDeaTSQOmcnUouZ4iw5bf2tl)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content - 60% */}
          <div className="w-full md:pl-20 text-center md:text-left px-4 relative z-10 md:mt-12">
            <div className="bg-black bg-opacity-40 rounded-md p-6 md:p-8">
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-sand mb-3">
                SIMPLE AND STRESS-FREE
              </h2>
              <p className="font-montserrat text-lg text-sand leading-relaxed max-w-5xl mb-6">
                We're a family-owned junk removal company serving the East Valley of Arizona. We are committed to
                showing up on time, working hard, and treating your home or business with respect. Whether it's clearing
                out old furniture, hauling away appliances, or tackling yard debris, we make the process simple and
                stress-free. With fair pricing and a focus on reliable service, we're here to help our neighbors create
                clean, clutter-free spaces.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                <a
                  href="tel:480-942-3373"
                  className="bg-deepteal text-sand font-montserrat text-lg font-semibold px-8 py-2 rounded-lg transition-colors duration-300 hover:text-orange w-full md:w-auto text-center"
                >
                  CALL US
                </a>
                <a
                  href="sms:480-942-3373"
                  className="bg-deepteal text-sand font-montserrat text-lg font-semibold px-8 py-2 rounded-lg transition-colors duration-300 hover:text-orange w-full md:w-auto text-center"
                >
                  TEXT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
