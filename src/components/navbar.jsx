"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./nav-link";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-10 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black font-semibold rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1">Sahitya</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/SAHITYA-MODI">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/sahitya-modi-a203191a8/">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/sahitya.modi.9/">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/naam_ka_engineer_hoon_/">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
