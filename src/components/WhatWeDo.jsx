export default function WhatWeDo() {
  const services = [
    {
      icon: <img src="/icons/truck-sand.png" alt="Truck" className="w-[120px] h-[120px]" />,
      title: "RESIDENTIAL",
      subtitle: "JUNK REMOVAL",
    },
    {
      icon: <img src="/icons/trash-sand.png" alt="Trash" className="w-[100px] h-[100px]" />,
      title: "COMMERCIAL",
      subtitle: "JUNK REMOVAL",
    },
    {
      icon: <img src="/icons/pickup-sand.png" alt="Pickup" className="w-[140px] h-[160px]" />,
      title: "HAULING",
      subtitle: "SERVICES",
    },
    {
      icon: <img src="/icons/guy-sand.png" alt="Guy" className="w-[120px] h-[120px]" />,
      title: "LIGHT",
      subtitle: "DEMOLITION",
    },
  ];

  return (
    <section className="bg-sand py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <h1 className="text-teal text-4xl md:text-5xl font-montserrat font-bold text-center mb-16">What We Do</h1>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon with orange circle background */}
              <div className="bg-orange rounded-full w-44 h-44 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Service text */}
              <div className="">
                <p className="text-teal font-montserrat font-bold text-xl md:text-2xl uppercase">{service.title}</p>
                <p className="text-teal font-montserrat font-bold text-xl md:text-2xl uppercase">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
