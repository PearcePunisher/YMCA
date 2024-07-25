"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JoinOurTeam from "./components/JoinOurTeamCTA";

const NavLinks = [
  { id: 1, name: "Programs", path: "/programs" },
  { id: 2, name: "Schedules", path: "/schedules" },
  { id: 3, name: "Locations", path: "/locations" },
  { id: 4, name: "Financial Assistance", path: "/financial-assistance" },
  { id: 5, name: "About", path: "/about" },
  { id: 6, name: "Careers", path: "/careers" },
  { id: 7, name: "Contact", path: "/contact" },
  { id: 8, name: "My Account", path: "/my-account" },
  { id: 9, name: "Volunteer", path: "/volunteer" },
  { id: 10, name: "Events", path: "/events" },
  { id: 11, name: "Support", path: "/support" },
  { id: 12, name: "Give", path: "/give" },
  { id: 13, name: "Join the Y", path: "/join-the-y" },
];

const Footer = () => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  console.log('Footer component initialized');

  return (
    <footer className="w-full bg-gray-800 text-white pb-20 font-bookC">
      <JoinOurTeam />
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8">
        <div className="flex flex-col items-start gap-4">
          <a href="/">
            <img
              src="http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/YMCA_Logo.png"
              alt="YMCA Logo"
              className="w-24 mb-4"
            />
          </a>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-4 flex-col">
            {NavLinks.slice(0, 4).map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={
                  isActive(link.path) ? "text-blue-300" : "text-white"
                }>
                <div className="text-xl font-semibold">{link.name}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-4 flex-col">
            {NavLinks.slice(4, 8).map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={
                  isActive(link.path) ? "text-blue-300" : "text-white"
                }>
                <div className="text-xl font-semibold">{link.name}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-4 flex-col">
            {NavLinks.slice(8, 10).map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={
                  isActive(link.path) ? "text-blue-300" : "text-white"
                }>
                <div className="text-xl font-semibold">{link.name}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap gap-4 flex-col">
            {NavLinks.slice(10, 13).map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={
                  isActive(link.path) ? "text-blue-300" : "text-white"
                }>
                <div className="text-xl font-semibold">{link.name}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <div className="rounded-full border border-neutral-400 flex justify-center items-center px-4 py-2">
              <Link
                href="/give"
                className="text-center text-blue-300 text-sm font-semibold">
                Give
              </Link>
            </div>
            <div className="bg-blue-300 rounded-full flex justify-center items-center px-4 py-2">
              <Link
                href="/join-the-y"
                className="text-center text-sky-950 text-sm font-semibold">
                Join
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8 gap-4">
        <div className="text-sm font-normal text-balance">
          YMCA of the Pikes Peak Region, a 501(c)(3) Non-Profit Organization.
          Association Offices: 207 North Nevada Avenue, Colorado Springs, CO
          80903
        </div>
        <div className="flex gap-4 text-sm">
          <Link href="/privacy-policy" className="hover:underline text-white text-nowrap">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline text-white text-nowrap">
            Terms of Service
          </Link>
          <Link href="/contact-us" className="hover:underline text-white text-nowrap">
            Contact Us
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/facebook-f-1.png"
              alt="Facebook"
              className="w-6 h-6 object-contain"
            />
          </Link>
            <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/YouTube-Logo.png"
              alt="YouTube"
              className="w-6 h-6 object-contain"
            />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/Instagram-Logo.png"
              alt="Instagram"
              className="w-6 h-6 object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
