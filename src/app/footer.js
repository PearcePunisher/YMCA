'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = [
  { id: 1, name: 'Programs', path: '/programs' },
  { id: 2, name: 'Schedules', path: '/schedules' },
  { id: 3, name: 'Locations', path: '/locations' },
  { id: 4, name: 'Financial Assistance', path: '/financial-assistance' },
  { id: 5, name: 'About', path: '/about' },
  { id: 6, name: 'Careers', path: '/careers' },
  { id: 7, name: 'Contact', path: '/contact' },
  { id: 8, name: 'My Account', path: '/my-account' },
  { id: 9, name: 'Volunteer', path: '/volunteer' },
  { id: 10, name: 'Events', path: '/events' },
  { id: 11, name: 'Support', path: '/support' },
  { id: 12, name: 'Give', path: '/give' },
  { id: 13, name: 'Join the Y', path: '/join-the-y' },
];

const Footer = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <footer className="w-full px-6 py-4 bg-gray-800 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col md:flex-row justify-start items-start gap-10">
        <div className="flex flex-col gap-4">
          {NavLinks.slice(0, 4).map((link) => (
            <Link key={link.id} href={link.path} className={isActive(link.path) ? 'text-blue-300' : 'text-white'}>
              <div className="text-2xl font-['Cachet Pro'] leading-loose">{link.name}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {NavLinks.slice(4, 8).map((link) => (
            <Link key={link.id} href={link.path} className={isActive(link.path) ? 'text-blue-300' : 'text-white'}>
              <div className="text-2xl font-['Cachet Pro'] leading-loose">{link.name}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {NavLinks.slice(8, 10).map((link) => (
            <Link key={link.id} href={link.path} className={isActive(link.path) ? 'text-blue-300' : 'text-white'}>
              <div className="text-2xl font-['Cachet Pro'] leading-loose">{link.name}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {NavLinks.slice(10, 13).map((link) => (
            <Link key={link.id} href={link.path} className={isActive(link.path) ? 'text-blue-300' : 'text-white'}>
              <div className="text-2xl font-['Cachet Pro'] leading-loose">{link.name}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-start items-center gap-4 mt-4">
        <div className="rounded-full border border-neutral-400 flex justify-center items-center">
          <Link href="/give" className="px-4 py-2 text-center text-blue-300 text-sm font-['Cachet Pro'] leading-tight tracking-tight">
            Give
          </Link>
        </div>
        <div className="bg-blue-300 rounded-full flex justify-center items-center">
          <Link href="/join-the-y" className="px-4 py-2 text-center text-sky-950 text-sm font-['Cachet Pro'] leading-tight tracking-tight">
            Join
          </Link>
        </div>
      </div>
      <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between items-start mt-6">
        <div className="text-white text-sm font-['Verdana'] leading-tight tracking-tight">
          YMCA of the Pikes Peak Region, a 501(c)(3) Non-Profit Organization. Association Offices: 207 North Nevada Avenue, Colorado Springs, CO 80903
        </div>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="text-white text-sm font-['Verdana'] leading-tight tracking-tight">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-white text-sm font-['Verdana'] leading-tight tracking-tight">Terms of Service</Link>
          <Link href="/contact-us" className="text-white text-sm font-['Verdana'] leading-tight tracking-tight">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
