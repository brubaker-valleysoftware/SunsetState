export default function About() {
  return (
    <section className="bg-yellow-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Photo Side - 40% */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-200">
              <img src="/images/Headshot.jpg" alt="Emily - Designer" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:flex md:justify-center md:w-px">
            <div className="w-px h-80 bg-darkgreen"></div>
          </div>

          {/* Text Content - 60% */}
          <div className="w-full md:w-3/5 md:pl-20 text-center md:text-left mt-20 md:mt-0 px-4">
            <h2 className="font-baskerville text-4xl md:text-5xl font-bold text-green mb-3">Hi, I'm Emily</h2>
            <p className="font-worksans text-lg text-green leading-relaxed max-w-2xl">
              the designer behind Your Designs by Em. With years of experience in floorplans, elevations, and 3D
              renderings, I specialize in helping design concepts take shape with clarity and style. I collaborate with
              designers everywhere to craft renderings and plans that showcase their vision with precision. I work with
              clients nationwide to deliver visuals that make every project shine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}