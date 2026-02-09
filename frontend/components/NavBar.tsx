import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-center">
        <div className="flex space-x-8 mt-3 sm:mt-0">
          <Link
            href="/" 
            className="text-white font-medium relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link 
            href="#experience" 
            className="text-white font-medium relative group"
          >
            Experience
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link 
            href="#projects" 
            className="text-white font-medium relative group"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
