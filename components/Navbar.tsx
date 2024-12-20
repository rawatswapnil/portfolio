// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-8">
        <div className="text-xl font-bold">Swapnil Rawat</div>
        <div className="space-x-8">
          <Link href="#about" className="hover:text-primary">
            About
          </Link>
          <Link href="#projects" className="hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;