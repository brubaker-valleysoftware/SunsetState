export default function Header() {
  return (
    <header
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/mainhero.png')" }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Main heading */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-baskerville text-6xl md:text-[86px] font-bold text-lightyellow leading-tight tracking-wider px-4">
         SUNSET STATE JUNK REMOVAL
        </h1>
      </div>
    </header>
  );
}
