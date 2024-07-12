'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = [
  { id: 1, name: 'Programs', path: '/programs' },
  { id: 2, name: 'Locations', path: '/locations' },
  { id: 3, name: 'YMCA Events', path: '/events' },
  { id: 4, name: 'Find Classes', path: '/classes' },
  { id: 5, name: 'Camps', path: '/camps' },
  { id: 6, name: 'Careers', path: '/careers' },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <nav className="w-full bg-zinc-800 bg-opacity-90 border-t-2 border-sky-600 px-4 py-2.5 flex justify-center items-center absolute z-10">
      <div className="container w-full mx-auto flex justify-between items-center">
        <div className="flex gap-6">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.path} className={isActive(link.path) ? 'text-blue-300' : 'text-white'}>
              <div className="text-xl font-medium font-['Cachet Pro'] leading-7">{link.name}</div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="h-9 bg-sky-600 rounded-full flex items-center px-6 py-2.5">
            <Link href="/give" className="text-center text-white text-sm font-['Cachet Pro'] leading-tight tracking-tight">
              Give
            </Link>
          </div>
          <div className="h-9 bg-sky-700 rounded-full flex items-center px-6 py-2.5">
            <Link href="/join-today" className="text-center text-white text-sm font-['Cachet Pro'] leading-tight tracking-tight">
              Join Today
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
