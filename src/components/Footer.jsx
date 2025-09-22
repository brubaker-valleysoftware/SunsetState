export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-teal py-10 md:py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:gap-10">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src="/images/long-logo.png" alt="Sunset State Junk Removal Logo" className="h-16 md:h-24 w-auto" />
        </div>
        {/* Copyright Text */}
        <div className="text-center">
          <p className="text-sand font-montserrat text-sm">Copyright © {currentYear} Sunset State Junk Removal</p>
          <p className="text-sand font-montserrat text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
