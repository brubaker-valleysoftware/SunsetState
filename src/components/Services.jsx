export default function Services() {
  const junkRemovalServices = [
    "Furniture removal",
    "Appliance removal",
    "Electronics recycling",
    "Household clutter",
    "Garage cleanouts",
    "Attic cleanouts",
    "Basement cleanouts",
    "Estate cleanouts",
    "Hoarder cleanouts",
    "Eviction cleanouts",
    "Storage units",
    "Office cleanouts",
    "Retail cleanouts",
    "Construction debris",
    "Yard waste",
    "Storm debris",
    "Shed removal",
    "Hot Tub removal",
    "Playset removal",
    "Trampoline removal",
    "Patio furniture",
    "Scrap metal",
    "Tire pickup",
    "Mattress recycling",
    "Cardboard removal",
    "Pallet pickup",
    "Curbside pickup",
    "Donation pickup",
    "Event cleanup",
    "Illegal dumping",
    "Encampment cleanup",
    "Site cleanup",
    "Debris hauling",
    "Concrete hauling",
    "Roofing debris",
    "Warehouse cleanout",
    "HOA pickups",
    "Realtor cleanout",
    "Landscaping haul",
    "Remodel debris",
  ];

  const demolitionServices = [
    "Cabinet removal",
    "Carpet removal",
    "Shelving removal",
    "Shed demo",
    "Hot Tub demo",
    "Deck removal",
    "Fence removal",
    "Post removal",
    "Playset demo",
    "Paver removal",
    "Pergola demo",
    "Gazebo demo",
    "Treehouse demo",
  ];

  return (
    <section className="bg-sand py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <h4 className="text-teal text-4xl md:text-5xl font-montserrat font-bold text-center mb-10 md:mb-16">Services</h4>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Junk Removal Section */}
          <div className="bg-white rounded-md p-8 md:col-span-2">
            <h2 className="text-orange text-2xl md:text-3xl font-montserrat font-bold text-center mb-6">
              Junk Removal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 justify-items-center">
              {junkRemovalServices.map((service, index) => (
                <div key={index} className="text-teal font-montserrat text-md font-semibold">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Demolition Section */}
          <div className="bg-white rounded-md p-8 md:col-span-1">
            <h2 className="text-orange text-2xl md:text-3xl font-montserrat font-bold text-center mb-6">
              Light Demolition
            </h2>
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 gap-2 text-center">
                {demolitionServices.map((service, index) => (
                  <div key={index} className="text-teal font-montserrat text-md font-semibold">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
